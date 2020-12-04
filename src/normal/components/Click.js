import React from 'react';
import { useState,useEffect } from 'react';

export default function Click(){
    const [count,setCount] = useState(0)

    useEffect(()=>{
        //update document title using the brower API
    //     alert(`you clicked ${count} times`);
    })
    return(
        <div>
            <p>you have clicked {count} times</p>
            <button onClick ={()=>setCount(count +1)}>click me</button>
        </div>
    )
}
