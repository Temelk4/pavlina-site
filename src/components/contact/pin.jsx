import React from "react";
import {ImLocation} from "react-icons/im"


const LocationPin = ({location, text}) => (
  <div className="pin">
    <ImLocation className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export default LocationPin