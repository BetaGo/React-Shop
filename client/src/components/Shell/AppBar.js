import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SearchIcon from 'material-ui-icons/Search';

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    willChange: 'transform',
    transition: '0.2s ease',
    zIndex: 1,
  },
  flex: {
    flex: 1,
  },
});

function ButtonAppBar(props) {
  const classes = props.classes;
  const { title, handleMenu, handleSearch } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="contrast"
            aria-label="Menu"
            onTouchTap={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          <IconButton
            color="contrast"
            aria-label="Search"
            onTouchTap={handleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  handleMenu: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);
