import React ,{Component} from 'react';
import {Link} from 'react-router';
class LotsResultPage extends Component{
  render(){
      return (<div>
                  <h1>邊緣人自己睡</h1>
                  <Link to="/lP">
                    <p>重新抽籤</p>
                  </Link>
              </div>);
      }
}


export default LotsResultPage;
