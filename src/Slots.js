import React from "react";
export default function Slots({val1 ,val2 ,val3}){
    const win=val1===val2 && val2===val3




    return(
        <div>
            <h1>{val1}{val2}{val3}</h1>
            <h1 style={{color:win?"green": "red"}}>{win?"You win": "You lose"}</h1>
            {win&&<h3>congrats , you have won.. </h3>}


        </div>


    )
}