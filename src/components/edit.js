import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import LstWorkEdit from '../container/lst_work_edit';
import BtnHome from './btn_home';
import BtnAdd  from './btn_add';
import AboutInfosEdit from '../container/about_infos_edit';

class Edit extends Component{
  constructor(props){
    super(props);
    this.state = {on:'about'};
  }
  render(){

          if(this.state.on == 'about'){
            return(
                  <div className ='body'>
                    <div className ='container'>
                      <ul className = 'editnav'>
                        <li><BtnHome /></li>
                        <li><BtnAdd /></li>
                        <li><button className = 'edit_btns' onClick ={()=>this.setState({on:'work'})}><p>WORK</p></button></li>
                      </ul>
                      <AboutInfosEdit />
                    </div>
                  </div>
                   );
          }
          return(
              <div className ='body'>
                <div className ='container'>
                 <ul className = 'editnav'>
                    <li><BtnHome /></li>
                    <li><BtnAdd /></li>
                    <li><button className = 'edit_btns' onClick ={()=>this.setState({on:'about'})}>ABOUT</button></li>
                  </ul>
                  <LstWorkEdit />
                </div>
              </div>
                );
  }
}

export default Edit;
