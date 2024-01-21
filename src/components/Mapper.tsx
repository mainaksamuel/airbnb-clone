"use client";

import { useRef, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { SearchListingsData } from "@/typings";
import Image from "next/image";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

interface MapperProps {
  searchResults: SearchListingsData[];
}

export default function Mapper({ searchResults }: MapperProps) {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    title?: string;
    longitude?: number;
    latitude?: number;
  }>({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.longitude,
    latitude: result.latitude,
  }));
  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    latitude: typeof center === "object" ? center.latitude : -1.286389,
    longitude: typeof center === "object" ? center.longitude : 36.817223,
    zoom: 12,
  });

  const handleMarkerClick = ({
    title,
    latitude,
    longitude,
  }: SearchListingsData) => {
    setSelectedLocation({
      title,
      latitude,
      longitude,
    });
    setShowPopup(true);
  };

  return (
    <Map
      mapLib={import("mapbox-gl")}
      mapboxAccessToken={TOKEN}
      mapStyle={"mapbox://styles/mksamuel/clrcg5imf00a301qvfu7dfupa"}
      style={{ width: "100%", height: "100%" }}
      initialViewState={viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.id}>
          <Marker latitude={result.latitude} longitude={result.longitude}>
            <Image
              src={"/pin.png"}
              height={20}
              width={20}
              alt={`${result.title} - ${result.location} pin marker`}
              aria-label="push-pin"
              className="cursor-pointer animate-bounce"
              onClick={() => handleMarkerClick(result)}
            />
          </Marker>
        </div>
      ))}

      {showPopup && (
        <Popup
          latitude={selectedLocation.latitude!}
          longitude={selectedLocation.longitude!}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          {selectedLocation.title}
        </Popup>
      )}
    </Map>
  );
}
