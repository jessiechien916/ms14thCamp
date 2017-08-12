import React,{Component} from 'react';
import {connect} from 'react-redux';
import {logout,isLogin} from '../action/index';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import BtnHome from '../components/btn_home';

class BtnLogout extends Component{
  render(){
    return(
        <div>
          <button className = 'logout' onClick ={() => this.props.logout().then(()=>{this.props.isLogin();browserHistory.push('/');})}>
            <p>LOGOUT</p>
          </button>
        </div>
    );
  }
}

function mapStateToProps(state){
  return{
    admin:state.admin
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({logout:logout,isLogin:isLogin},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(BtnLogout);
