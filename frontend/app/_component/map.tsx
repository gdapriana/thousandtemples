"use client"
// @ts-ignore
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MarkerIcon2X from "leaflet/dist/images/marker-icon-2x.png";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

Icon.Default.mergeOptions({
  iconRetinaUrl: MarkerIcon2X.src,
  iconUrl: MarkerIcon.src,
  shadowUrl: MarkerShadow.src,
});

import { destinationProps } from "@/lib/types";
import { LatLngExpression } from "leaflet";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const metadata = {
  title: "Bali Map's Guide",
  subtitle: "Are you lost? We have a map of the island of Bali",
  map: {
    centerMap: [-8.409518, 115.188919] as LatLngExpression,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
};

export const Map = ({ destinations }: { destinations: destinationProps[] }) => {

  return (
    <main className="w-full mt-24 flex justify-center items-center">
      <div className="w-full p-4 gap-8 max-w-6xl flex flex-col md:flex-row-reverse">
        <header className="flex w-full md:w-1/3 flex-col justify-center items-end">
          <h1 className="text-primary font-bold text-xl">{metadata.title}</h1>
          <p className="font-medium text-muted-foreground text-end">{metadata.subtitle}</p>
          <Button asChild className="mt-4">
            <Link href='https://www.google.com/maps'>Open Google Maps</Link>
          </Button>
        </header>
        <div className="w-full md:w-2/3 aspect-video">
          <MapContainer center={metadata.map.centerMap} zoom={9}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              minZoom={9}
            />
            {destinations?.map((destination: destinationProps) => {
              return (
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
              );
            })}
          </MapContainer>
        </div>
      </div>
    </main>
  );
};
