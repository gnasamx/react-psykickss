// @flow
import React, {Fragment} from 'react'
import PageWrapper from './components/PageWrapper'
import {Button, IconPosition, Size, Variant} from './components/Button'
import {Row, Col} from './components/Grid'
import {ArrowRight, Search} from './components/Icon'

function App() {
  return (
    <Fragment>
      <PageWrapper>
        <p>Hello</p>
        <Row>
          <Col lg={3}>
            <Button
              isLoading={false}
              size={Size.Lg}
              icon={<ArrowRight color="#fff" size={20} />}
              variant={Variant.Primary}
            >
              Primary
            </Button>
          </Col>
          <Col lg={3}>
            <Button
              fluid
              size={Size.Md}
              icon={<Search color="#7B20F9" size={20} />}
              iconPosition={IconPosition.Left}
              variant={Variant.Secondary}
            >
              Secondary
            </Button>
          </Col>
          <Col lg={3}>
            <Button size={Size.Sm} variant={Variant.Outline}>
              Outline
            </Button>
          </Col>
          <Col lg={3}>
            <Button size={Size.Md} variant={Variant.Light}>
              Light
            </Button>
          </Col>
        </Row>
      </PageWrapper>
    </Fragment>
  )
}

export default App
