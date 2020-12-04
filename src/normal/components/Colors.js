// const { Component } = require("react");
import React from 'react';
// import { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import StarRating from './StarRating';
import {useColors} from '../../ColorProvider';

const Color = ({ id, title, color, rating }) => {
    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick = {() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{height:50,background:color}}></div>
            <div>
                <StarRating starsSelected={rating} onRate = {(rating) => rateColor(id, rating)}/>
            </div>
            </section>
        );
}
export default Color;
// export default class Color extends Component {

//     shouldComponentUpdate(nextProps) {
//         const { rating } = this.props
//         return rating !== nextProps.rating;
//     }
//     componentWillUpdate(nextProps){
//         const { title,rating } = this.props;
//         alert (`${title}:rating ${rating}->${nextProps.rating}`);

//     }
//     render(){
//         const {title,color,rating,onRemove,onRate} = this.props
//         return (
//         <section>
//             <h1>{title}</h1>
//             <button onClick = {onRemove}>
//                 <FaTrash />
//             </button>
//             <div style={{height:50,background:color}}></div>
//             <div>
//                 <StarRating starsSelected={rating} onRate = {onRate}/>
//             </div>
//             </section>
//         );
//     }
// }
