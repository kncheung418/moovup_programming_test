import React from 'react'
import './People.scss'
import { IPeopleProps } from '../models/IPeople'

const People:React.FC<IPeopleProps> = (props) => {
    return (
            <div className="people-container" onClick={props.changeFindFriend}>
                <div className="people-image-container">
                    <img src={props.picture} alt="icon"/>
                </div>
                <div className="people-content-container">
                    <div className="people-content-name">
                        <span>{props.firstName + ' ' + props.lastName}</span>
                    </div>
                    {/* <div className="people-content-email">
                        <span>{props.email}</span>
                    </div> */}
                </div>
            </div>
    )
}
export default People
