import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import { userInfo } from 'os';

//select name,username from users where role=farmer

class ListFarmers extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }  
    componentWillMount()
    {
        var self = this;
        console.log("wil mount..")
        axios.get("http://localhost:3001/getFarmerList")
        .then(function (response) {
            console.log("response in listfarmer",response.data.data);
         
            if (response.data.data != null) {
                self.setState({
                    data: response.data.data
                })
            }
            if (response.status === 204) {
                console.log("hey data is not present");
                console.log("data" + response.data.status)
                return
            }
        })
    }


    render(){ 
        let farmers;
        farmers = this.state.data.map(farmer => {        
       return(
           <div>
               <table>
                   <tbody>
               
            <tr>
               <td>{farmer.firstName}</td>      
               <td>{farmer.lastName}</td>                                  
               <td>{farmer.email}</td>                      
           </tr>
           </tbody>
           </table>
           </div>
       )
    });
    if (this.state.data != null) {
        return (
            <div>
                    {farmers}
                </div>

        )


    }

}
}


export default ListFarmers;