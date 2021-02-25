import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Icon } from 'semantic-ui-react'

export default function SummaryItem({ pack, price, date }) {

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Icon name='searchengin' size='big' />
        </ListItemAvatar>
        <ListItemText primary={pack + " - R$ " + price} secondary={date} />
      </ListItem>
    </>
  );
}
