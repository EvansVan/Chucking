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
        <body>
          <div class ="container mt-5" >
            <div class="row pb-3">
            {this.jaza()}  
            {this.cards()}
            </div>
          </div>
        </body>
        );}
    jaza = (e) =>{ 
      let jokes = []
      let sasa = this.categories.length;
      for (let i=0; i<sasa;i++){
          jokes.push(  
          <div class="col-3 pt-3">
              <div class="w-100"></div>
            <button id={this.categories[i]} class=" btn btn-primary btn-block" type="button" 
                     onClick={this.getChucked.bind(this)}>{this.categories[i]}</button>
          </div>
        )}
      return jokes
    }
    cards = (e) => {
      let  cadi = []
      cadi.push(
        <div class="mt-5">
          <screenLeft><h1>Jokes</h1></screenLeft>
          <div class="col-lg-3 col-md-6 col-sm-12  py-2 ">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{this.state.jokes.categories}</h5>
                  <p class="card-text">{this.state.jokes.value}</p>
                </div>
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
