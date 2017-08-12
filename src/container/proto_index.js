import React ,{Component} from 'react';
import BtnAdmin from './btn_admin';
import Footer from '../components/footer';
import AboutInfos from './about_infos';
import School from '../components/school.js';
import Work from './lst_work';

class ProtoIndex extends Component{
  render(){
      return (<div>
                  <AboutInfos />
                  <School />
                  <Work />
                  <Footer />
              </div>);
      }
}


export default ProtoIndex;
