import React              from 'react';
import {Route,IndexRoute} from 'react-router';

/*this is the page section*/
import App        from './components/app';
import Login      from './container/form_login';
import ProtoIndex from './container/proto_index';
import Edit       from './components/edit';
import Add        from './container/work_input';
import Read       from './container/work_read';
import AboutEdit  from './container/about_edit';

export default (
  <Route path = "/" component = {App}>
    <IndexRoute component = {ProtoIndex}/>
    <Route  path = "/admin" component = {Login} />
    <Route  path = "/edit"  component = {Edit} />
    <Route  path  = "/add"  component = {Add} />
    <Route  path = "/post/:id"   components= {Read}/>
    <Route  path = "/user/:id"   components= {AboutEdit} />
  </Route>
);
