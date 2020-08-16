import React, { Fragment } from "react";
import PageWrapper from "./components/PageWrapper";
import Button from "./components/Button/button";
import { Row, Col } from "./components/Grid";
import { ArrowRight } from "./components/Icon";
import Spinner from "./components/Spinner";

function App() {
  return (
    <Fragment>
      <PageWrapper>
        <p>Hello</p>
        <Row>
          <Col md={4} sm={6}>
            <Button primary block>
              Button
            </Button>
            <p>
              The initial value of the flex-wrap property is nowrap. This means
              that if you have a set of flex items that are too wide for their
              container, they will overflow it. If you want to cause them to
              wrap once they become too wide you must add the flex-wrap property
              with a value of wrap, or use the shorthand flex-flow with values
              of row wrap or column wrap.
            </p>
          </Col>
          <Col md={4} sm={6}>
            <ArrowRight size={24} />
          </Col>
          <Col md={4} sm={6}>
            <Spinner size={24} color="green" />
          </Col>
        </Row>
      </PageWrapper>
    </Fragment>
  );
}

export default App;
