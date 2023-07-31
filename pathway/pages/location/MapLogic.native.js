import MapView from 'react-native-maps';
import { useState } from 'react';

export default function MapLogic(props) {
    const [mapRegion, setmapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    
    return (<MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      />);
}