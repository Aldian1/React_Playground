import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Tr, Td } from './reactable';

const someData = [
  {
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
    return (
      <div className="Container">
        <div className="sideBar">
          Hello
        </div>
        <div class="tableContainer">
          <Table className="table" id="table">
            { someData.map((ub) => {
                return (<Tr>
                          <Td column="Ref" key={ ub.key }>
                            { ub.Ref }
                          </Td>
                          <Td column="Status" key={ ub.key }>
                            { ub.Status }
                          </Td>
                          <Td column="Date" key={ ub.key }>
                            { ub.Date }
                          </Td>
                          <Td column="Name">
                            <a href="#UserProfile">
                              { ub.Name }
                            </a>
                          </Td>
                          <Td column="Start" key={ ub.key }>
                            { ub.Start }
                          </Td>
                          <Td column="Hours" key={ ub.key }>
                            { ub.Hours }
                          </Td>
                          <Td column="Location" key={ ub.key }>
                            { ub.Location }
                          </Td>
                          <Td column="Rating" key={ ub.key }>
                            { ub.Rating }
                          </Td>
                          <Td column="" key={ ub.key }>
                          </Td>
                        </Tr>)
              }) }
          </Table>
        </div>
      </div>
      );
  }
}

export default App;
