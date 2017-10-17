import React, { Component } from 'react';

class Formulaire extends Component {

  render() {
    return (
      <form action="http://localhost:8083/add" method="POST" encType="multipart/form-data">
        <input type="text" name="name" placeholder="Entrez le nom de votre dinosaure"/>
        <input type="text" name="size" placeholder="Entrez sa taille"/>
        <input type="text" name="food" placeholder="Régime alimentaire"/>
        <input type="file" name="image"/>
        <button type="submit">Denver arrive</button>
      </form>
    );
  }

}

export default Formulaire;
