import React, { useCallback, useState } from "react";
import LocationsTable from "./table.js";
import { Container, Row, Col } from "react-bootstrap";
import { data } from "./data.js";
import Map from "./map.js";
import { useFetch } from "./hooks/useFetch.js";

export default function App() {
  // const dataApi = useFetch(
  //   "https://sheet.best/api/sheets/994ae62d-8d30-42df-9052-f2cd532d442a",
  //   {}
  // );
  const [lotation, setLotation] = useState(data[0]);

  const selectLocation = useCallback((idx) => {
    setLotation(data[idx]);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Map data={data} location={lotation} />
        </Col>
        <Col>
          <LocationsTable data={data} selectLocation={selectLocation} />
        </Col>
      </Row>
    </Container>
  );
}
