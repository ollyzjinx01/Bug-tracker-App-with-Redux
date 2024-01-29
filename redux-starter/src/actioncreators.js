import * as actions from "./actionTypes";

//another way is to use arrow function
// export const bugAdded = description => ({
// type: actions.BUG_ADDED,
//     payload: {
//     description: description,
//     }
//});
//use the bug removed here in your project
// export const bugRemoved = (id) => ({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: id,
//   },
// });

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: "Bug 1",
    },
  };
}

export function bugRemoved(description) {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: 1,
    },
  };
}
export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id: id,
  },
});
