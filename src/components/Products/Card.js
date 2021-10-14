import React, { Component, Fragment } from 'react';
import Image from "../Image/Image";
import e from "../../static/images/e.jpg"
import Button from "../Button/Button"


class Card extends Component {
  render() {
     let brand  
     if ( this.props.item.brand) {
       brand = this.props.item.brand.name
     } else {
       brand = "see more"
     }
     

   
    let image = this.props.item.images[0]
    if (!image) {
      image = e
    }
    
    return (
      <Fragment >
  
        <div className="card_p_image">
          <Image imageUrl={image}/>
        </div>
        <p className="card_name"  >  {this.props.item.naam}</p>
      <strong> <p className="card_brand" > {brand}</p></strong> 
                      <div className="card_p_actions"  >
        <span>{this.props.item.verkocht } [ L ]</span>
        <span> $ - {this.props.item.prijs} </span>   
          </div>
      <div>
        <Button mode="raised" design="accent">Add to cart</Button>
      </div>
 
    
      </Fragment>
    );
  }
}

export default Card;
