import React, { Component } from 'react';
import { firebaseApp } from '../../Components/Firebase/FirebaseConfig'
import { Map } from './../../Components/Map/Map.Component';
 
class Haim extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            locID: this.props.match.params.locID,
            data: []
        };

    }

    componentDidMount() {
        const db = firebaseApp.firestore();
        db.collection('locations').doc(this.state.locID).get()
        .then(doc => {
            if (!doc.exists) {
            console.log('No such document!');
            } else {
                console.log('Document data:', doc.data());
                this.setState({
                    'data': doc.data()
                })
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
    }


 
  render() {
    return (
      <div>
        <Map
            title="Here I am"
            width="100%"
            height="100%"
            coords={this.state.data.coordinates}
        />
        <div><a href="" > link </a></div>
      </div>
    );
  }
}
 
export default Haim;