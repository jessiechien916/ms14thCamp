import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addWork,query} from '../action/index';
import {browserHistory} from 'react-router';
import BtnBack from '../components/btn_back';
import BtnHome from '../components/btn_home';
import BtnAdd  from '../components/btn_add';



class WorkInput extends Component{
  constructor(props){
    super(props);
    this.state = {title:"",description:"",thumb:"",screenShot:"",work:"",link:""};
  }
 //------------------------圖片處理------------------------------
  setThumb(){
    var self = this;
    var file = document.getElementById('thumb').files[0];
    var preview = document.querySelector('img');
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
           preview.src = reader.result;
           self.setState({thumb:reader.result});

         }, false);
        if(file){
          reader.readAsDataURL(file);//傳送給result
        }
        

  }

  setScreenShot(){
    var self = this;
    var file = document.getElementById('screenShot').files[0];
    var preview = document.querySelector('img');
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
           preview.src = reader.result;
           self.setState({screenShot:reader.result});

         }, false);
        if(file){
          reader.readAsDataURL(file);//傳送給result
        }
        

  }

  setScreenShot1(){
    var self = this;
    var file = document.getElementById('screenShot1').files[0];
    var preview = document.querySelector('img');
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
           preview.src = reader.result;
           self.setState({screenShot1:reader.result});

         }, false);
        if(file){
          reader.readAsDataURL(file);//傳送給result
        }
        

  }
 //------------------------------------------------------------
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
                      <input className = 'thumb' id = 'thumb' type = 'file' onChange ={()=>this.setThumb('thumb')}/>
                      <input className = 'screenShot' id = 'screenShot' type = 'file' onChange ={()=>this.setScreenShot('screenShot')}/>
                      <input className = 'screenShot1' id = 'screenShot1' type = 'file' onChange ={()=>this.setScreenShot1('screenShot1')}/>
                    </li>
                    <li>
                        <button onClick = {()=>{this.props.addWork(this.state).then(()=>{browserHistory.push('/edit');}); this.setState({ });}}>
                          submit
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
    return bindActionCreators({addWork:addWork},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkInput);
