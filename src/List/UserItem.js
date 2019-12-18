import React, { useMemo } from 'react';
import { Link } from '@reach/router';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';

export default function UserItem ({ user, classes, selectUser }) {
  const handleClick = useMemo(() => () => selectUser(user), [user, selectUser]);
  return (
    <ListItem
      className={classes.listLink}
      onClick={handleClick}
    >
      <ListItemAvatar>
        <Avatar src={user.picture.thumbnail} />
      </ListItemAvatar>
      <ListItemText
        primary={`${user.name.title} ${user.name.first} ${user.name.last}`}
        secondary={`${user.phone}`}
      />
    </ListItem>
  )
}
