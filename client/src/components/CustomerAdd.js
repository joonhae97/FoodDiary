import React from 'react';
import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    hidden : {
        display : 'none'
    }
})

class CustomerAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            FOOD: '',
            ENERC : '',
            CHOTDF : '',
            PROCNP: '',
            FAT : '',
            open :false
        }
    }
    handleClickOpen=()=>{
        this.setState({
            open:true
        });
    }
    handleClose=()=>{
        this.setState({
            FOOD: '',
            ENERC : '',
            CHOTDF : '',
            PROCNP: '',
            FAT : '',
            open :false
        })
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('FOOD', this.state.FOOD);
        formData.append('ENERC', this.state.ENERC);
        formData.append('CHOTDF', this.state.CHOTDF);
        formData.append('PROCNP', this.state.PROCNP);
        formData.append('FAT', this.state.FAT);
        const config ={
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleFormSubmit = (e) =>{
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            FOOD: '',
            ENERC : '',
            CHOTDF : '',
            PROCNP: '',
            FAT : '',
            open : false
        })
        this.props.stateRefresh();
    }

    handleFileChange= (e) => {
        this.setState({
            file: e.target.files[0],
            fileName : e.target.value
        })
    }

    handleValueChange =(e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    
    render(){
        const {classes} = this.props;
        return (
            <div>
                <Button variant = "contained" color = "secondary" onClick={this.handleClickOpen}>
                    직접 추가하기
                </Button>
                <Dialog open = {this.state.open} onClose ={this.handleClose}>
                    <DialogTitle>식단 추가</DialogTitle>
                    <DialogContent>
                        <TextField label = "음식이름" type = "text" name = "FOOD" value = {this.state.FOOD} onChange = {this.handleValueChange}/><br/>
                        <TextField label = "칼로리" type = "number" name = "ENERC" value = {this.state.ENERC} onChange = {this.handleValueChange}/><br/>
                        <TextField label = "탄수화물" type = "number" name = "CHOTDF" value = {this.state.CHOTDF} onChange = {this.handleValueChange}/><br/>
                        <TextField label = "단백질" type = "number" name = "PROCNP" value = {this.state.PROCNP} onChange = {this.handleValueChange}/><br/>
                        <TextField label = "지방" type = "number" name = "FAT" value = {this.state.FAT} onChange = {this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant = "contained" color = "primary" onClick ={this.handleFormSubmit}>추가</Button>
                        <Button variant = "outlined" color = "primary" onClick ={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>

            </div>

        );
        
    }
}
export default withStyles(styles)(CustomerAdd);