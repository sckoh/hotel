import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import RoomListItem from "./RoomListItem";
import SelectedRoomTypeDetails from "./SelectedRoomTypeDetails";
import * as ducks from "./ducks";

const styles = theme => ({
  containerProgress: {
    padding: theme.spacing.unit * 4
  }
});

class RoomList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    roomList: PropTypes.object.isRequired,
    roomListGroupedByRoomType: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { roomListFetch } = this.props;
    roomListFetch();
  }

  render() {
    const { roomListGroupedByRoomType, roomList, classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Room List
            </Typography>
          </Toolbar>
        </AppBar>
        {roomList.isFetching && (
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.containerProgress}
          >
            <CircularProgress />
          </Grid>
        )}
        <SelectedRoomTypeDetails />
        {Object.keys(roomListGroupedByRoomType).map(roomTypeLabel => (
          <RoomListItem
            key={roomTypeLabel}
            roomTypeLabel={roomTypeLabel}
            roomList={roomListGroupedByRoomType[roomTypeLabel]}
          />
        ))}
      </div>
    );
  }
}

RoomList = withStyles(styles)(RoomList);

const mapStateToProps = state => ({
  roomListGroupedByRoomType: ducks.getRoomListGroupedByRoomType(state),
  roomList: ducks.roomList.selector(state)
});

const mapDispatchToProps = {
  roomListFetch: ducks.roomList.requestActions.fetch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);
