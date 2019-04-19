import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';


class AddCluster extends Component {
    constructor(){
        super();
        
    }  
   

    render(){         
       return(
        <div>
        <div>

          <div class = "navbar -fluid p-3 mb-2 bg-success text-white" style={{background: '#32CD32'}}>
            <div class = "container">
                <h1 class ="h1 text-center"style= {{color:"white"  }}>SmartAgro</h1>
            </div>
          </div>


          <form method="post" class="form-inline justify-content-center"  >
              <div class="container col-md-10 ">
                  <p></p>
                  <div class="login-form md-10">
                      <div class="main-div md-10">
                          <div align="center" style={{ fontSize: '20px' }} >New Cluster</div>
                          <div class="panel" align="left">
                          </div>

                          <div><input type="hidden" name="type" value="Traveler" /></div>
                          <div class="form-group">
                              <input  type="text" class="form-control" name="clustername"
                                  placeholder="Cluster  Name" required="true" />
                          </div>

                          <div class="form-group">
                          <select id = "fieldtype" class = "form-control " name = "fieldtype" required>
                            <option value="1">Ranch field</option>
                            <option value="2">GreenHouse Field</option>
                          </select>
                          </div>

                          <div class="form-group">
                              <input onChange={this.emailChangeHandler} type="date" class="form-control" name="datecreated"
                                  placeholder="date created" required="true" />
                          </div>

                          <div class="form-group">
                          <select id = "status" class = "form-control " name = "status" required>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>
                            <option value="3">Under Maintainence </option>
                          </select>
                          </div>

                          <div id="email-error" class="error"></div>
                          <div class="form-group">
                              <input onChange={this.passwordChangeHandler} type="text" class="form-control"
                               name="Model" placeholder="Model" required="true" />
                          </div>

                          <div class="form-group">
                              <input onChange={this.passwordChangeHandler} type="text" class="form-control"
                               name="Make" placeholder="Make" required="true" />
                          </div>

                          <div class="form-group">
                              <input onChange={this.passwordChangeHandler} type="text" class="form-control"
                               name="Location" placeholder="locations" required="true" />
                          </div>
                          
             
                            <div id="map"></div>
                            {/* <script>
                            
                                    function initMap() {
                                        var map = new google.maps.Map(document.getElementById('map'), {
                                                                      zoom: 10,
                                                                      center: {lat: -25.363882, lng: 131.044922}
                                                                      });
                                                                      
                                                                      var marker = new google.maps.Marker({
                                                                                                          position: map.getCenter(),
                                                                                                          map: map
                                                                                                          });
                                    }
                            </script> */}
                            <script async defer
                                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAWQbUssB9ze5_GW2C9oOpSsb8W2ztryjo&callback=initMap">
                            </script>
                                                          

                          <button onClick={this.submitLogin} class="btn btn-primary">Add new Cluster</button>

                      </div>
                  </div>
              </div>
          </form>

      </div>
    </div>
       )}
}

export default AddCluster;