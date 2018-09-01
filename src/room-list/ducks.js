import { combineReducers } from "redux";
import groupBy from "lodash/groupBy";
import { createSelector } from "reselect";
import { createRequestEpicDucks } from "redux-observable-utils";
import * as api from "./api";

export const NAME = "ROOM_LIST";

// action type
export const SELECT_ROOM_TYPE = `${NAME}/SELECT_ROOM_TYPE`;

// action creator
export const selectRoomType = payload => ({
  type: SELECT_ROOM_TYPE,
  payload
});

export const selectedRoomType = (state = null, action) => {
  switch (action.type) {
    case SELECT_ROOM_TYPE:
      return action.payload;
    default:
      return state;
  }
};

//  create a selector to get selectedRoomType
export const getSelectedRoomType = state => {
  return state[NAME].selectedRoomType;
};

// a helper to create reducer, epic, selector for roomList api request
export const { ducks: roomList, epic: roomListEpic } = createRequestEpicDucks({
  moduleName: NAME,
  reducerName: "ROOM_LIST",
  api: api.getRoomList
});

// create a memoized selector
export const getRoomListGroupedByRoomType = createSelector(
  roomList.selector,
  roomList => {
    const { payload } = roomList || [];
    return groupBy(payload, "roomTypeLabel");
  }
);

export const getRoomListBySelectedRoomType = createSelector(
  getRoomListGroupedByRoomType,
  getSelectedRoomType,
  (roomListGroupedByRoomType = {}, selectedRoomType) => {
    return roomListGroupedByRoomType[selectedRoomType] || [];
  }
);

export default combineReducers({
  [roomList.reducerName]: roomList.reducer,
  selectedRoomType
});
