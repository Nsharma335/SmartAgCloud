import React, {Component} from 'react';
//nimport '../App.css';
import axios from 'axios';
//npmimport '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {
    constructor(){
        super();

    }
    // componentDidMount()
    // {
    //   console.log("in will mount...")
    //   this.drawChart();
    // }


    render(){
       return(
         <div>
    <div class = "navbar p-3 mb-2 bg-success text-white" style={{background: '#32CD32'}}>
      <div class = "container">
        <h1 class ="h1"style= {{color:"white"  }}>SmartAgro</h1>

      </div>
    </div>

    <div class = "container text-muted" >
    <h1> Sensors </h1>
      <div class = "row">
        <div class = "col-md-4 col-lg-3">
          <div class = "card">
            <div class = "card-block">
              <a href="">
              <img class = "card-img" src ={require('../images/temperature.jpg')} alt="Temperature"/>
              <h3 class = "card-title text-center text-muted" style = {{color: "grey"}}> Temperature  </h3>
              </a>
            </div>
          </div>
        </div>
        <div class = "col-md-4 col-lg-3">
          <div class = "card">
            <div class = "card-block">
            <a href="">
              <img class = "card-img" src = {require('../images/moisture.jpg')} alt="Moisture"/>
              <h3 class = "card-title text-center" style = {{color: "grey"}}>  Moisture </h3>
              </a>
            </div>
          </div>
        </div>
        <div class = "col-md-4 col-lg-3">
          <div class = "card">
            <div class = "card-block">
            <a href="">
              <img class = "card-img img-rounded" src ={require('../images/addnew.jpg')} alt="sensor 1"/ >
              <h3 class = "card-title text-center"style = {{color: "grey"}}> Add new </h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      <p></p>
      <p></p>

      <h1> Cluster </h1>
      <div class = "row">
        <div class = "col-md-4 col-lg-3">
          <div class = "card">
            <div class = "card-block">
            <a href="">
              <img class = "card-img" src ={require('../images/cluster.jpg')} alt="Cluster 1"/>
              <h3 class = "card-title text-center"style = {{color: "grey"}}> Cluster 1  </h3>
              </a>
            </div>
          </div>
        </div>
        <div class = "col-md-4 col-lg-3">
          <div class = "card">
            <div class = "card-block">
            <a href="">
              <img class = "card-img" src = {require('../images/cluster.jpg')} alt="Cluster 2"/>
              <h3 class = "card-title text-center"style = {{color: "grey"}}>  Cluster 2 </h3>
              </a>
            </div>
          </div>
        </div>
        <div class = "col-md-4 col-lg-3">
          <div class = "card">
            <div class = "card-block">
            <a href="">
              <img class = "card-img img-rounded" src = {require('../images/cluster.jpg')} alt="Add new" />
              <h3 class = "card-title text-center"style = {{color: "grey"}}> Add new </h3>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

   </div>
       )}
}

export default Dashboard;
