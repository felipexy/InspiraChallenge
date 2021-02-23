import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Icon } from 'semantic-ui-react'

export default function SummaryItem({pack, price, date}) {

  return (
    <>
        <ListItem>
            <ListItemAvatar>
                <Icon name='searchengin' size='big'/>
            </ListItemAvatar>
            <ListItemText primary={pack + " - R$ " + price} secondary={date} />
        </ListItem>
    </>
  );
}
