import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import {post} from 'axios';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  
  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button key="메뉴 리스트" >
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary="메뉴 리스트" />
        </ListItem>
        <ListItem button key="식단 리스트">
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="식단 리스트" />
        </ListItem>
        <ListItem button key="추천 레시피">
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary="추천 레시피" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['식습관 통계', '신체 정보'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
      
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
   
    </div>
  );
}

class Drawer extends React.Component{
    render(){
        return(
            <SwipeableTemporaryDrawer/>
        );
    }
}
export default Drawer;