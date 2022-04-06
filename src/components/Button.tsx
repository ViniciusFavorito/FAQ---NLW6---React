import { useState } from "react";

export function Button(){
    //let count = 0;
    const [count,setCount] = useState(0)


    function aumenta(){
        //count += 1
        setCount(count + 1)
        console.log(count)
    }

    return(
        <button onClick={aumenta}>
            {count}
        </button>
    )
}
