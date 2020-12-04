// import React,{useState} from 'react';
import React from 'react';
import {UserInput} from './inputHook'
import { useColors } from "../../ColorProvider";

export default function AddColorForm(){
    const [titleProps,resetTitle] = UserInput("");
    const [colorProps,resetColor] = UserInput("");
    const { addColor } = useColors();
    const submit = e => {
        e.preventDefault()
        // @ts-ignore
        addColor(titleProps.value, colorProps.value);
        // @ts-ignore
        resetTitle("");
        // @ts-ignore
        resetColor("");
    }
    return(
        <form onSubmit={submit}>
            <input
                {...titleProps}
                // value = {title}
                // onChange = {e=>setTitle(e.target.value)}
                type="text"
                placeholder="color title"
                required
            ></input>
            <input
                {...colorProps}
                // value = {color}
                // onChange = {e=>setColor(e.target.value)}
                type="color"
                placeholder="color"
                required
            ></input>
            <button>ADD</button>
        </form>
    )
}