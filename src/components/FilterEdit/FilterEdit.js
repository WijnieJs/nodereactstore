import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index"

import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";
 import FilterCollapse from "./FilterCollapse"
 

class FilterEdit extends Component {
   state = {
       limit:6,
        skip:0,
        filters:{
            brand:[],
            color:[] 
        }
  };
    cancelPostChangeHandler = () => {
    this.setState({
     
      filters: {
         color:[],
            brand:[] 
      }
    });
    this.props.onCancelEdit();
  };
  
  acceptPostChangeHandler = () => {
        console.log('RENDER NEW GET PRODUCTS ')
        let filters = {...this.state.filters}
         let c = {...this.state.filters}

        this.setState({   filters:{
            brand:[],
            color:[] 
        }})
        let finalfilters = {}
          for (let char in c) {
              console.log( filters[char] )
                console.log(char)
              if (filters[char].length > 0) {
                finalfilters[char] =  filters[char] 
              }

          }
           
        this.props.onAcceptHandler(finalfilters)
  };
 handleFilters = (filters,category) => {
       const newFilters =  {...this.state.filters}
       newFilters[category].push(filters)  

        // if(category === "price"){
        //     let priceValues = this.handlePrice(filters);
        //     newFilters[category] = priceValues
        // }

      //  this.showFilteredResults(newFilters)
       this.setState({
           filters: newFilters
       })
     
    }
    
  render() {
    
    return (
      this.props.editFilters ? (
          <Fragment>
        <Backdrop onClick={this.cancelPostChangeHandler} />
       
        <Modal
          title="Choose your favorites"
          acceptEnabled={this.state.formIsValid}
          onCancelModal={this.cancelPostChangeHandler}
          onAcceptModal={this.acceptPostChangeHandler}
          isLoading={this.props.loading}
          show={this.props.editFilters}
        >
            <FilterCollapse 
            title="Brands" 
            list={this.props.brands}
         handleFilters={(filters) => this.handleFilters(filters, 'brand')}

            /> 
          <FilterCollapse 
          title="Colors" 
          list={this.props.colors}
         handleFilters={(filters) => this.handleFilters(filters, 'color')}

          /> 

        </Modal>
      
      </Fragment>
      ) : null
    
    );
  }
}
 const mapStateToProps = (state) => {
  return {
    products: state.product,
    brands: state.product.brands,
    colors: state.product.colors
  };
};

 const mapDispatchToProps = (dispatch) => {
   return {
     getProductsInShop: (result) => dispatch(actions.getProductsInit(result)),

  
   };
 };
export default connect(mapStateToProps, mapDispatchToProps)(FilterEdit);
