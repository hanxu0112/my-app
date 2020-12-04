// import React,{useState} from "react";
import React from "react";
// import { Component } from "react";
import "./App.css";
// import Star from './normal/components/Star';
// import StarRating from './normal/components/StarRating';
// import Colors from './normal/components/Colors';
import ColorList from "./normal/components/ColorList";
// import Color from "./normal/components/Colors";
// import Childern from "./normal/components/Childern";
// import Click from "./normal/components/Click";
import AddColorForm from "./normal/components/AddColorForm";
// import data from "./normal/components/data";

// export default function App(){
//   const [colors,setColors] = useState(data);
//   const addColor = (title,color) =>{
//     const newColors = [
//       {
//         id:Math.random(),
//         color:color,
//         title:title,
//         rating:3,
//       },
//       ...colors,
//     ];
//     setColors(newColors);
//   };
  // const rateColor = (id,rating) =>{
  //   const newColors = colors.map((c)=>c.id !== id ? c : { ...c, rating });
  //   setColors(newColors);
  // }
  // const remove = (id) =>{
  //   const newColors = colors.filter((c)=>c.id!== id);
  //   setColors(newColors);
  // }
  // return(
  //   <div>
  //     <AddColorForm onNewColor = {addColor}/>
  //    {/* <ColorList colors={colors} onRate={rateColor} onRemove={remove}/> */}
  //    <ColorList/>
  //   </div>
  // )
// }
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//     };
//     this.rateColor = this.rateColor.bind(this);
//     this.remove = this.remove.bind(this);
//     this.addColor = this.addColor.bind(this);
//   }

//   rateColor(id, rating) {
//     this.setState((prevState) => ({
//       colors: prevState.colors.map((c) => {
//         return(
//           c.id !== id ? c : { ...c, rating }
//         )
//       }),
//     }));
//   }

//   remove(id){
//     this.setState((prevState)=>({
//       colors: prevState.colors.filter((c)=> c.id !== id)
//     }))
//   }

//   // addColor(title,color){
//   //   this.setState((prevState)=>({
//   //     colors: [...prevState.colors,{
//   //       id:Math.random(),
//   //       color:color,
//   //       title:title,
//   //       rating:3,
//   //     }]
//   //   }))
//   // }

//   render() {
//     const { rateColor,remove,addColor} = this;
//     const { colors } = this.state;
//     return (
//       <div>
//         <AddColorForm onNewColor = {addColor}/>
//         <ColorList colors={colors} onRate={rateColor} onRemove={remove}/>
//         {/* <StarRating /> */}
//         {/* <Childern>
//             <p>duan luo1</p>
//             <h2>header</h2>
//         </Childern> */}
//         <Click />
      
//       </div>
//     );
//   }
// }
export default function App() {
  return (
    <div className="container">
      <AddColorForm />
      <ColorList />
    </div>
  );
}