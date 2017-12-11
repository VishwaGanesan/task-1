import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';
const style={
  display:'flex',
  paddingLeft:'40px',
  flexDirection:'row',
  fontFamily:'monospace',
}

const ListExampleSimple = () => (
  <div>
    <List style={style}>
      <ListItem primaryText="Inbox"  />< Divider />
      <ListItem primaryText="Starred"  />
      <ListItem primaryText="Sent mail"  />
      <ListItem primaryText="Drafts" />
      <ListItem primaryText="Inbox" />
    </List>
  </div>
);

export default ListExampleSimple;
