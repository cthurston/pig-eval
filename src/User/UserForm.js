import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputAdornment,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


const useClasses = makeStyles(theme => ({
  textField: {
    width: '100%',
  },
}));

export default function UserForm ({ user }) {
  const classes = useClasses();

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <form>
      <TextField
        className={classes.textField}
        label="Email"
        variant="outlined"
        value={user.email}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={classes.textField}
        label="Phone"
        variant="outlined"
        value={user.phone}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={classes.textField}
        label="Mobile"
        variant="outlined"
        value={user.cell}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneAndroidIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={classes.textField}
        label="Username"
        variant="outlined"
        value={user.login.username}
        margin="normal"
        disabled
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VerifiedUserIcon />
            </InputAdornment>
          ),
        }}
      />
      <FormControl variant="outlined" margin="normal" className={classes.textField}>
        <InputLabel ref={inputLabel} id="gender-select">Gender</InputLabel>
        <Select
          labelId="gender-select"
          value={user.gender}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>Unknown</em>
          </MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
