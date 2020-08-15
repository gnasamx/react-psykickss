import React, { Fragment } from "react";
import PageWrapper from "./components/PageWrapper";
// import Button from "./components/Button/button";
import { Flex, Item } from "./components/FlexGrid";
import myList from "./example.json";
import { Row, Col } from "./components/Grid";

function App() {
  return (
    <Fragment>
      <PageWrapper>
        <p>Hello</p>
        <Row>
          <Col xl={6} lg={4} md={4} sm={6}>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                border: "1px solid #eee",
                background: "#eee",
              }}
            >
              Hello
            </div>
          </Col>
          <Col xl={6} lg={4} md={4} sm={6}>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                border: "1px solid #eee",
                background: "#eee",
              }}
            >
              Hello
            </div>
          </Col>
          <Col xl={6} lg={4} md={4} sm={6}>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                border: "1px solid #eee",
                background: "#eee",
              }}
            >
              Hello
            </div>
          </Col>
        </Row>
      </PageWrapper>
    </Fragment>
  );
}

export default App;
