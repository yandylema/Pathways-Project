import MapView from 'react-native-web-maps';

export default function MapLogic() {
    return (<>
            <MapView style={{ alignSelf: 'stretch', height: '100%' }} region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}></MapView></> )

}