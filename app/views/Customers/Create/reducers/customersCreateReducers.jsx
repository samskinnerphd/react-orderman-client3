/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Type imports
import {
  REQUEST_CUSTOMERS_CREATE_ACTION,
  RECEIVE_CUSTOMERS_CREATE_SUCCESS,
  RECEIVE_CUSTOMERS_CREATE_FAILURE,
} from '../actions/customersCreateActions';


export const initialState = {
  isFetching: false,
  error: null,
};


/**
 * @description Reducer for customersCreate
 * @param reduxState
 * @param action
 * @returns {*}
 */
export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_CUSTOMERS_CREATE_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null,
      };
    case RECEIVE_CUSTOMERS_CREATE_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
      };
    case RECEIVE_CUSTOMERS_CREATE_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };
    default:
      return reduxState;
  }
};
