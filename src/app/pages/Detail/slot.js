import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';
const jsonData = { "slots" : {
    "slot1": "9:00 am",
    "slot2": "11:00 am",
    "slot3": "01:00 pm",
    "slot4": "03:00 pm",
    "slot5": "05:00 pm",
    "slot6": "07:00 pm",
    "slot7": "09:00 pm",
    "slot8": "11:00 pm",
 }
}
export default class Slot extends Component {
  constructor(props) {
     super(props);
     this.state ={
       bookingDate: this.props.navigation.state.params.bookingDate
     }
 
   }
  _onPressBack(){
    const {goBack} = this.props.navigation
    goBack()
  }
  _bookSlot(status,key,value){
    const month = this.state.bookingDate.month
    const date = this.state.bookingDate.day
    const user = firebase.auth().currentUser
    const uid = user.uid
    let userDataJson = {}
    if(status)
    userDataJson[key] = uid
    else
    userDataJson[key] = null
 
    firebase.database().ref('users').child(uid).child("appointments").child(month).child(date).update(userDataJson)
  }
  render() {
    let _this = this
    const slots = jsonData.slots
    const slotsarr = Object.keys(slots).map( function(k) {
      return (  <View key={k} style={{margin:5}}>
                  <Animbutton countCheck={0} onColor={"green"} effect={"pulse"} _onPress={(status) => _this._bookSlot(status,k,slots[k]) } text={slots[k]} />
                </View>)
    });
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={Commonstyle.toolbar}>
        <TouchableOpacity onPress={() => this._onPressBack() }><Text style={Commonstyle.toolbarButton}>Back</Text></TouchableOpacity>
                    <Text style={Commonstyle.toolbarTitle}></Text>
                    <Text style={Commonstyle.toolbarButton}></Text>
      </View>
      { slotsarr }
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});