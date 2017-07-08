import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconSearch from 'material-ui/svg-icons/action/search';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconElementRight={<IconButton><IconSearch/></IconButton>}
  />
);

export default AppBarExampleIcon;