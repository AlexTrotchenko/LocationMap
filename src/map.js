import React from "react";
import GoogleMapReact from "google-map-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { data } from "./data";

const Location = ({ locationData }) => (
  <span style={{ backgroundColor: "white" }}>
    <FontAwesomeIcon icon={faBed} size="xl" style={{ color: "black" }} />
    {locationData.nr_beds_total}
  </span>
);

export default function Map({ location }) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCQxJbi1-WlItNI35jD851qromUQVxSI3c" }}
        center={{ lat: location.lat, lng: location.long }}
        zoom={11}
      >
        {data.map((loc) => (
          <Location lat={loc.lat} lng={loc.long} locationData={loc} />
        ))}
      </GoogleMapReact>
    </div>
  );
}
