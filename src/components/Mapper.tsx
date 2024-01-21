"use client";

import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { SearchListingsData } from "@/typings";
import Image from "next/image";
import mapboxgl from "mapbox-gl";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

interface MapperProps {
  searchResults: SearchListingsData[];
}

export default function Mapper({ searchResults }: MapperProps) {
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

  return (
    <Map
      mapLib={import("mapbox-gl")}
      mapboxAccessToken={TOKEN}
      mapStyle={"mapbox://styles/mksamuel/clrcg5imf00a301qvfu7dfupa"}
      style={{ width: "100%", height: "100%", cursor: "pointer" }}
      initialViewState={viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults.map((result) => (
        <Marker
          key={result.id}
          latitude={result.latitude}
          longitude={result.longitude}
          popup={new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: true,
            anchor: "bottom",
          })
            .setLngLat([result.longitude, result.latitude])
            .setHTML(`<strong>${result.title}</strong>`)}
        >
          <Image
            src={"/pin.png"}
            height={20}
            width={20}
            alt={`${result.title} - ${result.location} pin marker`}
            aria-label="push-pin"
            className=" animate-bounce"
          />
        </Marker>
      ))}
    </Map>
  );
}
