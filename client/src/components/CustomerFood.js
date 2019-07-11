import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';
class CustomerFood extends React.Component{
    render(){
            return(
                <TableRow>
                <TableCell>{this.props.ID}</TableCell>
                <TableCell>{this.props.FOOD}</TableCell>
                <TableCell>{this.props.ENERC}</TableCell>
                <TableCell>{this.props.CHOTDF}</TableCell>
                <TableCell>{this.props.PROCNP}</TableCell>
                <TableCell>{this.props.FAT}</TableCell>
                <TableCell><CustomerDelete stateRefresh ={this.props.stateRefresh} ID = {this.props.ID}/></TableCell>
            </TableRow>
    );}
}

export default CustomerFood;