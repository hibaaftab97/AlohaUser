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

const initialStates = {
  authReducer: authReducer,
  commonReducer: commonReducer,
  productReducer: productReducer,


};
export default initialStates;
