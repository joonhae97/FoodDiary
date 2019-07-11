import React, {Component} from 'react';
import Customer from './components/Customer'
import CustomerAdd from './components/CustomerAdd'
import CustomerGraph from './components/CustomerGraph';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { returnStatement } from '@babel/types';
import CustomerCarousel from './components/CustomerCarousel';
import Drawer from './components/Drawer';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import './App.css';


const styles = theme =>({
  page:{
    width : '480px',
    marginLeft: 18,
    marginRight :18
  },
  root:{
    width : '100%',
    minWidth : 1080,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tableHead:{
    fontSize : '1.0rem'
  },
  menu:{
    marginTop: 15,
    marginBottom : 15,
    display : 'flex',
    justifyContent : 'center'
  },
  paper :{
    marginLeft: 18,
    marginRight :18
  },
  progress:{
    margin: theme.spacing.unit * 2
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  carousel:{
    width: '40%',
    height : 200,
    float : 'left'
  },
  recipe :{
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }
})


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      customers : "",
      completed : 0,
      searchKeyword:'',
      left : false,
      tab : 0
    }
  }
  stateRefresh =() =>{
    this.setState({
      customers: '',
      completed : 0,
      searchKeyword:'',
      });
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err))
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 1 });
  }

  handleValueChange =(e) =>{
    let nextState ={};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleChange = (e) =>{
    const {tab} = this.state;
    this.setState({tab : tab>=1? 0: tab + 1 });
  }

  render(){
    const filteredComponents =(data,type)=>{
      data = data.filter((c)=>{
        return c.FOOD.indexOf(this.state.searchKeyword) >-1;
      });
      
      return data.map((c)=>{
        if(type ===0){
          if(c.isSelected ===1){
        return <Customer stateRefresh ={this.stateRefresh} key = {c.ID} ID = {c.ID} FOOD ={c.FOOD} ENERC = {c.ENERC} CHOTDF={c.CHOTDF} PROCNP ={c.PROCNP} FAT={c.FAT}/>
      }}
        if(type ===1){
          return <Customer stateRefresh ={this.stateRefresh} key = {c.ID} ID = {c.ID} FOOD ={c.FOOD} ENERC = {c.ENERC} CHOTDF={c.CHOTDF} PROCNP ={c.PROCNP} FAT={c.FAT}/>
        }
    });
    
      
    }

    const cellList =["번호", "음식", "칼로리","탄수화물", "단백질", "지방", "추가","삭제"]
    const cellList1 =["번호", "음식", "칼로리","탄수화물", "단백질", "지방", "추가", "삭제"]
    const {classes} =this.props;
    return(
      <div>
      <div className ={classes.root}>
        <AppBar position="static" color = "secondary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <Drawer color="inherit"/>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            나만의 식단일기
          </Typography>
        <Tabs name = "tab" value = {this.state.tab} onChange={this.handleChange} >
            <Tab label="나의 식단 기록" />
            <Tab label="메뉴 리스트" />
        </Tabs>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              placeholder="검색하기"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              name = "searchKeyword"
              value = {this.state.searchKeyword}
              onChange = {this.handleValueChange}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
        </Toolbar>
      </AppBar>

      {this.state.tab === 0 && <TabContainer>
      <div className ={classes.menu}>
          <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className = {classes.paper}>
            <Table className = {classes.table}>
              <TableHead>
                <TableRow>
                  {cellList.map(c=>{
                    return <TableCell className ={classes.tableHead}>{c}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.customers ? 
                  filteredComponents(this.state.customers,0) : 
                <TableRow>
                  <TableCell colSpan= "7" align = "center">
                    <CircularProgress className = { classes.progress } variant = "determinate" value= {this.state.completed}/>
                  </TableCell>
                </TableRow>}
              </TableBody>  
            </Table>
          </Paper>
      </Grid>
      <br/>
      <Grid item xs={6}>
        <CustomerGraph/>
      </Grid>
      <Grid item xs={6}>
        <CustomerCarousel/>
      </Grid>
      </Grid>
      
      </TabContainer>}

      {this.state.tab === 1 && <TabContainer>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              placeholder="음식 찾기"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              name = "searchKeyword"
              value = {this.state.searchKeyword}
              onChange = {this.handleValueChange}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
      <Paper className = {classes.paper}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              {cellList1.map(c=>{
                return <TableCell className ={classes.tableHead}>{c}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? 
              filteredComponents(this.state.customers,1) : 
            <TableRow>
              <TableCell colSpan= "8" align = "center">
                <CircularProgress className = { classes.progress } variant = "determinate" value= {this.state.completed}/>
              </TableCell>
            </TableRow>}
          </TableBody>  
        </Table>
      </Paper>
      <br/>
      </TabContainer>}
      </div>
        
      </div>
    );
  }
}

export default withStyles(styles)(App);
