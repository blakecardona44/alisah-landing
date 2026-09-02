'use client';

import React from 'react';
import Map, { Marker } from 'react-map-gl/mapbox';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

// 245 Park Avenue, New York, NY 10167
const COORDS = { longitude: -73.9755, latitude: 40.7546 };

const LocationMap: React.FC = () => {
  // Without a token Mapbox renders a blank canvas and logs a 401, so degrade to
  // a neutral placeholder instead.
  if (!MAPBOX_TOKEN) {
    return (
      <div className="h-[400px] w-full flex items-center justify-center bg-gray-100 text-sm text-gray-500">
        Map unavailable — set NEXT_PUBLIC_MAPBOX_TOKEN to enable it.
      </div>
    );
  }

  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      style={{ height: '400px', width: '100%' }}
      initialViewState={{ ...COORDS, zoom: 11 }}
    >
      <Marker {...COORDS}>
        <div style={{ width: 30, height: 30, background: 'red', borderRadius: '50%' }} />
      </Marker>
    </Map>
  );
};

export default LocationMap;
