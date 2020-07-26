import { FAKER_USERS } from "./type";
import fake from "../apis/fake";

export const fakeUsers = () => async (dispatch, getState) => {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: FAKER_USERS,
    payload: data.json(),
  });
};
