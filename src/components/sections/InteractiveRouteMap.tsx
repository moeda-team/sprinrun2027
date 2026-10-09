'use client';

import { useEffect } from 'react';
import { CircleMarker, MapContainer, Polyline, TileLayer, Tooltip, useMap } from 'react-leaflet';
import { routeCoordinates, type RouteKey, type RoutePoint } from '@/config/routes';

const routeColors: Record<RouteKey, string> = {
  '5K': 'var(--color-hot-pink)',
  '10K': 'var(--color-forest-green)',
};

function FitRoute({ points, activeRoute }: { points: RoutePoint[]; activeRoute: RouteKey }) {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(points, {
      padding: activeRoute === '5K' ? [24, 24] : [42, 42],
      maxZoom: activeRoute === '5K' ? 16 : 14,
      animate: true,
    });
  }, [activeRoute, map, points]);

  return null;
}

export function InteractiveRouteMap({ activeRoute }: { activeRoute: RouteKey }) {
  const route = routeCoordinates[activeRoute];
  return (
    <div className="relative aspect-[1.06] min-h-[330px] overflow-hidden rounded-[1.5rem] bg-soft-mint sm:min-h-[440px]">
      <MapContainer center={[-6.986, 110.421]} zoom={13} scrollWheelZoom className="h-full w-full" aria-label={`Peta interaktif rute ${activeRoute} di Semarang`}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="route-map-tiles"
        />
        <FitRoute points={route.points} activeRoute={activeRoute} />
        <Polyline positions={route.points} pathOptions={{ color: routeColors[activeRoute], weight: 7, opacity: 0.95, lineJoin: 'round' }} />
        <CircleMarker center={route.start} radius={9} pathOptions={{ color: 'var(--color-off-white)', fillColor: 'var(--color-hot-pink)', fillOpacity: 1, weight: 4 }}>
          <Tooltip direction="top" offset={[0, -8]} permanent>START</Tooltip>
        </CircleMarker>
        <CircleMarker center={route.finish} radius={8} pathOptions={{ color: 'var(--color-off-white)', fillColor: routeColors[activeRoute], fillOpacity: 1, weight: 4 }}>
          <Tooltip direction="bottom" offset={[0, 8]} permanent>FINISH</Tooltip>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}
