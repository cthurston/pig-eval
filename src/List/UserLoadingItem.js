import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

export default function UserLoadingItem ({ classes }) {
  return (
    <ListItem
      className={classes.listLink}
    >
      <ListItemAvatar>
        <Avatar>
          <Skeleton variant="circle" width={40} height={40} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={<Skeleton component="span" className={classes.skeletonText} variant="rect" width={240} height={18} />}
        secondary={<Skeleton component="span" className={classes.skeletonText} variant="rect" width={140} height={18} />}
      />
    </ListItem>
  )
}
