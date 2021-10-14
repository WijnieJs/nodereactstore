import React, {Fragment} from 'react';
import Button from "./Button"


const Backs = (props) => {
 
  return (
    <Fragment>
      <Button mode="flat" design="raised">{props.text ? `${props.text}   `: "see more details"}</Button>
    <Button  mode="accent" design="raised" >Go all products Shop</Button>

    </Fragment>
  );
}

export default Backs;
