import React from "react";
import { Table } from "react-bootstrap";

const TableRow = ({ rowData, selectLocation, idx }) => (
  <tr key={rowData.name} onClick={() => selectLocation(idx)}>
    <td>{rowData.name}</td>
    <td>{rowData.nr_beds_total}</td>
  </tr>
);

export default function LocationsTable({ data, selectLocation }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Location</th>
          <th>Number of beds</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <TableRow
            key={row.name}
            rowData={row}
            selectLocation={selectLocation}
            idx={idx}
          />
        ))}
      </tbody>
    </Table>
  );
}
