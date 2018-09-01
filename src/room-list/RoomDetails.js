import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import RoomDetailsCenter from "./RoomDetailsCenter";
import RoomDetailsEnd from "./RoomDetailsEnd";

class RoomDetails extends PureComponent {
  static propTypes = {
    roomList: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { roomList } = this.props;
    return (
      <Grid item xs>
        {roomList.map((room, index) => {
          const isLast = index === roomList.length - 1;
          return (
            <Grid container key={room.id}>
              <RoomDetailsCenter room={room} isLast={isLast} />
              <RoomDetailsEnd room={room} isLast={isLast} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default RoomDetails;
