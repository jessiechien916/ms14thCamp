import React              from 'react';
import {Route,IndexRoute} from 'react-router';

/*this is the page section*/
import App        from './components/app';
import LangdingPage from './screens/landingPage';
import LotsPickerPage from './screens/lotsPickerPage';
import LotsResultPage from './screens/lotsResultPage';
import MissonPage from './screens/missonPage';
import MoneyPage from './screens/moneyPage';
import MapPage from './screens/mapPage';
import NpcPage from './screens/npcPage';
import AboutPage from './screens/aboutPage';

export default (
  <Route path = "/" component = {App}>
    <IndexRoute component = {LangdingPage}/>
    <Route  path = "/lp" component = {LotsPickerPage} />
    <Route  path = "/lr"  component = {LotsResultPage} />
    <Route  path  = "/mp"  component = {MissonPage} />
    <Route  path = "/monp"   components= {MoneyPage}/>
    <Route  path = "/np"   components= {NpcPage} />
    <Route  path = "/ap"   components= {AboutPage} />
  </Route>
);
