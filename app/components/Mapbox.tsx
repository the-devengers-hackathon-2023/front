'use client'
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Pin from './Pin';

export default function Mapbox({lon, lat} : {lon: number, lat:number}) {
    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoiYXphZmZhbG9uIiwiYSI6ImNsbm5oaWJ1NzA1encyam1udnhlcTNqNWwifQ.C0ZtlgzmiWtzuZc4K510ZQ"
            initialViewState={{
                longitude: lon,
                latitude: lat,
                zoom: 10
            }}
            style={{width: 600, height: 400}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <Marker longitude={lon} latitude={lat} anchor="bottom" >
                <Pin/>
            </Marker>
        </Map>
    )
}