import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
import {
  newProductReducer,
  productDetailsReducer,
  productReducer,
  productsReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { myOrdersReducer, newOrderReducer } from "./reducers/orderReducer";
import {
  newAnswerReducer,
  newQuraReducer,
  queAnsReducer,
  quraDetailsReducer,
  quraReducer,
} from "./reducers/quraReducer";
import {
  courseDetailsReducer,
  courseReducer,
  coursesReducer,
  newCourseReducer,
} from "./reducers/courseReducer";
import { adminReducer } from "./reducers/adminReducer";
import { jobDetailsReducer, jobReducer, jobsReducer, newJobReducer } from "./reducers/jobReducer";
const reducer = combineReducers({
  auth: userReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  product:productReducer,
  newProduct:newProductReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  queAns: quraReducer,
  answer: newAnswerReducer,
  askQuestion: newQuraReducer,
  queAnsDetails: quraDetailsReducer,
  queAnsdelete:queAnsReducer,
  courses: coursesReducer,
  course: courseReducer,
  courseDetails: courseDetailsReducer,
  newCourse: newCourseReducer,
  ADMIN:adminReducer,
  jobs:jobsReducer,
  jobDetails:jobDetailsReducer,
  job:jobReducer,
  newJob:newJobReducer,
  myOrders:myOrdersReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export const server = "https://accedemic-asset.onrender.com/acc/v1";
