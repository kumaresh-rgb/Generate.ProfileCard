import React from "react";


class InputSearch extends React.Component {
   
    Newton(){
        axios.Get()
    }


    brazil(){
        console.log('your are clicked times')
}
    

    render() {
        return (
            
               <div className="ui icon input" style={{display:'flex',align:'center'}}>
                   <input className="NOthing" type="text"  placeholder="Search..."
                   
                   
                   onClick={this.brazil}/>
                       <i className="circular search link icon"></i>
                </div>
       
    
            
        )
    }
}

export default InputSearch;
