import React,{Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../action/index';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import BtnHome from '../components/btn_home';

class FormLogin extends Component{
  constructor(props){
    super(props);
    this.state ={username:'',password:''};
  }


  render(){
    return(
        <div className = 'container body'>
          <div className='col-xs-4 col-xs-offset-4 paper'>
              <div className='col-xs-8 col-xs-offset-2'>
                <ul className = 'form'>
                  <li><h5>帳號:</h5><input className ='user_input' value = {this.state.username} onChange = {event => this.setState({username:event.target.value})} /></li>
                  <li><h5>密碼:</h5><input className = 'user_input' type = "password"  value = {this.state.password} onChange = {event =>this.setState({password:event.target.value})}/></li>
                  <li><button className = 'submit' onClick ={() => this.props.login(this.state).then(()=>{browserHistory.push('/');})}><h4>LOGIN</h4></button></li>
                  <li><BtnHome /></li>
                </ul>
              </div>
            </div>
          </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({login:login},dispatch);
}


export default connect(null,mapDispatchToProps)(FormLogin);
