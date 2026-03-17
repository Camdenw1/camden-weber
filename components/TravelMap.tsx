'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import { divIcon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

type LocationType = 'regular' | 'mountain' | 'park'

const locations: { name: string; lat: number; lng: number; type: LocationType }[] = [
  // US — regular cities
  { name: 'San Diego, CA', lat: 32.7157, lng: -117.1611, type: 'regular' },
  { name: 'Los Angeles, CA', lat: 34.0522, lng: -118.2437, type: 'regular' },
  { name: 'San Francisco, CA', lat: 37.7749, lng: -122.4194, type: 'regular' },
  { name: 'Santa Barbara, CA', lat: 34.4208, lng: -119.6982, type: 'regular' },
  { name: 'Ventura, CA', lat: 34.2805, lng: -119.2945, type: 'regular' },
  { name: 'Laguna Beach, CA', lat: 33.5427, lng: -117.7854, type: 'regular' },
  { name: 'Palm Springs, CA', lat: 33.8303, lng: -116.5453, type: 'regular' },
  { name: 'Catalina Island, CA', lat: 33.3894, lng: -118.4160, type: 'regular' },
  { name: 'Denver, CO', lat: 39.7392, lng: -104.9903, type: 'regular' },
  { name: 'Boulder, CO', lat: 40.0150, lng: -105.2705, type: 'regular' },
  { name: 'Salt Lake City, UT', lat: 40.7608, lng: -111.8910, type: 'regular' },
  { name: 'Las Vegas, NV', lat: 36.1699, lng: -115.1398, type: 'regular' },
  { name: 'Seattle, WA', lat: 47.6062, lng: -122.3321, type: 'regular' },
  { name: 'New York City, NY', lat: 40.7128, lng: -74.0060, type: 'regular' },
  { name: 'Orlando, FL', lat: 28.5383, lng: -81.3792, type: 'regular' },
  { name: 'Hilton Head, SC', lat: 32.2163, lng: -80.7526, type: 'regular' },
  { name: 'Charleston, SC', lat: 32.7765, lng: -79.9311, type: 'regular' },
  { name: 'Lake Tahoe, CA', lat: 39.0968, lng: -120.0324, type: 'regular' },
  { name: 'Jackson Hole, WY', lat: 43.4799, lng: -110.7624, type: 'regular' },
  { name: 'West Yellowstone, MT', lat: 44.6621, lng: -111.1041, type: 'regular' },
  { name: 'Bozeman, MT', lat: 45.6770, lng: -111.0429, type: 'regular' },
  // US — ski resorts
  { name: 'Big Bear, CA', lat: 34.2439, lng: -116.9114, type: 'mountain' },
  { name: 'Mammoth Mountain, CA', lat: 37.6308, lng: -119.0326, type: 'mountain' },
  { name: 'Park City, UT', lat: 40.6461, lng: -111.4980, type: 'mountain' },
  { name: 'Snowbird, UT', lat: 40.5830, lng: -111.6556, type: 'mountain' },
  { name: 'Solitude, UT', lat: 40.6199, lng: -111.5922, type: 'mountain' },
  { name: 'Brighton, UT', lat: 40.5977, lng: -111.5833, type: 'mountain' },
  { name: 'Brian Head, UT', lat: 37.6980, lng: -112.8494, type: 'mountain' },
  { name: 'Steamboat Springs, CO', lat: 40.4850, lng: -106.8317, type: 'mountain' },
  { name: 'Big Sky, MT', lat: 45.2857, lng: -111.4015, type: 'mountain' },
  // US — national parks
  { name: 'Sequoia National Park', lat: 36.4864, lng: -118.5658, type: 'park' },
  { name: 'Channel Islands National Park', lat: 34.0069, lng: -119.7785, type: 'park' },
  { name: 'Joshua Tree National Park', lat: 33.8734, lng: -115.9010, type: 'park' },
  { name: 'Yosemite National Park', lat: 37.8651, lng: -119.5383, type: 'park' },
  { name: 'Zion National Park', lat: 37.2982, lng: -113.0263, type: 'park' },
  // International — regular
  { name: 'Cabo San Lucas, Mexico', lat: 22.8905, lng: -109.9167, type: 'regular' },
  { name: 'Puerto Vallarta, Mexico', lat: 20.6534, lng: -105.2253, type: 'regular' },
  { name: 'Athens, Greece', lat: 37.9838, lng: 23.7275, type: 'regular' },
  { name: 'Corfu, Greece', lat: 39.6243, lng: 19.9217, type: 'regular' },
  { name: 'Rome, Italy', lat: 41.9028, lng: 12.4964, type: 'regular' },
  { name: 'Naples, Italy', lat: 40.8358, lng: 14.2488, type: 'regular' },
  { name: 'Amalfi Coast, Italy', lat: 40.6340, lng: 14.6027, type: 'regular' },
  { name: 'Amsterdam, Netherlands', lat: 52.3676, lng: 4.9041, type: 'regular' },
  { name: 'Oahu, Hawaii', lat: 21.3069, lng: -157.8583, type: 'regular' },
  // International — ski resort
  { name: 'Whistler, BC', lat: 50.1163, lng: -122.9574, type: 'mountain' },
]

const emojiFor = (type: LocationType) => {
  if (type === 'mountain') return '⛰️'
  if (type === 'park') return '🏞️'
  return '📍'
}

const makeIcon = (type: LocationType) =>
  divIcon({
    html: `<span style="font-size:18px;line-height:1;">${emojiFor(type)}</span>`,
    className: '',
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  })

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
        <Marker
          key={loc.name}
          position={[loc.lat, loc.lng]}
          icon={makeIcon(loc.type)}
        >
          <Tooltip direction="top" offset={[0, -6]} opacity={0.95}>
            <span style={{ fontFamily: 'sans-serif', fontSize: '12px' }}>{loc.name}</span>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  )
}
