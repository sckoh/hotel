import { combineEpics } from "redux-observable";
import roomList from "../room-list";

export default combineEpics(roomList.epic);
