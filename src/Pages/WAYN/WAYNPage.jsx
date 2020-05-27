import React, {Component} from 'react';
import { firebaseApp } from '../../Components/Firebase/FirebaseConfig'
import {Redirect} from "react-router-dom";

class Wayn extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
            'locationID': ''
      };
  
    }

    componentDidMount() {
        let self = this;
        let geoOptions = {
            enableHighAccuracy: true,
            timeout: Infinity,
            maximumAge: 0
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(newLocation,e => alert(e),geoOptions);
        } else {
            alert("Geolocation is not supported by this browser.");
        };

        function newLocation(position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const db = firebaseApp.firestore();
            db.collection("locations").add({
                coordinates: lat.toFixed(6)+','+long.toFixed(6),
                timestamp: new Date().toString()
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                self.setState({
                    locationID: docRef.id
                })
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        };

    }
  
    render() {
        const haimPath = '/wayn/'+this.state.locationID;
        return (
            <div className="Wayn">
                <Redirect to={haimPath} />
            </div>
        );
    }
  
  }
  
export default Wayn;