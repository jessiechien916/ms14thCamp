import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {queryAbout} from '../action/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router'

class AboutInfosEdit extends Component{
  componentWillMount(){
    const id = '57865791cfffa33821a7bf9f';
    this.props.queryAbout(id);
  }

  render(){
      return(
          <div className = 'about_input paper '>
            <h1>{this.props.about.name}</h1>
            <p>{this.props.about.description}</p>
            <p>{this.props.about.program}</p>
            <p>{this.props.about.program_skill}</p>
            <p>{this.props.about.design}</p>
            <p>{this.props.about.design_skill}</p>
            <p>{this.props.about.art}</p>
            <p>{this.props.about.art_skill}</p>
            <Link to = {"/user/"+this.props.about._id}>
              <button>EDIT</button>
            </Link>
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
  return bindActionCreators({queryAbout:queryAbout},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutInfosEdit);
