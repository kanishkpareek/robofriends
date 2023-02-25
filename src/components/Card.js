import React, {Component} from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

class Card extends Component {
    render() {
        const {username, name, email, id} = this.props;
        return (
            <Link style={{color: 'black', textDecoration: 'none'}} to={`user/${username}`}>
                <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                        <img alt="robots" src={`https://robohash.org/${id}?size=150x150`} />
                        <div className="card">
                            <h3>{name}</h3>
                            <p>{email}</p>
                        </div>
                </div>
            </Link>
        );
    }
}

export default Card;