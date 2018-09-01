import { combineEpics } from "redux-observable";
import { roomListEpic } from "./ducks";

export default combineEpics(roomListEpic);
