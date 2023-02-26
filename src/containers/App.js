import React, {useState, useEffect} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RobotDetails from '../components/RobotDetails';
import Footer from '../components/Footer';

// const state = {
//   robots: [],
//   searchTerm: ''
// }

//class App extend Component {
function App () {
  // constructor() {
  //   super();
  //   this.state = state;
  // }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => this.setState({robots: data}));
  // }

  const [robots, setRobots] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setRobots(data));
  },[])

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
    //this.setState({searchTerm: event.target.value});
  }

  //const { robots, searchTerm } = "";
  const filteredRobots  = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
  })
  
  if(!robots.length){
    return (
      <div className='tc'>
        <h1 className="yellow f1">Loading...</h1>
      </div>
    );
  }
  else{
    return (
      <ErrorBoundry>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={
              <div className='tc'>
                <div className="pa4 shadow-3" style={{background: '#053b7ef2', borderBottom: '3px solid #ffd700'}}>
                  <h1 className="yellow f1" style={{margin: '0 0 20px 0'}}>RoboFriends</h1>
                  <SearchBox searchChange={onSearchChange} />
                </div>
                <Scroll>
                  <CardList robots={filteredRobots} />
                </Scroll>
                <Footer />
              </div>
            }></Route>
            <Route path='user/:username' element={
              <div>
                <RobotDetails robots={filteredRobots} />
                <Footer />
              </div>
            }></Route>
          </Routes>
        </Router>
      </ErrorBoundry>
    );
  }
}

export default App;
