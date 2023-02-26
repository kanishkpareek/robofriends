import React,{Component} from 'react';
import WithRouter from '../containers/WithRouter';
import './RobotDetails.css';

class RobotDetails extends Component{
    render() {
        const robots = this.props.robots;
        const username = this.props.params.username;

        const filteredRobots  = robots.filter(robot => {
            return robot.username.toLowerCase().includes(username.toLowerCase());
        })

        const RobotDetails = filteredRobots.map((user, index) => {
            return user
        })
        //console.log(RobotDetails[0].name);
        return(
            <div>
                <div className="tc pa4 shadow-3" style={{background: '#053b7ef2', borderBottom: '3px solid #ffd700'}}>
                    <h1 className="yellow f1" style={{margin: '0 0 20px 0'}}>RoboFriends</h1>
                    <div style={{height: '68px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a style={{fontWeight: '600'}} className="f4 link dim ph3 pv2 mb2 dib black bg-yellow" href="/robofriends">View all RoboFriends</a></div>
                </div>
                <section className="pa4 main-section">
                    <div className="fl w-40 tc">
                        <div className="bg-light-green pa2 shadow-5" style={{width: '300px', height: '300px', borderRadius: '50%', display: 'inline-block'}}>
                            <img alt="robots" src={`https://robohash.org/${RobotDetails[0].id}?size=200x200`} />
                        </div>
                    </div>
                    <div className="fl w-60">
                        <ul>
                            <li className='yellow'><span>Name:</span> <strong>{RobotDetails[0].name}</strong></li>
                            <li className='yellow'><span>Email:</span> <strong>{RobotDetails[0].email}</strong></li>
                            <li className='yellow'><span>Phone:</span> <strong>{RobotDetails[0].phone}</strong></li>
                            <li className='yellow'><span>Website:</span> <strong>{RobotDetails[0].website}</strong></li>
                            <li className='yellow'><span>Company:</span> <strong>{RobotDetails[0].company.name}</strong></li>
                            <li className='yellow'><span>Address:</span> <strong>{RobotDetails[0].address.street}, {RobotDetails[0].address.city}, {RobotDetails[0].address.zipcode}</strong></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default WithRouter(RobotDetails);