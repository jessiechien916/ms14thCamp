import React,{Component}  from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {isLogin} from '../action/index';

class BtnAdmin extends Component{
  componentWillMount(){
    this.props.isLogin();
  }
  render(){
    if(this.props.admin =='logged'){
      return(<div className = 'btn_admin' >
                <Link to = "/edit" >
                  <p>EDIT</p>
                </Link>
            </div>)
    }
    return (<div className = 'btn_admin'>
              <Link to = "/admin">
                <p>ADMIN</p>
              </Link>
            </div>);
  }
}

function mapStateToProps(state){
  return{
    admin:state.admin
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({isLogin:isLogin},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BtnAdmin);
