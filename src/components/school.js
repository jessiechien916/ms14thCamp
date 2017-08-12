import React    from 'react';

export default () =>{
  return(
        <div>
             <div className = 'school'  style ={{background:'url(../img/ntue.png)  center no-repeat'}}>
              <div className ='container'>
                <div className = 'school_intro col-md-4'>
                  <h3>National Taipei University of Education</h3>
                  <p>Digital Technology Design</p>
                  <p>2014-2017</p>
                </div>
              </div>
          </div>
          <div className ='seperater'>
          </div>
          <div className = 'school'  style ={{background:'url(../img/ntub.png)  center no-repeat'}}>
                  <div className ='container'>
                    <div className = 'school_intro col-md-4'>
                      <h3>National Taipei University of Business</h3>
                      <p>Information Management Department</p>
                      <p>2009-2014</p>
                    </div>
                  </div>
              </div>
        </div>
    );
};
