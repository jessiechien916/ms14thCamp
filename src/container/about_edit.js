import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {queryAbout,editUser} from '../action/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import BtnBack from '../components/btn_back';
import BtnHome from '../components/btn_home';
import BtnAdd  from '../components/btn_add';


class AboutEdit extends Component{
 constructor(props){
    super(props);
    this.state = {};
  }
  componentWillMount(){
    this.props.queryAbout(this.props.params.id);
    this.setState({
                    name:this.props.about.name,
                    //school:this.props.about.school,
                    description:this.props.about.description,
                    program:this.props.about.program,
                    program_skill:this.props.about.program_skill,
                    design:this.props.about.design,
                    design_skill:this.props.about.design_skill,
                    art:this.props.about.art,
                    art_skill:this.props.about.art_skill
                });
  }

  render(){
      return(
        <div className = 'body'>
          <div className ='container'>
          <ul className = 'editnav'>
            <li><BtnHome /></li>
            <li><BtnAdd /></li>
            <li><BtnBack /></li>
          </ul>
            <div className = 'about_input'>
              <ul className =' col-sm-4 col-sm-offset-4 paper'>
                <li>
                  <p>name</p>
                  <input value = {this.state.name} onChange = {(event) => this.setState({name:event.target.value})} />
                </li>
                <li>
                  <p>program</p>
                  <input value = {this.state.program} onChange = {(event) => this.setState({program:event.target.value})} />
                </li>
                <li>
                  <p>program skill</p>
                  <input value = {this.state.program_skill} onChange = {(event) => this.setState({program_skill:event.target.value})} />
                </li>
                <li>
                  <p>design</p>
                  <input value = {this.state.design} onChange = {(event) => this.setState({design:event.target.value})} />
                </li>
                <li>
                  <p>design skill</p>
                  <input value = {this.state.design_skill} onChange = {(event) => this.setState({design_skill:event.target.value})} />
                </li>
                <li>
                  <p>art</p>
                  <input value = {this.state.art} onChange = {(event) => this.setState({art:event.target.value})} />
                </li>
                <li>
                  <p>art skill</p>
                  <input value = {this.state.art_skill} onChange = {(event) => this.setState({art_skill:event.target.value})} />
                </li>
                <li>
                  <p>description</p>
                  <textarea rows = '4' value = {this.state.description} onChange = {(event) => this.setState({description:event.target.value})} />
                </li>
                <li>
                  <button onClick = {()=>{this.props.editUser(this.props.about._id,this.state).then(()=>{browserHistory.push('/edit');});this.setState({name:" ",school:" ",description:" ",skill:"",phone:"",mail:""});}}>
                    送出
                  </button>
                </li>
              </ul>
              </div>
            </div>
          </div>
      );
  }
}

function mapStateToProps(state){
  return{
    about:state.about
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({queryAbout:queryAbout,editUser:editUser},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutEdit);
