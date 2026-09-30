'use client';

import { useEffect } from 'react';
import { CircleMarker, MapContainer, Polyline, TileLayer, Tooltip, useMap } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';

type RouteKey = '5K' | '10K';

const routes: Record<RouteKey, { color: string; points: LatLngExpression[]; stops: Array<{ name: string; point: LatLngExpression }> }> = {
  '5K': {
    color: '#f2c230',
    // Approximate course, based on the supplied street-level route description.
    points: [
      [-6.9931, 110.4213], [-6.9914, 110.4230], [-6.9884, 110.4265], [-6.9877, 110.4312],
      [-6.9916, 110.4332], [-6.9960, 110.4288], [-6.9954, 110.4240], [-6.9931, 110.4213],
    ],
    stops: [
      { name: 'Jl. Majapahit', point: [-6.9884, 110.4265] },
      { name: 'Jl. MT Haryono', point: [-6.9916, 110.4332] },
    ],
  },
  '10K': {
    color: '#46a7e9',
    points: [
      [-6.9931, 110.4213], [-6.9987, 110.4223], [-6.9960, 110.4145], [-6.9835, 110.4123],
      [-6.9792, 110.4160], [-6.9725, 110.4204], [-6.9662, 110.4278], [-6.9920, 110.4310],
      [-6.9970, 110.4270], [-6.9931, 110.4213],
    ],
    stops: [
      { name: 'Jl. Sriwijaya / Veteran', point: [-6.9987, 110.4223] },
      { name: 'DP Mall', point: [-6.9835, 110.4123] },
      { name: 'Paragon City Mall', point: [-6.9792, 110.4160] },
      { name: 'Queen City / Kota Lama', point: [-6.9725, 110.4204] },
      { name: 'Jl. MT Haryono', point: [-6.9920, 110.4310] },
    ],
  },
};

function FitRoute({ points, activeRoute }: { points: LatLngExpression[]; activeRoute: RouteKey }) {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(points as [number, number][], {
      padding: activeRoute === '5K' ? [24, 24] : [42, 42],
      maxZoom: activeRoute === '5K' ? 16 : 14,
      animate: true,
    });
  }, [activeRoute, map, points]);

  return null;
}

export function InteractiveRouteMap({ activeRoute }: { activeRoute: RouteKey }) {
  const route = routes[activeRoute];
  const startFinish = route.points[0];

  return (
    <div className="relative aspect-[1.06] min-h-[330px] overflow-hidden rounded-[1.5rem] bg-[#dcebe1] sm:min-h-[440px]">
      <MapContainer center={[-6.986, 110.421]} zoom={13} scrollWheelZoom className="h-full w-full" aria-label={`Peta interaktif rute ${activeRoute} di Semarang`}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitRoute points={route.points} activeRoute={activeRoute} />
        <Polyline positions={route.points} pathOptions={{ color: route.color, weight: 7, opacity: 0.95, lineJoin: 'round' }} />
        <CircleMarker center={startFinish} radius={10} pathOptions={{ color: '#ffffff', fillColor: '#f0509b', fillOpacity: 1, weight: 4 }}>
          <Tooltip direction="top" offset={[0, -8]} permanent>START / FINISH</Tooltip>
        </CircleMarker>
        {route.stops.map((stop) => (
          <CircleMarker key={stop.name} center={stop.point} radius={6} pathOptions={{ color: '#ffffff', fillColor: route.color, fillOpacity: 1, weight: 3 }}>
            <Tooltip direction="top" offset={[0, -8]}>{stop.name}</Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
      <div className="pointer-events-none absolute left-4 top-4 z-[500] rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wide text-deep-green shadow-sm">
        Drag to explore · scroll to zoom
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 z-[500] max-w-[13rem] rounded-xl bg-deep-green/90 px-3 py-2 text-[11px] leading-snug text-white/85 shadow-sm">
        Approximate course — final route subject to race-day approval.
      </div>
    </div>
  );
}
