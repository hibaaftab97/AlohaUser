const authReducer = {
  user: null,
  token:null,
  loggedin: false,
  isLoading: false,
  customer: {},
};

const commonReducer = {
  isLoading: false,
  attendance:false
};

const productReducer = {
 products:[],
 services:[]
};

const cartReducer = {
  cartItems: [],
};
const initialStates = {
  authReducer: authReducer,
  commonReducer: commonReducer,
  productReducer: productReducer,
  cartReducer: cartReducer,


};
export default initialStates;
