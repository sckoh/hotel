import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    borderRight: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
    padding: theme.spacing.unit * 2
  },
  noBorderBottom: {
    borderBottom: "none"
  }
});

class RoomDetailsCenter extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    room: PropTypes.object.isRequired,
    isLast: PropTypes.bool.isRequired
  };

  getBedTypeLabel = () => {
    const { room } = this.props;
    if (!room.bedTypeLabel) {
      return "-";
    }
    if (room.bedTypeLabel.toString() === "") {
      return "-";
    }
    return room.bedTypeLabel;
  };

  render() {
    const { classes, room, isLast } = this.props;
    return (
      <Grid
        xs={8}
        item
        container
        className={`${classes.root} ${isLast && classes.noBorderBottom}`}
        justify="center"
        direction="column"
      >
        <Typography gutterBottom>
          Bed Type: {room.bedTypeLabel || "-"}
        </Typography>
        <Typography>
          Descriptions: {room.boardCodeDescription || "-"}
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(styles)(RoomDetailsCenter);
