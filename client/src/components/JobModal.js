import React, { useState } from 'react';
import { Modal, Form, Button, Stack, Row, Col, Alert, Container } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_JOB } from '../utils/mutations';

function JobContainer() {
    const [jobFormData, setJobFormData] = useState({ 
        dateApplied: '', 
        datePosted: '', 
        title: '' ,
        company: '',
        link: '',
        location: '',
        officeSetting: '',
        source: '',
        requirements: '',
        applicationStatus: '',
        benefits: '',
        pay: ''
    });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    // const [addJob] = useMutation(ADD_JOB);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function handleInputChange(e) {
        const { name, value } = e.target;
        setJobFormData({...jobFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
    //     try {
    //       const { data } = await addJob({
    //         variables: {...jobFormData}
    //       });
    //     } catch (e) {
    //       console.error(e);
    //       setShowAlert(true);
    //     }
    
        setJobFormData({
            dateApplied: '', 
            datePosted: '', 
            title: '' ,
            company: '',
            link: '',
            location: '',
            officeSetting: '',
            source: '',
            requirements: '',
            applicationStatus: '',
            benefits: '',
            pay: ''
        });
    };
// noValidate validated={validated}
    return (
        <>
        {/* demo button for modal */}
        <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton><h1>Add a new job</h1></Modal.Header>
            <Modal.Body>
                    <Form onSubmit={handleFormSubmit} className=''>
                        {/* <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Something went wrong with your login credentials!
                        </Alert> */}
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='dateApplied'>Date Applied</Form.Label>
                            <Form.Control className='col' type='date' 
                            placeholder='date applied' 
                            name='dateApplied' 
                            onChange={handleInputChange}
                            value={jobFormData.dateApplied} />
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='datePosted'>Date Posted</Form.Label>
                            <Form.Control className='col' type='date' 
                            placeholder='date posted' 
                            name='datePosted' 
                            onChange={handleInputChange}
                            value={jobFormData.datePosted} />
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='title'>Title</Form.Label>
                            <Form.Control className='col' type='text' 
                            placeholder='job title' 
                            name='title' 
                            onChange={handleInputChange}
                            value={jobFormData.title} />
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='company'>Company</Form.Label>
                            <Form.Control className='col' type='text' 
                            placeholder='company name' 
                            name='company' 
                            onChange={handleInputChange}
                            value={jobFormData.company} />
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='link'>Link</Form.Label>
                            <Form.Control className='col' type='text' 
                            placeholder='link to job posting' 
                            name='link' 
                            onChange={handleInputChange}
                            value={jobFormData.link} />
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='location'>Location</Form.Label>
                            <Form.Control className='col' type='text' 
                            placeholder='location' 
                            name='location' 
                            onChange={handleInputChange}
                            value={jobFormData.location} />
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='officeSetting'>Office Setting</Form.Label>
                            <Col>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="in person"
                                    name="officeSetting"
                                    value={jobFormData.officeSetting} 
                                />
                                <Form.Check
                                    type="radio"
                                    label="hybrid"
                                    name="officeSetting"
                                    value={jobFormData.officeSetting} 
                                />
                                <Form.Check
                                    type="radio"
                                    label="remote"
                                    name="officeSetting"
                                    value={jobFormData.officeSetting} 
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='source'>Source</Form.Label>
                            <Form.Control className='col' type='text' 
                            placeholder='ex. linkedIn, indeed' 
                            name='source' 
                            onChange={handleInputChange}
                            value={jobFormData.source} />
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='benefits'>Benefits</Form.Label>
                            <Form.Control className='col' type='text' 
                            placeholder='ex. healthcare, pto' 
                            name='benefits' 
                            onChange={handleInputChange}
                            value={jobFormData.benefits} />
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='requirements'>Requirements</Form.Label>
                            <Form.Control className='col' type='text' 
                            placeholder='ex. certificates, degree' 
                            name='requirements' 
                            onChange={handleInputChange}
                            value={jobFormData.requirements} />
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='pay'>Pay</Form.Label>
                            <Form.Control className='col' type='text' 
                            placeholder='ex. 90,000' 
                            name='pay' 
                            onChange={handleInputChange}
                            value={jobFormData.pay} />
                        </Form.Group>
                        <Form.Group className='row mt-2'>
                            <Form.Label className='col' htmlFor='applicationStatus'>Application Status</Form.Label>
                            <Form.Control className='col'
                            type='text' 
                            placeholder='ex. applied, waiting to hear' 
                            name='applicationStatus' 
                            onChange={handleInputChange}
                            value={jobFormData.applicationStatus} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit' variant='btn-lg'>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default JobContainer;