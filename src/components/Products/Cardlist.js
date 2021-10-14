// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import * as actions from "../../store/actions/index"
// import Card from "./Card"



// class Cardlist extends Component {



//   gotToDetail = (id) => {
//    console.log(id)
//     this.props.setDetailState(id)
//     this.props.productdetail()
//   }
  
//   render() {
//       console.log(this.props.products)
     
//     return (
//       <div className="card_list_grid fadein">
//         {this.props.products.map((product) => (
//       <div key={product._id} onClick={() => this.gotToDetail(product)} className="card_list_item">
//            <Card item= { product} />
//          </div>
//         ))}
        
//           {/* <div className="card_list_item">
//            <Card />
//          </div>
//    <div className="card_list_item">
//            <Card />
//          </div>
//    <div className="card_list_item">
//            <Card />
//          </div>
//             <div className="card_list_item">
//            <Card />
//          </div>
//             <div className="card_list_item">
//            <Card />
//          </div>
//             <div className="card_list_item">
//            <Card />
//          </div> */}
       
//       </div>
//     );
//   }
// }
//  const mapDispatchToProps = (dispatch) => {
//   return {
   
//     setDetailState: (product) => dispatch(actions.setDetailProduct(product ))
    
//   };
// };
 
// export default connect(null, mapDispatchToProps)(Cardlist);
