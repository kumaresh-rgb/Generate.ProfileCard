import React from 'react'

const Approvalcard=(props)=>{
    console.log(props.children)
    return(
        <div className="ui card">
            <div className="content">{props.children}
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Agree</div>
                        <div className="ui basic red button">Reject</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Approvalcard;