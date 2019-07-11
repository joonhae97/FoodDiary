import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerSelect from './CustomerSelect';
import CustomerDelete from './CustomerDelete';

class Customer extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.ID}</TableCell>
                <TableCell>{this.props.FOOD}</TableCell>
                <TableCell>{this.props.ENERC}kcal</TableCell>
                <TableCell>{this.props.CHOTDF}g</TableCell>
                <TableCell>{this.props.PROCNP}g</TableCell>
                <TableCell>{this.props.FAT}g</TableCell>
                <TableCell><CustomerSelect stateRefresh ={this.props.stateRefresh} ID = {this.props.ID}/></TableCell>
                <TableCell><CustomerDelete stateRefresh ={this.props.stateRefresh} ID = {this.props.ID}/></TableCell>

            </TableRow>
        );
    
}   
}

export default Customer;