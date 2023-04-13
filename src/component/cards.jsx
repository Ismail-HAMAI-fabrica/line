import React from "react";

import Card from "./card";

function Cards() {
    
  return (
    <div className="cardCC">
        <div className="buttons-container">
  <button className="button-arounder">Movies</button>
  <button className="button-arounder">Sereas</button>
</div>
    <div className="contanerC">
        
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div></div>
  )
}

export default Cards