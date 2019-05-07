import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import { userInfo } from 'os';

//select name,username from users where role=farmer

class ListFarmers extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            email:""
        }
        this.setEmail=this.setEmail.bind(this);
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
                    data: response.data.data.slice(-5)
                })
            }
            if (response.status === 204) {
                console.log("hey data is not present");
                console.log("data" + response.data.status)
                return
            }
        })
    }

    setEmail(e){
        this.setState({
            email:e.target.value
        })
    }


selectFarmerEmailHandler(e)
{
    e.preventDefault();
    localStorage.setItem('email_id',e.target.dataset.id);
   // window.location.href = "http://localhost:3000/addcluster"

}

render(){
    let farmers;
     farmers = this.state.data.map(farmer => {
return(
    <div>
<div className="container">
  <div className="row">
    <div className="col-sm-12">

      <form>
          <div>
            <tbody><tr><td href='#' onClick={this.selectFarmerEmailHandler} data-id={farmer.email}> {farmer.firstName} {farmer.lastName}</td></tr>
            </tbody>
          </div>
        {/* {<div className="radio">
          <label>
          <input type="radio" value={farmer.email}
          name="gh" checked={this.state.email} onClick={this.setEmail}/>
            {farmer.email} ,{farmer.firstName} {farmer.lastName}
          </label>
</div> }*/}
      </form>

    </div>
  </div>
</div>
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
