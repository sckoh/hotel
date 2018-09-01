import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    borderBottom: "1px solid #ddd",
    paddingRight: 0
  },
  noBorderBottom: {
    borderBottom: "none"
  },
  btnBook: {
    margin: theme.spacing.unit * 2
  }
});

class RoomDetailsCenter extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    room: PropTypes.object.isRequired,
    isLast: PropTypes.bool.isRequired
  };

  render() {
    const { classes, room, isLast } = this.props;
    return (
      <Grid
        item
        xs
        container
        alignItems="center"
        justify="flex-end"
        className={`${classes.root} ${isLast && classes.noBorderBottom}`}
      >
        <Grid item>
          <Typography>
            RM
            {room.totalPrice}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.btnBook}
            onClick={e => {
              alert(2);
              e.stopPropagation();
            }}
          >
            Book
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(RoomDetailsCenter);
