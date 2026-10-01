'use client';

import { useEffect } from 'react';
import { CircleMarker, MapContainer, Polyline, TileLayer, Tooltip, useMap } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';

type RouteKey = '5K' | '10K';

const routes: Record<RouteKey, { color: string; points: LatLngExpression[]; start: LatLngExpression; finish: LatLngExpression }> = {
  '5K': {
    color: 'var(--color-hot-pink)',
    points: [
      [-6.9945108, 110.4206657], [-6.9915690, 110.4222470], [-6.9913020, 110.4223100],
      [-6.9908480, 110.4219190], [-6.9892640, 110.4226200], [-6.9891240, 110.4229370],
      [-6.9895890, 110.4238860], [-6.9898610, 110.4239700], [-6.9903280, 110.4238160],
      [-6.9905860, 110.4239960], [-6.9938600, 110.4305900], [-6.9942810, 110.4319560],
      [-6.9919650, 110.4319970], [-6.9857990, 110.4316250], [-6.9855374, 110.4315704],
      [-6.9859110, 110.4202960], [-6.9876840, 110.4201560], [-6.9885360, 110.4197700],
      [-6.9898210, 110.4223640], [-6.9909730, 110.4219060], [-6.9913150, 110.4223350],
      [-6.9915690, 110.4222470], [-6.9944060, 110.4205860],
    ],
    start: [-6.9945108, 110.4206657],
    finish: [-6.9944060, 110.4205860],
  },
  '10K': {
    color: 'var(--color-forest-green)',
    points: [
      [-6.9943487, 110.4204500], [-6.9943587, 110.4206800], [-6.9915487, 110.4222500],
      [-6.9912787, 110.4223100], [-6.9908787, 110.4218500], [-6.9892387, 110.4226200],
      [-6.9890987, 110.4229400], [-6.9894987, 110.4239600], [-6.9899387, 110.4239500],
      [-6.9905287, 110.4236700], [-6.9921487, 110.4270900], [-6.9923087, 110.4269800],
      [-6.9942587, 110.4319600], [-6.9945787, 110.4319800], [-6.9919487, 110.4320000],
      [-6.9853687, 110.4315900], [-6.9701087, 110.4310100], [-6.9700087, 110.4306200],
      [-6.9692306, 110.4303524], [-6.9697132, 110.4276601], [-6.9693162, 110.4275723],
      [-6.9692173, 110.4280210], [-6.9684705, 110.4280133], [-6.9689380, 110.4250662],
      [-6.9709508, 110.4230257], [-6.9711842, 110.4225043], [-6.9718204, 110.4221291],
      [-6.9773887, 110.4165700], [-6.9778367, 110.4166030], [-6.9779247, 110.4165160],
      [-6.9782557, 110.4156770], [-6.9834847, 110.4101970], [-6.9837287, 110.4100160],
      [-6.9842767, 110.4099440], [-6.9847697, 110.4101510], [-6.9861697, 110.4132190],
      [-6.9877417, 110.4181910], [-6.9896547, 110.4224300], [-6.9909307, 110.4218060],
      [-6.9912807, 110.4223100], [-6.9915407, 110.4222490], [-6.9943507, 110.4206710],
    ],
    start: [-6.9943700, 110.4204500],
    finish: [-6.9943720, 110.4206710],
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
  return (
    <div className="relative aspect-[1.06] min-h-[330px] overflow-hidden rounded-[1.5rem] bg-soft-mint sm:min-h-[440px]">
      <MapContainer center={[-6.986, 110.421]} zoom={13} scrollWheelZoom className="h-full w-full" aria-label={`Peta interaktif rute ${activeRoute} di Semarang`}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="route-map-tiles"
        />
        <FitRoute points={route.points} activeRoute={activeRoute} />
        <Polyline positions={route.points} pathOptions={{ color: route.color, weight: 7, opacity: 0.95, lineJoin: 'round' }} />
        <CircleMarker center={route.start} radius={9} pathOptions={{ color: 'var(--color-off-white)', fillColor: 'var(--color-hot-pink)', fillOpacity: 1, weight: 4 }}>
          <Tooltip direction="top" offset={[0, -8]} permanent>START</Tooltip>
        </CircleMarker>
        <CircleMarker center={route.finish} radius={8} pathOptions={{ color: 'var(--color-off-white)', fillColor: route.color, fillOpacity: 1, weight: 4 }}>
          <Tooltip direction="bottom" offset={[0, 8]} permanent>FINISH</Tooltip>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}
