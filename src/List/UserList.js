import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';

import useUsers from './useUsers';
import UserItem from './UserItem';
import UserLoadingItem from './UserLoadingItem';
import LoadMore from './LoadMore';
import UserDetails from '../User/UserDetails';

const useClasses = makeStyles(theme => ({
  container: {
    padding: 0,
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listLink: {
    textDecoration: theme.palette.textDecoration,
    color: theme.palette.primary.contrastText,
  },
  skeletonText: {
    margin: '2px 0',
  }
}));

export default function UserList () {
  const classes = useClasses();
  const [count, setCount] = useState(30);
  const [selectedUser, setSelectedUser] = useState(null);
  const { results, info } = useUsers(1, count);

  const users = results || Array.from(new Array(count));

  const loadMore = () => setCount(count + 30);
  const selectUser = user => setSelectedUser(user);
  const deselectUser = () => setSelectedUser(null);

  console.log(results)

  const selectUserItem = (u, i) => u
    ? <UserItem key={u.id.value || i} user={u} classes={classes} selectUser={selectUser} />
    : <UserLoadingItem key={i} classes={classes} />;

  return (
    <Container className={classes.container} maxWidth="sm">
      <List className={classes.list}>
        {users.map(selectUserItem)}
      </List>
      <LoadMore loadMore={loadMore} />
      <UserDetails onClose={deselectUser} user={selectedUser} />
    </Container>
  );
}
