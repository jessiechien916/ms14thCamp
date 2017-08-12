import React       from 'react';
import BtnAdmin    from '../container/btn_admin';
import BtnLogout   from '../container/btn_logout';
import BtnHome     from './btn_home';
import LstWorkEdit from '../container/lst_work_edit';


export default () =>{
  return(<div className = 'navbar container'>
          <BtnAdmin/>
          <BtnLogout />
        </div>);
};
