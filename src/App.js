// @flow
import React, {Fragment} from 'react'
import PageWrapper from './components/PageWrapper'
import {Button, IconPosition, Size, Variant} from './components/NewButton/'
import {Row, Col} from './components/Grid'
import {ArrowRight, Search} from './components/Icon'

function App() {
  return (
    <Fragment>
      <PageWrapper>
        <p>Hello</p>
        <Row>
          <Col lg={4}>
            <Button
              size={Size.Lg}
              icon={<ArrowRight color="#fff" size={24} />}
              variant={Variant.Primary}
            >
              Button
            </Button>
          </Col>
          <Col lg={4}>
            <Button
              size={Size.Md}
              icon={<Search color="#000" size={20} />}
              iconPosition={IconPosition.Left}
              variant={Variant.Secondary}
            >
              Button
            </Button>
          </Col>
          <Col lg={4}>
            <Button size={Size.Sm} variant={Variant.Outline}>
              Button
            </Button>
          </Col>
        </Row>
      </PageWrapper>
    </Fragment>
  )
}

export default App
