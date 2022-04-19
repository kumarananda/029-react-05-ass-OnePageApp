
import React from 'react';
import { Card, Col, Container, Row, Table, Button } from 'react-bootstrap';
import 'boxicons';
import './Admin.css'
import { Link } from 'react-router-dom';


const Admin = () => {
  return (
    <section className='my-3 admin'>
        <Container >
            <Row className='d-flex  justify-content-center profile-item align-items-center  '>
                
                <Col >
                    <Card className='admin_table_bg text-white '>
                        <Card.Header className='d-flex justify-content-between'>
                            <h2>All Developers Data</h2>
                            <div>
                                <span><Link to={"/"} className='btn-sm btn btn-primary '>All Developers</Link></span>&nbsp;
                                <span><Link  to="/addDevs"className='btn-sm btn btn-primary '> Add Devs</Link></span>
                            </div>
                           
                        </Card.Header>
                        <Card.Body >
                            <Table className='  text-center'>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Skill</th>
                                        <th>Call</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ananda</td>
                                        <td>Ananda44</td>
                                        <td>anandasaha484@gmail.com</td>
                                        <td>Male</td>
                                        <td>MERN Stack</td>
                                        <td>01913918163</td>
                                        <td><img style={{width:"35px", height:"35px"}} src="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm1.jpg" alt="" /></td>
                                        <td>
                                            <Link to={"/profile"}  className='btn btn-sm btn-outline-info' title='Show'><i className='bx bx-show'></i></Link>
                                            <button className='btn btn-sm btn-success'  title='UnFreez Acount'><i className='bx bx-lock-open-alt'></i></button>
                                            <button className='btn btn-sm btn-outline-light'  title='Freez Acount'><i className='bx bx-lock-alt'></i></button>
                                            <Link to={"/editDevs"}  className='btn btn-sm btn-outline-warning' title='Edit'><i class='bx bx-edit-alt' ></i></Link>
                                            <button className='btn btn-sm btn-outline-danger' title='Delete'><i class='bx bx-trash'></i></button>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Admin