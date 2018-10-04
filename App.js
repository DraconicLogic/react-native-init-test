import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import MapView, { Polygon, Marker, Callout } from 'react-native-maps';
import MapView from 'react-native-maps';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {

      },
      currentLocation: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      inAnArea: true,
      currentArea: { name: "Northern Quarter" },
      areaPlaylists: [
        { name: '' }
      ],
      areas: [
        {
          coordinates: [
            { latitude: 53.486196968335136, longitude: -2.2359145558205 },
            { latitude: 53.481518879521516, longitude: -2.227015072296922 },
            { latitude: 53.48186415564243, longitude: -2.230208644603522 },
            { latitude: 53.48157614811416, longitude: -2.231231865247196 },
            { latitude: 53.480873844102014, longitude: -2.2306954234442173 },
            { latitude: 53.48029901524724, longitude: -2.2324561665915326 },
            { latitude: 53.48123373546192, longitude: -2.2334539890289307 },
            { latitude: 53.482121, longitude: -2.237719 },
            { latitude: 53.481955, longitude: -2.238277 },
            { latitude: 53.482223, longitude: -2.239435, },
            { latitude: 53.484751, longitude: -2.238727 },
          ],
          name: 'Northern Quarter',
          description: 'Hipster place in Manchester',
          areaColor: 'rgba(219,84,97,0.3)',
          areaBorderColor: 'rgba(219,84,97,1)'
        },
        {
          coordinates: [
            { latitude: 53.485695, longitude: -2.239615, },
            { latitude: 53.486208, longitude: -2.241167, },
            { latitude: 53.486773, longitude: -2.240859 },
            { latitude: 53.486248, longitude: -2.239273 },
          ],
          name: 'Northcoders',
          description: 'Hip-happening place full of cool people',
          areaColor: 'rgba(142,249,243,0.3)',
          areaBorderColor: 'rgba(142,249,243,1)'
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Block DJ</Text>
        <MapView style={styles.map} />
        {/* <MapView style={styles.map}
          // showsUserLocation
          region={this.state.currentLocation} >
        </MapView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171738',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: 600,
    width: 500
  },
  title: {
    marginTop: 5,
    fontSize: 20,
    color: 'white',
  },
  welcomeMsg: {
    color: 'white'
  },
  areaCallout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaCalloutDescription: {
    margin: 5
  },
  areaCalloutName: {
    fontSize: 17,
    marginBottom: 3
  }
});
