import { v4 as uuid } from "uuid";

function UserReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const user = {
        id: uuid(),
        ...action.data,
      };
      return [...state, user];
    default:
      return state;
  }
}

export default UserReducer;
