import React, { Component, Fragment } from "react";
import Button from "../components/Button/Button";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Productslider from "../components/Products/Productslider";
import Accordion from "../components/Acccordion/Accordion";
import DetailSlider from "../components/SlideBuilder/DetailSlider/DetailSlider";
import Spinner from "../components/Spinner/Spinner";
import * as actions from "../store/actions/index";

class Product extends Component {
  state = {
    expandImages: false,
    imageHdIndex: 0,
  };
  componentDidMount() {
    console.log(this.props);
    this.props.getAuth()
  }
  expandImagesHandler = () => {
    this.setState({ expandImages: !this.state.expandImages });
  };
  acceptHandler = () => {
    this.setState({ expandImages: false });
  };
  setDetailSliderIndex = (imgId) => {
    console.log(imgId);
    this.setState({ imageHdIndex: imgId });
  };
  render() {
    const product = this.props.product;
    let content = <Spinner />;
    if (!this.props.loading) {
      content = (
        <Fragment>
          <div
            className={`image__action__trigger ${
              this.state.expandImages ? "action-open" : ""
            }`}
            onClick={this.expandImagesHandler}
          >
            {!this.state.expandImages ? (
              <p className="expand__open">See more</p>
            ) : (
              <p className="expand__close">Close</p>
            )}
          </div>

          {!this.props.loading && (
            <Fragment>
              <DetailSlider
                expanding={this.state.expandImages}
                images={product.images}
                imageHd={product.images[this.state.imageHdIndex]}
                acceptHandler={this.acceptHandler}
              />
              <div className="product_container fadein">
                <div className="product_swiper_wrapper">
                  <Productslider
                    images={product.images}
                    setImgHd={(img) => this.setDetailSliderIndex(img)}
                  />
                </div>

                <h1 className="product_text"> {product.naam}</h1>
                <p className="product_des">{product.brand.name}</p>
                <p className="product_p"> Price: $ {product.prijs}</p>
                <p className="product_p">Popularity: {product.verkocht}</p>
                <p className="product_p">In stock</p>
                <Button mode="raised" design="success">
                  ADD TO CART
                </Button>
                <NavLink to="/products" className="raiser">
                  BACK TO PRODUCTS
                </NavLink>
                <Accordion title="Product info" desc={product.beschrijving} />
                <Accordion title="Design and materials" desc={product.type} />

                {/* <div style={{height: '29px'}}/>  */}
              </div>
            </Fragment>
          )}
        </Fragment>
      );
    }
    return <Fragment>{content}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    loading: state.product.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
 
        getAuth:  () => dispatch(actions.auth())

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
