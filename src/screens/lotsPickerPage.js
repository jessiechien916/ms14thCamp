import React ,{Component} from 'react';
import {Link} from 'react-router';
class LotsPickerPage extends Component{
  render(){
      return (<div>
                  <h1>抽籤囉</h1>
                  <p>
                    哈哈哈!年輕人。留下你的帳號跟生日吧!讓我來決定你今晚要睡哪!
                  </p>
                  帳號:<input />
                  生日:<input />
                  <Link to="/lr">
                    <p>確定</p>
                  </Link>
              </div>);
      }
}


export default LotsPickerPage;
