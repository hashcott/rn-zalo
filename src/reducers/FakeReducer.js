import { FAKER_USERS } from "../actions/type";

export default (state = [], action) => {
  switch (action.key) {
    case FAKER_USERS:
      return [...state, action.payload];

    default:
      return state;
  }
};
