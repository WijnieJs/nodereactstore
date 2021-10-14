import React, { Component, Fragment } from 'react';
 
import Image from "../../Image/Image"
 import ImageModal from "../../Modal/ImageModal"


 
class DetailSlider extends Component {


  

  acceptPostChangeHandler = () => {
        this.props.acceptHandler();

  }
  render() {
    
    return this.props.expanding ? (
      <Fragment>
        {/* <Backdrop onClick={this.acceptPostChangeHandler} /> */}
        <ImageModal
          
          acceptEnabled={ ()=> console.log('here')}
          onCancelModal={this.acceptPostChangeHandler}
          onAcceptModal={this.acceptPostChangeHandler}
          isLoading={this.props.loading}
        >
         
        <div className="fullsize-images">
            <Image imageUrl={this.props.imageHd} center/>

        </div>
            
        </ImageModal>
      </Fragment>
    ) : null;
  }
}

export default DetailSlider;
