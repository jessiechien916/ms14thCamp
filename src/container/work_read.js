import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link,RouteContext } from 'react-router';
import {queryPost} from '../action/index';
import {bindActionCreators} from 'redux';
import BtnHome from '../components/btn_back_home';
import Footer from '../components/footer';



class WorkRead extends Component{
  componentWillMount(){
    this.props.queryPost(this.props.params.id);
  }

  renderButton(){
    if(this.props.works.link){
      return(
      <div className = 'col-xs-8 col-xs-offset-2'>
        <button className = 'go'><a href ={this.props.works.link} target="_blank">GO</a></button>
      </div>);
    }
    return(
    <div className = 'col-xs-8 col-xs-offset-2' />
    );
  }
  render(){
    return(
         <div>
            <div className = 'about'  style ={{background:'url('+ this.props.works.thumb +') center no-repeat'}}>
                <div className = 'navbar read_nav'>
                  <div className ='container'>
                    <BtnHome />
                  </div>
                </div>

                <div className ='container'>
                  <div className = 'intro col-sm-4'>
                    <h1>{this.props.works.title}</h1>
                    <p>{this.props.works.work}</p>
                  </div>
                </div>

                <div className = 'container work_screenshots'>
                  <div className = 'col-xs-4'>
                    <div className ='skills'>
                    <img src ={this.props.works.thumb}/>
                    </div>
                  </div>
                  <div className = 'col-xs-4'>
                    <div className = 'skills'>
                      <img src ={this.props.works.screenShot}/>
                    </div>
                  </div>
                  <div className = 'col-xs-4'>
                    <div className ='skills'>
                    <img src ={this.props.works.screenShot1}/>
                    </div>
                  </div>
                </div>
            </div>
            <div className = 'work_description'>
              <div className = 'container'>
                <div className = 'col-md-4 col-md-offset-4'>
                  <p>{this.props.works.description}</p>
                  {this.renderButton()}
                </div>
              </div>
            </div>
          <Footer />
         </div>
    );
  }
}

function mapStateToProps(state){
  return{
    works:state.works
    }
  }

function mapDispatchToProps(dispatch){
    return bindActionCreators({queryPost:queryPost},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkRead);
