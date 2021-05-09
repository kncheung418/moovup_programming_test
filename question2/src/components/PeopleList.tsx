import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import People from './People'
import './PeopleList.scss'
import { IPeopleInformation } from '../models/IPeople'
import { push } from 'connected-react-router'

export default function PeopleList() {
    const dispatch = useDispatch()
    const peopleObj = useSelector((state: RootState) => state.people.people)
    const searchKey = useSelector((state: RootState) => state.search.searchKey)

    if (!peopleObj) return <div></div>
    const people = Object.values(peopleObj)
    let filteredPeople: IPeopleInformation[] = []
    if (searchKey.trim().length !== 0) {
        filteredPeople = people.filter((person) => {
            return (person.email.includes(searchKey) || person.name.first.includes(searchKey) || person.name.last.includes(searchKey))
        })
    } else {
        filteredPeople = people
    }
    return (
        <div className="people-list-container-outer">
            <div className="people-list-container">
                {filteredPeople.map((person) => {
                    return (<People
                        key={person._id}
                        id={person._id}
                        firstName={person.name.first}
                        lastName={person.name.last}
                        picture={person.picture}
                        changeFindFriend={() => dispatch(push(`/map/${person._id}`))}
                    />)
                })}
            </div>
        </div>
    )
}
