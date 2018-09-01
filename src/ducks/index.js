import { combineReducers } from "redux";
import roomList from "../room-list";

export default combineReducers({
  [roomList.ducks.NAME]: roomList.reducer
});
