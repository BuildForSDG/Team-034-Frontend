import {
 SAMPLE_ACTION
} from "../Actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return action.data;
    default:
      return state;
  }
}
