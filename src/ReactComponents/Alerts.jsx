import { useState } from "react";

function Alerts(props) {

    //Function to capitalize the first letter in the word

    const capitalize = (word) => {
        // let lower = word.toUpperCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    return (
        <div className="" style={{height: '50px'}} > 
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show p-2 m-0`} role="alert">
                 <p className="m-2"><strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}</p>
             </div>}
        </div>
    )
}

export default Alerts;