import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link,RouteContext } from 'react-router';
import {browserHistory} from 'react-router';
import {queryPost,editPost} from '../action/index';
import {bindActionCreators} from 'redux';
import Footer from '../components/footer';
import BtnBack from '../components/btn_back';
import BtnAdd  from '../components/btn_add';
import BtnHome from '../components/btn_home';


class WorkEdit extends Component{
/*  constructor(props){
     super(props);
     this.state = {};
   }*/
  componentWillMount(){
    this.props.queryPost(this.props.params.id);
    console.log(this.props.works._id);
    this.setState({
          title:this.props.works.title,
          description:this.props.works.description,
          thumb:this.props.works.thumb,
          work:this.props.works.work,
          link:this.props.works.link
    });

  }

  previewFile(){
    var preview = document.querySelector('img');
    var file    = document.getElementById('file').files[0];
    //var screenShot= document.getElementById('screenShot').files[0];
    var reader  = new FileReader();
    var self    = this;

    reader.addEventListener("load", function () {
      preview.src = reader.result;
      self.setState({thumb:reader.result});
    }, false);
     if (file) {
      reader.readAsDataURL(file);//傳送給result
    }
  }

  render(){
    return(
      <div className ='body'>
        <div className = 'container'>
          <ul className = 'editnav'>
            <li><BtnHome /></li>
            <li><BtnAdd /></li>
            <li><BtnBack /></li>
          </ul>
          <div className = 'work_input'>
          <ul>
            <div className = 'container paper'>
            <div className = 'col-sm-6' >
              <li>
                <p>標題</p>
                <input value = {this.state.title} onChange = {(event)=>this.setState({title:event.target.value})} />
              </li>
              <li>
                <p>敘述</p>
                <input value = {this.state.description} onChange = {(event)=>this.setState({description:event.target.value})} />
              </li>
              <li>
                <p>負責</p>
                <input value = {this.state.work} onChange = {(event)=>this.setState({work:event.target.value})} />
              </li>
              <li>
                <p>連結</p>
                <input value = {this.state.link} onChange = {(event)=>this.setState({link:event.target.value})} />
              </li>
            </div>
            <div className = 'col-sm-6'>
              <li>
                <img  src = "" height = '200' width ='300' />
              </li>
              <li>
                <h3>縮圖</h3>
                <input className = 'thumb' id = 'file' type = 'file' onChange ={()=>this.previewFile()}/>
              </li>
              <li>
                  <button onClick = {()=>{this.props.editPost(this.props.works._id,this.state).then(()=>{browserHistory.push('/edit');}); this.setState({ });}}>
                      edit
                  </button>
              </li>
            </div>
          </div>
          </ul>
         </div>
       </div>
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
    return bindActionCreators({queryPost:queryPost,editPost:editPost},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkEdit);
