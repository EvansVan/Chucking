import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

  class App extends Component {
    render() {
      return (
        <div class="container pt-5">
          <div class= "row">
            <div class= "col-3">
              <button id="animal" class="btn btn-primary btn-block" type="button" onClick={this.getChucked.bind(this)}>Animal</button>
            </div> 
            <div class= "col-3">
              <button id="career" class="btn btn-primary btn-block" type="button" onClick={this.getChucked.bind(this)}>Career</button>
            </div> 
            <div class= "col-3">
              <button id="celebrity" class="btn btn-primary btn-block" type="button" onClick={this.getChucked.bind(this)}>Celebrity</button>
            </div> 
            <div class= "col-3">
              <button id="dev" class="btn btn-primary btn-block" type="button" onClick={this.getChucked.bind(this)}>Dev</button>
            </div> 
          </div>
          <div class= "row pt-5">
            <div class= "col-3">
              <button id="explicit" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Explicit</button>
            </div> 
            <div class= "col-3">
              <button id="history" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>History</button>
            </div> 
            <div class= "col-3">
              <button id="food" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Food</button>
            </div> 
            <div class= "col-3">
              <button id="political" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Political</button>
            </div>
          </div>
          <div class= "row pt-5">
            <div class= "col-3">
              <button id="fashion" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Fashion</button>
            </div> 
            <div class= "col-3">
              <button id="religion" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Religion</button>
            </div> 
            <div class= "col-3">
              <button id="music" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Music</button>
            </div> 
            <div class= "col-3">
              <button id="money" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Money</button>
            </div>
          </div>
          <div class= "row pt-5">
            <div class= "col-3">
              <button id="movie" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Movie</button>
            </div> 
            <div class= "col-3">
              <button id="travel" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Travel</button>
            </div> 
            <div class= "col-3">
              <button id="science" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Science</button>
            </div> 
            <div class= "col-3">
              <button id="sport" class="btn btn-primary" type="submit" onClick={this.getChucked.bind(this)}>Sport</button>
            </div>
          </div>
        </div>
      );
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