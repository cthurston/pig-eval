import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Dialog,
  IconButton,
  Slide,
  Typography,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import UserForm from './UserForm';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  contentContainer: {
    display: 'flex',
    overflow: 'scroll',
  },
}));

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog ({ user, onClose }) {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);

  const handleClose = () => onClose();

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  if (user == null) return null;

  const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const registered = DateTime.fromISO(user.registered.date).toLocaleString(DateTime.DATETIME_MED);

  return (
    <Dialog open={true} onClose={handleClose} TransitionComponent={Transition}>
      <Card className={classes.card} elevation={0}>
        <CardHeader
          avatar={
            <Avatar src={user.picture.thumbnail} />
          }
          action={
            <IconButton aria-label="settings" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
          title={name}
          subheader={`${user.phone}`}
        />
        <CardMedia
          className={classes.media}
          image={user.picture.large}
          title={name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${name} is from ${user.location.city}. ${user.gender === 'male' ? 'He' : 'She'} registered ${registered}.`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={handleEditClick}
            aria-label="edit"
          >
            {
              isEditing
                ? <SaveIcon />
                : <EditIcon />
            }
          </IconButton>
        </CardActions>
        <Collapse className={classes.contentContainer} in={isEditing} timeout="auto" unmountOnExit>
          <CardContent>
            <UserForm user={user} />
          </CardContent>
        </Collapse>
      </Card>
    </Dialog>
  );
}


