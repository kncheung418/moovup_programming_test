import React from 'react'
import './MainNav.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchKey } from '../Redux/search/actions'
import { history, RootState } from '../store'
import { CSSTransition } from 'react-transition-group'
export default function MainNav() {
    const dispatch = useDispatch()
    const location = useSelector((state: RootState) => state.router.location)
    let currentLoc = 'home'
    if (location.pathname.split('/').length === 3 && location.pathname.split('/')[1] === "map") {
        currentLoc = 'map'
        dispatch(setSearchKey(''))
    } else {
        currentLoc = 'home'
    }
    return (
        <>
            <CSSTransition
                in={currentLoc === 'home'}
                timeout={500}
                unmountOnExit
                classNames="menu-primary"
            >
                <nav className="main-nav-navbar">
                    <div className="main-nav-header">

                        <span className="main-nav-header-content">
                            All Friends
                            </span>
                    </div>
                    <div className="main-nav-search-bar">
                        <input className="main-nav-search-bar-search" placeholder="search" onChange={(e) => dispatch(setSearchKey(e.target.value))}></input>
                    </div>
                </nav>
            </CSSTransition>

            <CSSTransition
                in={currentLoc === 'map'}
                timeout={500}
                unmountOnExit
                classNames="menu-primary"
            >
                <nav className="main-nav-navbar">
                    <div className="main-nav-header">
                        <div>
                            <span className="main-nav-back-btn" onClick={() => history.push('/')}>
                                <i className="fas fa-chevron-left"></i>
                            </span>
                        </div>
                        <div>
                            <span className="main-nav-header-content">
                                Your Friend
                            </span>
                        </div>
                    </div>
                </nav>
            </CSSTransition>
        </>
    )
}
