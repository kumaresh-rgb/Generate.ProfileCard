// import react and react-dom 
//todo:user-card components
import React from 'react';
import './css/Profile.css';
import ReactDOM from 'react-dom';
import Mycompo from './USER-card/MYcompo';
import Approvalcard from './USER-card/ApprovalCard';

// create a components 
// TODO: search api commponents
/*import InputSearch from'./inputsearch'*/

const Myapp = ()=> {
    return (
        
        <div className  = "ui-comments">
           <div className="ui-comments2">
           <Approvalcard>
           <Mycompo staricon  = "5 faves"/>
           </Approvalcard>
           </div>
           <div className="ui-comments3">
            <Approvalcard>
            <Mycompo staricon  = "4.5 faves"/>
            </Approvalcard>
           </div>
           <div className="ui-comments4">
           <Approvalcard>
           <Mycompo staricon  = "3.2 faves"/>
           </Approvalcard>
           </div>
           <div className="ui-comments5">
           <Approvalcard>
           <Mycompo staricon  = "4 faves"/>
           </Approvalcard>
           </div>
      </div>
      
      
    )
};


//




/*const Myapp=()=>{
    return(
        <div>
            <InputSearch/>
        </div>
    )
}*/


// show up screeen
ReactDOM.render(<Myapp/>,document.querySelector('#root'));
