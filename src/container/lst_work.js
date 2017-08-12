import React,{Component} from 'react';
import {connect} from 'react-redux';
import {query} from '../action/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

class Work extends Component{
  componentWillMount(){
      this.props.query();
  }


  renderList(){
    if(!this.props.works.map){
      return(<div className = 'col-md-4 col-md-offset-4 loading'><h6>Loading</h6></div>);
    }
    return this.props.works.map((work)=>{
        return(
            <div key = {work._id} className ='protos col-md-4'>
              <Link to = {"/post/"+ work._id}>
                <img src ={work.thumb}/>
              </Link>
            </div>

        );
    });
  }

  render(){
    return(<div className = 'works'>
              <div className = 'container'>
                <div className = 'col-md-4 col-md-offset-4 proto'>
                  <h1>Works I've done</h1>
                </div>
              </div>
                <div className ='container protocon'>
                    {this.renderList()}
                </div>
            </div>);

  }
}

function mapStateToProps(state){
  return{
    works:state.works
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({query:query},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Work);
