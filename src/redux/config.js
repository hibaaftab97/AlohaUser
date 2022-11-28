export const urls = {
  v1: `http://aloha.testedwebsite.com/api/v1/`,
};

export const base_url = urls.v1;
export const endpoints = {
  auth: {
    login: 'login',
    logout: 'logout',
    register: 'register',
    forgotpassword: "forgot-password",
    verifycode: "verify",
    resetpassword: "reset-password"
  },
  users: {
    getallAppointments: "vendors/appointment",
    getallProducts: "users/products",
    getProductDetail: "users/products",

    getallServices: "users/services",
    getServiceByid: "users/services",
    bookService: "users/booking/request",
    getOrders: "users/orders",
    getOrderDetail: "users/orders",


    getProfile: "users/profile",
    updateProfile: "vendors/edit",

    timeIn: "vendors/time-in",
    timeOut: "vendors/time-out"

  },
  checkout:{
    createOrder:"users/checkout"
  }

};

const configs = {
  endpoints: endpoints,
  base_url: base_url,
};

export default configs;
