import React ,{Component} from 'react';
import csv from 'fast-csv';
import csvPath from '../../static/testfile.csv';



class AboutPage extends Component{
 componentWillMount(){
     console.log(csvPath);
     csv.fromStream(csvPath)
     .on("data", (data)=>{
        console.log(data);
     });
 
    }

  render(){
      return (<div>
                  <h1>關於偉大的開發團隊</h1>
              </div>);
      }
}


export default AboutPage;
