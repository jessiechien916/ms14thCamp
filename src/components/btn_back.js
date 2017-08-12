import React  from 'react';
import {Link} from 'react-router';

export default () =>{
  return (<div className = 'edit_btns'>
            <Link to = "/edit">
              <p>BACK</p>
            </Link>
          </div>);
};
