import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';


class Dashboard extends Component {
    constructor(){
       super();
        
    }  
   

    render(){         
       return(
        <div>
       Dashborad page of Insfrastructure manager
       
       Give three buttons over here:
       Add Cluster
       Add Node
       Add Sensor

    </div>
       )}
}

export default Dashboard;