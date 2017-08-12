import React    from 'react';
import BtnAdmin  from '../container/btn_admin';
import BtnAbout  from './btn_about';
import BtnHome  from './btn_home';
import WorkList from '../container/lst_work';

export default () =>{
  return(<div>
          <BtnAdmin/>
          <BtnAbout />
          <BtnHome />
          <WorkList />
        </div>
        );
};
