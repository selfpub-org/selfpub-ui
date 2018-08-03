import React, { Component } from "react";
import { Table, Td, Tr } from "../index";

export class TableExample extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h3>Table component</h3>
        <div>
          <Table>
            <Tr>
              <Td>123</Td>
              <Td>235</Td>
              <Td>12erthry3</Td>
            </Tr>
            <Tr>
              <Td>aersrthert</Td>
              <Td>aersrtdfgndfghert</Td>
              <Td>aedfndfrsrthert</Td>
            </Tr>
            <Tr>
              <Td>aersrthert</Td>
              <Td>aersrtdfgndfghert</Td>
              <Td>aedfndfrsrthert</Td>
            </Tr>
            <Tr>
              <Td>aersrthert</Td>
              <Td>aersrtdfgndfghert</Td>
              <Td>aedfndfrsrthert</Td>
            </Tr>
          </Table>
        </div>
      </div>
    );
  }
}
