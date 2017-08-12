import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {queryAbout} from '../action/index';
import Navbar from '../components/navbar';
import {bindActionCreators} from 'redux';

class AboutInfos extends Component{
  componentWillMount(){
    const id = '57865791cfffa33821a7bf9f';
    this.props.queryAbout(id);
  }

  render(){
      return(
        <div>
          <div className = 'about'  style ={{background:'url(../img/me.png)  center no-repeat'}}>
            <Navbar />
              <div className ='container'>
                <div className = 'intro col-sm-4'>
                  <h1>{this.props.about.name}</h1>
                  <p>{this.props.about.description}</p>
                </div>
              </div>
          </div>
          <div className = 'skill '>
              <div className ='container'>
                <div className = 'col-md-4 col-md-offset-4'>
                  <h1>My Skills</h1>
                </div>
              </div>
                <div className ='container'>
                  <div className = 'col-md-4'>
                    <div className ='skills program'>
                      <img src ='../img/code.png'  />
                      <h1>{this.props.about.program}</h1>
                      <p>{this.props.about.program_skill}</p>
                    </div>
                  </div>
                  <div className = 'col-md-4'>
                    <div className ='skills design'>
                      <img src ='../img/design.png'  />
                      <h1>{this.props.about.design}</h1>
                      <p>{this.props.about.design_skill}</p>
                    </div>
                  </div>
                  <div className = 'col-md-4'>
                    <div className ='skills draw'>
                      <img src ='../img/draw.png'  />
                      <h1>{this.props.about.art}</h1>
                      <p>{this.props.about.art_skill}</p>
                    </div>
                  </div>
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
  return bindActionCreators({queryAbout:queryAbout},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutInfos);
