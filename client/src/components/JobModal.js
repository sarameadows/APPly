import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_JOB } from '../utils/mutations';

function JobModal() {
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
    const [addJob] = useMutation(ADD_JOB);
    
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormState({...jobFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        try {
          const { data } = await addJob({
            variables: {...jobFormData}
          });
        } catch (e) {
          console.error(e);
          setShowAlert(true);
        }
    
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

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your login credentials!
                </Alert>
                <Form.Group>
                    <Form.Label htmlFor='dateApplied'>Date Applied</Form.Label>
                    <Form.Control type='text' 
                    placeholder='date applied' 
                    name='dateApplied' 
                    onChange={handleInputChange}
                    value={userFormData.dateApplied} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='datePosted'>Date Posted</Form.Label>
                    <Form.Control type='text' 
                    placeholder='date posted' 
                    name='datePosted' 
                    onChange={handleInputChange}
                    value={userFormData.datePosted} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='title'>Title</Form.Label>
                    <Form.Control type='text' 
                    placeholder='job title' 
                    name='title' 
                    onChange={handleInputChange}
                    value={userFormData.title} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='company'>Company</Form.Label>
                    <Form.Control type='text' 
                    placeholder='company name' 
                    name='company' 
                    onChange={handleInputChange}
                    value={userFormData.company} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='link'>Link</Form.Label>
                    <Form.Control type='text' 
                    placeholder='link to job posting' 
                    name='link' 
                    onChange={handleInputChange}
                    value={userFormData.link} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='location'>Location</Form.Label>
                    <Form.Control type='text' 
                    placeholder='location' 
                    name='location' 
                    onChange={handleInputChange}
                    value={userFormData.location} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='officeSetting'>Office Setting</Form.Label>
                    <Form.Control type='text' 
                    placeholder='ex. in person, remote, hybrid' 
                    name='officeSetting' 
                    onChange={handleInputChange}
                    value={userFormData.officeSetting} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='source'>Source</Form.Label>
                    <Form.Control type='text' 
                    placeholder='ex. linkedIn, indeed' 
                    name='source' 
                    onChange={handleInputChange}
                    value={userFormData.source} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='benefits'>Benefits</Form.Label>
                    <Form.Control type='text' 
                    placeholder='ex. healthcare, pto' 
                    name='benefits' 
                    onChange={handleInputChange}
                    value={userFormData.benefits} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='requirements'>Requirements</Form.Label>
                    <Form.Control type='text' 
                    placeholder='ex. certificates, degree' 
                    name='requirements' 
                    onChange={handleInputChange}
                    value={userFormData.requirements} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='pay'>Pay</Form.Label>
                    <Form.Control type='text' 
                    placeholder='ex. 90,000' 
                    name='pay' 
                    onChange={handleInputChange}
                    value={userFormData.pay} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='applicationStatus'>Application Status</Form.Label>
                    <Form.Control type='text' 
                    placeholder='application status' 
                    name='applicationStatus' 
                    onChange={handleInputChange}
                    value={userFormData.applicationStatus} />
                </Form.Group>
                <Button type='submit' variant='success'>Submit</Button>
            </Form>
        </>
        // <div id="job-form" class="job-form">
        //     <div class="job-box">
        //         <h3>Add a new job!</h3>
        //         <form class="" onSubmit={handleSubmit}>
        //             <div>
        //                 <label for="dateApplied">Date applied:</label>
        //                 <input type="date" defaultValue={formState.dateApplied} onChange={handleChange} name="dateApplied" />
        //             </div>
        //             <div>
        //                 <label for="datePosted">Date: posted:</label>
        //                 <input type="date" defaultValue={formState.datePosted} onChange={handleChange} name="datePosted" />
        //             </div>
        //             <div>
        //                 <label for="title">Title:</label>
        //                 <input type="text" defaultValue={formState.title} onChange={handleChange} name="title" />
        //             </div>
        //             <div>
        //                 <label for="company">Company:</label>
        //                 <input type="text" defaultValue={formState.company} onChange={handleChange} name="company" />
        //             </div>
        //             <div>
        //                 <label for="link">Link:</label>
        //                 <input type="text" defaultValue={formState.link} onChange={handleChange} name="link" />
        //             </div>
        //             <div>
        //                 <label for="location">Location:</label>
        //                 <input type="text" defaultValue={formState.location} onChange={handleChange} name="location" />
        //             </div>
        //             <div>
        //                 <label for="officeSetting">Office setting:</label>
        //                 <input type="text" defaultValue={formState.officeSetting} onChange={handleChange} name="officeSetting" />
        //             </div>
        //             <div>
        //                 <input type="radio" id="inPerson" name="officeSet" value="In person" />
        //                 <label for="inPerson">In person</label>
        //                 <input type="radio" id="remote" name="officeSet" value="Remote" />
        //                 <label for="remote">Remote</label>
        //                 <input type="radio" id="hybrid" name="officeSet" value="Hybrid" />
        //                 <label for="hybrid">Hybrid</label>
        //             </div>
        //             <div>
        //                 <label for="source">Source:</label>
        //                 <input type="text" defaultValue={formState.source} onChange={handleChange} name="source" />
        //             </div>
        //             <div>
        //                 <label for="requirements">Requirements:</label>
        //                 <input type="text" defaultValue={formState.requirements} onChange={handleChange} name="requirements" />
        //             </div>
        //             <div>
        //                 <label for="benefits">Benefits:</label>
        //                 <input type="text" defaultValue={formState.benefits} onChange={handleChange} name="benefits" />
        //             </div>
        //             <div>
        //                 <label for="pay">Pay:</label>
        //                 <input type="text" defaultValue={formState.pay} onChange={handleChange} name="pay" />
        //             </div>
        //             <div>
        //                 <label for="applicationStatus">Application status:</label>
        //                 <input type="text" defaultValue={formState.applicationStatus} onChange={handleChange} name="applicationStatus" />
        //             </div>
        //             <button type='submit' onClick={handleFormSubmit}>Submit</button>
        //         </form>
        //     </div>
        // </div>
    )
}


export default JobModal;