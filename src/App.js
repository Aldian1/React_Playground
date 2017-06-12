import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Table, Tr, Td } from 'reactable';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './react-bootstrap-table.css';

const someData = [{
  Ref: "JR18746",
  Status: "Online",
  Date: "11/05/2017",
  Name: "Harry",
  Start: "10:00AM",
  Hours: "4",
  Location: "E11BZ",
  Rating: "5",
  key: 1
},
  {
    Ref: "JR18747",
    Status: "Offline",
    Date: "11/05/2017",
    Name: "Luigi",
    Start: "11:00AM",
    Hours: "6",
    Location: "E11DZ",
    Rating: "3",
    key: 2
  },
  {
    Ref: "JR18748",
    Status: "Online",
    Date: "11/05/2017",
    Name: "Akshay",
    Start: "1:00PM",
    Hours: "7",
    Location: "E11AZ",
    Rating: "2",
    key: 3
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectRow = {
      mode: 'checkbox',
      columnWidth: '120px'
    };

    return ( <div className="Container">
               <BootstrapTable data={ someData } striped={ true } hover={ true } selectRow={ selectRow }>
                 <TableHeaderColumn dataField="Ref" dataAlign="center" dataSort={ true } selectRow={ selectRow }> Ref
                 </TableHeaderColumn>
                 <TableHeaderColumn dataField="key" isKey={ true } dataSort={ true } width='200px'> ID
                 </TableHeaderColumn>
                 <TableHeaderColumn dataField="Name" dataSort={ true } width='200px'> Name
                 </TableHeaderColumn>
                 <TableHeaderColumn dataField="Rating" width='200px' dataSort={ true }> Rating
                 </TableHeaderColumn>
               </BootstrapTable>
             </div>
      );
  }
}

export default App;