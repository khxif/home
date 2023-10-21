import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function MapView() {
  const containerStyles = {
    width: "100%",
    height: "100%",
  };

  const coordinate = { lat: -34.397, lng: 150.644 };
  return (
    <div>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyles}
          center={coordinate}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
}
