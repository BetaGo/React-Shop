import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import IconShoppingCart from 'material-ui-icons/ShoppingCart';
import IconExplore from 'material-ui-icons/Explore';
import IconPerson from 'material-ui-icons/Person';
import deepPurple from 'material-ui/colors/deepPurple';

const styleSheet = createStyleSheet({
  list: {
    width: 250,
    flex: 'initial',
  },
  link: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    outline: 'none',
  },
  avatar: {
    marginBottom: '-12px',
    marginTop: '12px',
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  header: {
    background: `
      repeating-linear-gradient(
        #F3F5C4 0,
        #F3F5C4 3em,
        #F19181 3em,
        #F19181 6em
      ),
      repeating-linear-gradient(
        90deg,
        #F9CB8F 0,
        #F9CB8F 3em,
        #3CBAC8 3em,
        #3CBAC8 6em
      ),
      repeating-linear-gradient(
        45deg,
        transparent 0,
        transparent 6em,
        #F19181 12em
      ),
      repeating-linear-gradient(
        -45deg,
        transparent 0,
        transparent 6em,
        #F19181 12em
      );
    `,
    backgroundBlendMode: 'multiply',
  },
});

function UndockedDrawer(props) {
  const classes = props.classes;


  const sideList = (
    <div>
      <List className={classes.list} disablePadding>
        <div className={classes.header}>
          <ListItem>
            <Avatar className={classes.avatar}>N</Avatar>
          </ListItem>
          <ListItem>
            <div>
              <Typography type="body2">某用户</Typography>
              <Typography type="body1">xxxxxxx@xxx.xxx</Typography>
            </div>
          </ListItem>
        </div>
      </List>
      <Divider />
      <List className={classes.list} disablePadding>
        <ListItem button>
          <NavLink className={classes.link} to="/goods-list" />
          <ListItemIcon>
            <IconExplore />
          </ListItemIcon>
          <ListItemText primary="商品列表" />
        </ListItem>
        <ListItem button>
          <NavLink className={classes.link} to="/shopping-cart" />
          <ListItemIcon>
            <IconShoppingCart />
          </ListItemIcon>
          <ListItemText primary="购物车" />
        </ListItem>
        <ListItem button>
          <NavLink className={classes.link} to="/my-order" />
          <ListItemIcon>
            <IconPerson />
          </ListItemIcon>
          <ListItemText primary="我的订单" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );


  return (
    <div>
      <Drawer
        open={props.open}
        // onRequestClose={props.handleClose}
        onClick={props.handleClose}
      >
        {sideList}
      </Drawer>
    </div>
  );
}


UndockedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(UndockedDrawer);