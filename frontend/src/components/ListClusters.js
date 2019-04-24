import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import { userInfo } from 'os';

//select cluster_name,cluster_id(show nhi karna bus),location,status from cluster where user_email=neha@gmail.com (obviously role=farmer)

class ListClusters extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            update_email:""
        }
    }  
    componentWillMount()
    {
        var self = this;
        console.log("will mount..")
        const data={
            id:this.state.update_email
        }
        axios.post("http://localhost:3001/getClusterList",data)
        .then(function (response) {
            console.log("response in getClusterList",response.data.data);
         
            if (response.data.data != null) {
                self.setState({
                    data: response.data.data
                })
            }
            if (response.status === 204) {
                console.log("No cluster found for this farmer");
                console.log("data" + response.data.status)
                return
            }
        })
    }


    render(){ 
        let clusters;
        clusters = this.state.data.map(cluster => {        
       return(
           <div>
               <table>
                   <tbody>
               
            <tr>
               <td>{cluster.cluster_name}</td>      
               {/* <td>{cluster.location}</td>                                  
               <td>{cluster.status}</td>                       */}
           </tr>
           </tbody>
           </table>
           </div>
       )
    });
    if (this.state.data != null) {
        return (
            <div>
                    {clusters}
                </div>

        )


    }

}
}

export default ListClusters;