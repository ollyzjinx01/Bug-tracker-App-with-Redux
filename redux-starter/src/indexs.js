import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actioncreators";

// Subscribe to changes in the store
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// Dispatch actions
store.dispatch(bugAdded("Bug 1"));

// Assuming you have a valid bug ID (1 in this case) to resolve
store.dispatch(bugResolved(1));

// Assuming you have a valid bug ID (1 in this case) to remove
store.dispatch(bugRemoved(1));

// Log the final state
console.log("Final state:", store.getState());

// Unsubscribe from the store to stop listening to changes
unsubscribe();
