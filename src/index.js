import React from "react"
import ReactDom, { createRoot } from "react-dom/client"
import msd from "./images/download (1).jpeg"
import pandya from "./images/download (2).jpeg"
import bumbrah from "./images/download (3).jpeg"
import jadeja from "./images/download (4).jpeg"
import sachin from "./images/download (5).jpeg"
import rohit from "./images/download.jpeg"
import "./style.css"
const root = createRoot(document.getElementById("root"))


function Iamge(props)
{
  return(
    

    <div className="imgDiv">
      <img className="picture" style={{border:"solid black 1px",padding:"10px",margin:"10px"}} src={props.image}></img>
      <h1 style={{ height:"30px",width:"50%",
         display:"flex",justifyContent:"center", marginLeft:"90px", borderRadius:"10px",marigin:"10px"}}>{props.name}</h1>
    </div>
    
  )
}

var Photo =[
  {
    image:msd,
    name:"Ms.Dhoni"
  },
  {
    image:pandya,
    name:"Pandya"
  },
  {
    image:bumbrah,
    name:"bumrah"
  },
  {
    image:jadeja,
    name:"jadeja"
  },
  {
    image:sachin,
    name:"sachin"
  },
  {
    image:rohit,
    name:"rohit"
  },
 
]

root.render(
     Photo.map(function(item){
      return <Iamge image={item.image} name={item.name}></Iamge>
     })
)