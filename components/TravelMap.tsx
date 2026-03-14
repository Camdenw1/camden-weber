'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const locations = [
  // US
  { name: 'San Diego, CA', lat: 32.7157, lng: -117.1611 },
  { name: 'Los Angeles, CA', lat: 34.0522, lng: -118.2437 },
  { name: 'San Francisco, CA', lat: 37.7749, lng: -122.4194 },
  { name: 'Lake Tahoe, CA', lat: 39.0968, lng: -120.0324 },
  { name: 'Yosemite, CA', lat: 37.8651, lng: -119.5383 },
  { name: 'Big Bear, CA', lat: 34.2439, lng: -116.9114 },
  { name: 'Catalina Island, CA', lat: 33.3894, lng: -118.4160 },
  { name: 'Santa Barbara, CA', lat: 34.4208, lng: -119.6982 },
  { name: 'Ventura, CA', lat: 34.2805, lng: -119.2945 },
  { name: 'Laguna Beach, CA', lat: 33.5427, lng: -117.7854 },
  { name: 'Joshua Tree, CA', lat: 33.8734, lng: -115.9010 },
  { name: 'Palm Springs, CA', lat: 33.8303, lng: -116.5453 },
  { name: 'Denver, CO', lat: 39.7392, lng: -104.9903 },
  { name: 'Boulder, CO', lat: 40.0150, lng: -105.2705 },
  { name: 'Salt Lake City, UT', lat: 40.7608, lng: -111.8910 },
  { name: 'Las Vegas, NV', lat: 36.1699, lng: -115.1398 },
  { name: 'Jackson Hole, WY', lat: 43.4799, lng: -110.7624 },
  { name: 'West Yellowstone, MT', lat: 44.6621, lng: -111.1041 },
  { name: 'Bozeman, MT', lat: 45.6770, lng: -111.0429 },
  { name: 'Big Sky, MT', lat: 45.2857, lng: -111.4015 },
  { name: 'Seattle, WA', lat: 47.6062, lng: -122.3321 },
  { name: 'New York City, NY', lat: 40.7128, lng: -74.0060 },
  { name: 'Orlando, FL', lat: 28.5383, lng: -81.3792 },
  { name: 'Hilton Head, SC', lat: 32.2163, lng: -80.7526 },
  { name: 'Charleston, SC', lat: 32.7765, lng: -79.9311 },
  { name: 'Naples, FL', lat: 26.1420, lng: -81.7948 },
  // International
  { name: 'Cabo San Lucas, Mexico', lat: 22.8905, lng: -109.9167 },
  { name: 'Puerto Vallarta, Mexico', lat: 20.6534, lng: -105.2253 },
  { name: 'Athens, Greece', lat: 37.9838, lng: 23.7275 },
  { name: 'Corfu, Greece', lat: 39.6243, lng: 19.9217 },
  { name: 'Rome, Italy', lat: 41.9028, lng: 12.4964 },
  { name: 'Amsterdam, Netherlands', lat: 52.3676, lng: 4.9041 },
  { name: 'Oahu, Hawaii', lat: 21.3069, lng: -157.8583 },
  { name: 'Amalfi Coast, Italy', lat: 40.6340, lng: 14.6027 },
]

export default function TravelMap() {
  useEffect(() => {
    // Fix leaflet default icon path issue in Next.js
  }, [])

  return (
    <MapContainer
      center={[30, 10]}
      zoom={2}
      style={{ height: '420px', width: '100%' }}
      scrollWheelZoom={false}
      className="rounded-sm"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {locations.map((loc) => (
        <CircleMarker
          key={loc.name}
          center={[loc.lat, loc.lng]}
          radius={6}
          pathOptions={{
            color: '#B5603A',
            fillColor: '#B5603A',
            fillOpacity: 0.85,
            weight: 1.5,
          }}
        >
          <Tooltip direction="top" offset={[0, -6]} opacity={0.95}>
            <span className="font-sans text-xs">{loc.name}</span>
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  )
}
