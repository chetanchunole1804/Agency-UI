import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import 'leaflet/dist/leaflet.css'

const Map = () => {
  return (
    <div>
      <MapContainer 
      center={[51.505, -0.09]} 
      zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker center={[51.505, -0.09]} radius={10} color="transparant" fillColor="green" opacity={0.5}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
};

export default Map;
