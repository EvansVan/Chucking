import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
  
  class App extends Component {
    state = {
      categories:['animal',
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
  };
    render() {
      return (
        <> 
        {this.jaza()}         
        </>
      );
    }
    jaza = (e) =>{
    let jokes = []
    let sasa = this.state.categories.length;
    for (let i=0; i<sasa;i++){
        jokes.push(  
        <div class= "col-3">
          <button id={this.state.categories[i]} class="btn btn-primary btn-block" type="button" onClick={this.getChucked.bind(this)}>{this.state.categories[i]}</button>
        </div>
      )}
      return jokes
    }
    getChucked = (e) =>{
      let category = e.target.getAttribute("id");
      console.log(category);
      fetch('https://api.chucknorris.io/jokes/random?category=' + category)
          .then(res => res.json())
          .then((data) => {
            this(alert(data.value))
          })
          .catch(console.log)
    }
  } 
  
export default App;
