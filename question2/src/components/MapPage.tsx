import React from 'react'
import Map from './Map'
import MapPersonDetail from './MapPersonDetail'
import './MapPage.scss'
import { useSelector } from 'react-redux'
import { IMapMatch } from '../models/IMap'
import { useRouteMatch } from 'react-router'
import { RootState } from '../store'
export default function MapPage() {
    const match:IMapMatch = useRouteMatch()
    const info = useSelector((state:RootState)=>state.people.people)
    const person = info[match.params.id]
    if(!person ) return <div className="map-not-found"><span>Friend Not Found</span></div>
    return (
        <div className="map-page-container">
            <div className="map-container">
                <Map latitude={person.location.latitude} longitude={person.location.longitude}/>
            </div>
            <MapPersonDetail 
                key={person._id}
                id={person._id}
                firstName={person.name.first}
                lastName={person.name.last}
                picture={person.picture}
                email={person.email}
            />
        </div>
    )
}

