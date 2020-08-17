import React, { Fragment } from "react";
import PageWrapper from "./components/PageWrapper";
import { Button } from "./components/NewButton/";
import { Row, Col } from "./components/Grid";
import { ArrowRight } from "./components/Icon";

function App() {
  return (
    <Fragment>
      <PageWrapper>
        <p>Hello</p>
        <Row>
          <Col>
            <Button icon={<ArrowRight color="#fff" />}>Button</Button>
          </Col>
        </Row>
      </PageWrapper>
    </Fragment>
  );
}

export default App;
