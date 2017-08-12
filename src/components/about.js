import React    from 'react';
import BtnAdmin  from '../container/btn_admin';
import BtnWork  from './btn_work';
import BtnHome  from './btn_home';
import AboutInfos from '../container/about_infos';

export default () =>{
  return(<div>
          <BtnAdmin/>
          <BtnWork />
          <BtnHome />
          <AboutInfos />
        </div>
        );
};
