"use client"
// @ts-ignore
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MarkerIcon2X from "leaflet/dist/images/marker-icon-2x.png";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";
import { LatLngExpression } from "leaflet";
import {destinationProps} from "@/lib/types";

Icon.Default.mergeOptions({
  iconRetinaUrl: MarkerIcon2X.src,
  iconUrl: MarkerIcon.src,
  shadowUrl: MarkerShadow.src,
});

const metadata = {
  centerMap: [-8.409518, 115.188919] as LatLngExpression,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
}

export const Map = ({ destination }: {destination: destinationProps }) => {
  return (
    <MapContainer center={[destination?.latitude, destination?.longitude]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        minZoom={9}
      />
      <Marker key={destination?.id} position={[destination?.latitude, destination?.longitude]}>
        <Popup>
          <div
            className="w-full aspect-video rounded-lg bg-cover"
            style={{
              backgroundImage: `url(${destination?.cover})`,
            }}
          ></div>
          <h1 className="text-base mt-2 mb-1 font-bold m-0 p-0">{destination?.name}</h1>
          <p className="line-clamp-2">{destination?.description}</p>
        </Popup>
      </Marker>
    </MapContainer>
  )
}