import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import Card from "../components/Products/Card";
import FilterEdit from "../components/FilterEdit/FilterEdit";
import Paginator from "../components/Paginator/Paginator";
import Spinner from "../components/Spinner/Spinner";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IncyZnNAZ21haWwuY29tIiwidXNlcklkIjoiNjA0NTAxNDY4MzdjYWQ1ODJjMjYzYzQ5IiwiaWF0IjoxNjE2MzUzMjI5LCJleHAiOjE2MTYzNjA0Mjl9.PWhp-wDNfs7cHWnWyHzYws_hE7TqWvt8xhiqNEvd_0g";
class Products extends Component {
  state = {
    openFilterModal: false,
    filters: {
      brand: [],
      color: [],
    },
    postPage: 1,
    postLoading: false,
  };

  async componentDidMount() {
    await this.props.getBrands();
    await this.props.getColors();
    await this.props.loadUser();
    this.loadProducts();

    // await this.props.getProductsInShop(this.state.filters, this.state.postPage);
  }
  getProductDetail = () => {
    this.props.history.push("/product");
  };
  setEditFilters = () => {
    this.setState({
      openFilterModal: true,
    });
  };
  loadProducts = async (direction) => {
    let page = this.state.postPage;
    if (direction === "next") {
      page++;
      this.setState({ postPage: page });
    }
    if (direction === "previous") {
      page--;
      this.setState({ postPage: page });
    }

    await this.props.getProductsInShop(this.state.filters, this.state.postPage);
  };
  cancelEditHandler = () => {
    this.setState({ openFilterModal: false });
  };
  finishEditHandler = () => {
    this.setState({ openFilterModal: false });
  };
  onAcceptHandler = async (filter) => {
    let result = { filter };

    await this.props.getProductsInShop(result, this.state.postPage);

    this.setState({ openFilterModal: false, filters: result });
  };
  goToDetail = (prod) => {
    console.log(prod);
    this.props.setProductDetail(prod);
    this.props.history.push("/product");
  };
  render() {
    let content = <Spinner />;
    if (!this.props.loading) {
      content = (
        <Paginator
          onPrevious={this.loadProducts.bind(this, "previous")}
          onNext={this.loadProducts.bind(this, "next")}
          lastPage={Math.ceil(this.props.totalItems / 4)}
          currentPage={this.state.postPage}
        >
          <button className="filter_btn" onClick={this.setEditFilters}>
            Filter
          </button>

          {!this.props.loading && (
            <div className="card_list_grid fadein">
              {this.props.products.map((product) => (
                <div
                  key={product._id}
                  onClick={() => this.goToDetail(product._id)}
                  className="card_list_item"
                >
                  <Card item={product} />
                </div>
              ))}
            </div>
          )}
        </Paginator>
      );
    }
    return (
      <Fragment>
        <FilterEdit
          editFilters={this.state.openFilterModal}
          onCancelEdit={this.cancelEditHandler}
          onAcceptHandler={this.onAcceptHandler}
          triggerNewProducts={this.getNewProducts}
        />

        {content}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    loading: state.product.loading,
    totalItems: state.product.totalItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProductsInShop: (result, page) =>
      dispatch(actions.getProductsInit(result, page)),
    setProductDetail: (id) => dispatch(actions.getProductDetailInit(id)),

    getColors: (result) => dispatch(actions.getColorsToShop(result)),

    getBrands: (result) => dispatch(actions.getBrandsToShop(result)),
    loadUser: () => dispatch(actions.login()),
    getAuth: () => dispatch(actions.auth()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
