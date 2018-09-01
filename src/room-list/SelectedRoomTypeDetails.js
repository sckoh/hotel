import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import RoomDetails from "./RoomDetails";
import { getRoomListBySelectedRoomType, getSelectedRoomType } from "./ducks";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
  }
});

class SelectedRoomTypeDetails extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    roomList: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedRoomType: PropTypes.string
  };

  render() {
    const { roomList, classes, selectedRoomType } = this.props;
    if (!roomList.length) {
      return null;
    }
    return (
      <Card className={classes.root}>
        <Typography variant="title" gutterBottom>
          Room List of Selected Room Type: {selectedRoomType}
        </Typography>
        <RoomDetails roomList={roomList} />
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  roomList: getRoomListBySelectedRoomType(state),
  selectedRoomType: getSelectedRoomType(state)
});

SelectedRoomTypeDetails = withStyles(styles)(SelectedRoomTypeDetails);

export default connect(mapStateToProps)(SelectedRoomTypeDetails);
