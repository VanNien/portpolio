import { Col, Row } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css'
import '../home/index.scss'
// import { Container } from './styles';

function Home() {
  return (
    <>
    <Row className="home">
    <Col className="name_link" span={8}>
        Hello
    </Col>
    <Col className="description" span = {16}>
        World
    </Col>
    </Row>
    </>

  );
}


export default Home;