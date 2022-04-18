
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <>
        <Container>
            <Row className=''  >
                <Col md={2} className="my-3 ">
                  <Card>
                    <Card.Img src='https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm1.jpg'/>
                    <Card.Body>
                      <h6>Ananda Kumar Saha</h6>
                      <span>Call: 01913918163</span>
                    </Card.Body>
                    <Card.Footer>
                      <Link to='/profile' className='btn btn-sm btn-success'>View Detiles</Link>
                    </Card.Footer>
                  </Card>
                
                </Col>
            </Row>
        </Container>
    
    
    
    </>
  )
}

export default Team;