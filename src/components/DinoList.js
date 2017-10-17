import React, { Component } from 'react';
import Button from './Button';


class DinoList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.dinos.map((dino, index) =>
            <li key={index}>{dino.name}, {dino.size}, {dino.food}
              <img src={dino.image} />
              <Button id={dino._id}/>

            </li>
          )}
        </ul>
      </div>
    );
  }

}

export default DinoList ;
