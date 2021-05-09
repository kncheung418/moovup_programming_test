import React, { useEffect } from 'react';
import './App.scss';
import PeopleList from './components/PeopleList';
import MainNav from './components/MainNav';
import { Switch, Route } from 'react-router';
import MapPage from './components/MapPage';
import { fetchPeople } from './Redux/people/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
function App() {
  const people = useSelector((state: RootState) => state.people.people)
  const dispatch = useDispatch()
  useEffect(() => {
    if (Object.keys(people).length === 0)
    {
      dispatch(fetchPeople())
    }
}, [dispatch, people])
  return (
    <>
      <MainNav />
      <div className="App">
            <Switch>
              <Route path="/" exact><PeopleList /></Route>
              <Route path='/map/:id' exact><MapPage /></Route>
            </Switch>
      </div>
    </>
  );
}

export default App;
