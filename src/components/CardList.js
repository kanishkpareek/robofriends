import React from 'react';
import Card from './Card';
import NotFound from './NotFound';

const CardList = ({robots}) => {
    let cardComponent = robots.map((user, index) => {
        return <Card key={index}  id={robots[index].id} name={robots[index].name} username={robots[index].username} email={robots[index].email} />
    })
    
    if(cardComponent.length === 0)
        cardComponent = <NotFound />;

    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;