import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import RoomDetails from "./RoomDetails";
import { selectRoomType } from "./ducks";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
  },
  roomType: {
    padding: theme.spacing.unit * 2,
    paddingLeft: 0,
    minWidth: 100,
    borderRight: "1px solid #ddd"
  }
});

class RoomListItem extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    roomList: PropTypes.arrayOf(PropTypes.object).isRequired,
    roomTypeLabel: PropTypes.string.isRequired,
    selectRoomType: PropTypes.func.isRequired
  };

  onRoomTypeClick = () => {
    const { selectRoomType, roomTypeLabel } = this.props;
    selectRoomType(roomTypeLabel);
  };

  render() {
    const { roomTypeLabel, roomList, classes } = this.props;
    return (
      <Card className={classes.root}>
        <Grid container spacing={16}>
          <Grid item container>
            <Grid item xs={2} className={classes.roomType}>
              <ButtonBase onClick={this.onRoomTypeClick}>
                <Typography variant="subheading" color="primary">
                  {roomTypeLabel}
                </Typography>
              </ButtonBase>
            </Grid>
            <RoomDetails roomList={roomList} />
          </Grid>
        </Grid>
      </Card>
    );
  }
  1;
}

RoomListItem = withStyles(styles)(RoomListItem);

const mapDispatchToProps = {
  selectRoomType
};

export default connect(
  null,
  mapDispatchToProps
)(RoomListItem);
