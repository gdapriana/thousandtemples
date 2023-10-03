import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Title from "../globals/Title.jsx";
import Button from "../globals/Button.jsx";
import "../../css/leaflet.css";
import "leaflet/dist/leaflet.css";

const metadata = {
  title: "Bali Map's Guide",
  subtitle: "Are you lost? We have a map of the island of Bali",
  map: {
    centerMap: [-8.409518, 115.188919],
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
};

const Map = ({ destinations }) => {
  return (
    <div className="w-full dark:bg-neutral-950 py-20 flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row-reverse gap-8 max-w-7xl p-8">
        <div className="w-full md:w-1/3 flex flex-col justify-center items-end gap-5">
          <Title
            title={metadata.title}
            subtitle={metadata.subtitle}
            subtitleClass={"text-end"}
            customClass={"flex flex-col items-end"}
          />
          <Button text={"Open Google Maps"} path={"/activities"} />
        </div>
        <div className="w-full md:w-2/3">
          <div className="w-full aspect-square md:aspect-video rounded-xl overflow-hidden">
            <MapContainer center={metadata.map.centerMap} zoom={9}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                minZoom={9}
              />
              {destinations.map((item, idx) => {
                return (
                  <Marker key={idx} position={item.map}>
                    <Popup>
                      <div
                        className="w-full aspect-video rounded-lg bg-cover"
                        style={{
                          backgroundImage: `url(https://source.unsplash.com/random/1336x768/?${item.slug})`,
                        }}
                      ></div>
                      <h1 className="text-base mt-2 mb-1 font-bold m-0 p-0">
                        {item.title}
                      </h1>
                      <p className="cutoff-text cutoff-text-1">
                        {item.description}
                      </p>
                      <a
                        href={item.slug}
                        className="block text-center font-semibold bg-violet-500 py-2 my-2 px-3 rounded-lg"
                        style={{ color: "#fff" }}
                      >
                        Details
                      </a>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
