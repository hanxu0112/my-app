import React from 'react';
// import { Component } from 'react';
import Colors from './Colors';
import {useColors} from '../../ColorProvider';

const ColorList = ()=>{
    const {colors} = useColors();
    return(
        <div>
            {
            colors.length === 0?(<p>No Color Listed.(Add a Color)</p>
            ):(colors.map((c)=>{
                return(
                    <Colors key={c.id} 
                    {...c}
                    // onRate = {(rating)=>onRate(c.id,rating)}
                    // onRemove = {()=>onRemove(c.id)}
                    />
                )
          
            })
            )
            }
        </div>
    )
}
export default ColorList;
