import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

  class App extends Component {
    state = {
      jokes:[]
  };
    categories= ['animal',
      'career',
      'celebrity',
      'dev',
      'explicit',
      'history',
      'food',
      'political',
      'fashion',
      'religion',
      'music',
      'money',
      'movie',
      'travel',
      'science',
      'sport']

    render() {
      return (
        <> 
        {this.jaza()} 
        {this.cards()} 
        </>
      );
    }
    jaza = (e) =>{ 
      let jokes = []
      let sasa = this.categories.length;
      for (let i=0; i<sasa;i++){
          jokes.push(  
          <container fluid>
            <button id={this.categories[i]} class="btn btn-primary btn-block" type="button" onClick={this.getChucked.bind(this)}>{this.categories[i]}</button>
          </container>
        )}
      return jokes
    }
    cards = (e) => {
      let  cadi = []
      cadi.push(
        <div>
          <center><h1>Jokes</h1></center>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{this.state.jokes.categories}</h5>
                <p class="card-text">{this.state.jokes.value}</p>
              </div>
            </div>
        </div>
        )
    return cadi
    }
    getChucked = (e) =>{
      let category = e.target.getAttribute("id");
      console.log(category);
      fetch('https://api.chucknorris.io/jokes/random?category=' + category)
          .then(res => res.json())
          .then((data) => {
            this.setState({jokes: data })
          })
          .catch(console.log)
    }
  } 
  
export default App;
