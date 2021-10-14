import React, { Component, Fragment } from "react";
import Checkbox from "../Form/Input/Checkbox"; 
class FilterCollapse extends Component {

state = {
  open: false,
  checked: [],
   filters:{
            brand:[],
            color:[] 
        }
}

    renderboxes = () => {
  
      return this.props.list.map((select) => (
          <Checkbox 
          key={select._id} 
          id={select._id} 
          type={select.name}  
          ctrl={this.props.title}
          handleFilters={this.props.handleFilters}

          />
        ))
    }
    
  render() {
     
   
    //// CREATE CHECKBOXES FROM LIST AND PASS ID TO FILTERS


  
    return (
      <Fragment>
          <div>
  <h1 className="checkedTitle">{this.props.title ? this.props.title : "load"}</h1>
        </div>
      <div className="checkedItems">
      
      
        {this.renderboxes()}
 
      </div>
      </Fragment>
    );
  }
}

export default FilterCollapse;
