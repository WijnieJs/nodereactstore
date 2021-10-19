import axios from "axios";

import * as actionTypes from "./actionsTypes";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products.products,
    totalItems: products.totalItems,
  };
};
export const setProductsFailed = () => {
  return {
    type: actionTypes.SET_PRODUCTS_FAIL,
  };
};
// export const getProductsToShop =   (skip, limit,filters =[], previousState = []) => {
//       const data = {
//         limit,
//         skip,
//         filters
//     }
//   return (dispatch) => {
//     axios.get('http://localhost:3002/shop/products', data).then((res) => {
//       dispatch(setProducts(res.data))
//     })
//     .catch((error) => {
//       dispatch(setProductsFailed('Failer'))
//     })
//   }
// }
export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const getProductDetailInit = (prodId) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    axios
      .get(`http://localhost:3002/shop/product/${prodId}`)
      .then((res) => {
        dispatch(setProductDetail(res.data));
      })
      .catch((error) => {
        setProductsFailed("Failer");
      });
  };
};

export const setProductDetail = (product) => {
  return {
    type: actionTypes.GET_PRODUCT_DETAIL,
    product: product,
  };
};

export const getProductsInit = (filters = [], page) => {
  const data = {
    filters: filters,
    page: page,
  };

  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    axios
      .post(`${process.env.REACT_APP_URL}/shop/filters`, data)
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((error) => {
        dispatch(setProductsFailed("Failer"));
      });
  };
};

export const setDetailProduct = (product) => {
  return {
    type: actionTypes.SET_DETAIL_STATE,
    product: product,
  };
};

export const setProductFilter = (filterproducts) => {
  return {
    type: actionTypes.SET_PRODUCT_FILTER,
    filterproducts: filterproducts,
  };
};

export function getBrands(brands) {
  return {
    type: actionTypes.GET_BRANDS,
    brands: brands,
  };
}
export function setBrandsFailed(brands) {
  return {
    type: actionTypes.SET_BRANDS_FAIL,
  };
}
export const getBrandsToShop = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_URL}/shop/brands`)
      .then((res) => {
        dispatch(getBrands(res.data));
      })
      .catch((error) => {
        dispatch(setBrandsFailed("Failer"));
      });
  };
};
export function getColors(colors) {
  return {
    type: actionTypes.GET_COLORS,
    colors: colors,
  };
}
export function setColorsFailed(colors) {
  return {
    type: actionTypes.SET_COLORS_FAIL,
  };
}
export const getColorsToShop = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_URL}/shop/colors`)
      .then((res) => {
        dispatch(getColors(res.data));
      })
      .catch((error) => {
        dispatch(setColorsFailed("Failer"));
      });
  };
};
