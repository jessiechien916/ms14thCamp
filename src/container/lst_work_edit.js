import React,{Component} from 'react';
import {connect} from 'react-redux';
import {query,delWork} from '../action/index';
import {bindActionCreators} from 'redux';

class LstWorkEdit extends Component{
  componentWillMount(){
      this.props.query();
  }
  renderList(){
    if(!this.props.works.map){
        return(<div>Loading</div>);
    }
    return this.props.works.map((work)=>{
        return(
          <li key = {work._id} className = 'col-sm-4'>
            <h1>{work.title}</h1>
            <p>{work.description}</p>
            <button onClick = {()=>this.props.delWork(work._id)}>刪除</button>
          </li>
        );
    });
  }

  render(){
    return(<div className ='container work_input paper'>
            <ul>
              {this.renderList()}
            </ul>
          </div>);

  }
}

function mapStateToProps(state){
  return{
    works:state.works
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({query:query,delWork:delWork},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LstWorkEdit);
