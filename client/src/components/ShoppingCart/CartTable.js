import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: true,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px',
  };

  render() {
    const {tableData} = this.props
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="商品名称">名称</TableHeaderColumn>
              <TableHeaderColumn tooltip="商品单价">单价</TableHeaderColumn>
              <TableHeaderColumn tooltip="商品数量">数量</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row) => (
              <TableRow key={row._id}>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.price}</TableRowColumn>
                <TableRowColumn>{row.number}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
