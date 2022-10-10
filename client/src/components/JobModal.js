import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

function Job() {
    const [formState, setFormState] = useState({ 
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
    const { name, password } = formState;
    
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formState);
    }

    return (
        <div id="job-form" class="job-form">
            <div class="job-box">
                <h3>Add a new job!</h3>
                <form class="" onSubmit={handleSubmit}>
                    <div>
                        <label for="dateApplied">Date applied:</label>
                        <input type="date" defaultValue={formState.dateApplied} onChange={handleChange} name="dateApplied" />
                    </div>
                    <div>
                        <label for="datePosted">Date: posted:</label>
                        <input type="date" defaultValue={formState.datePosted} onChange={handleChange} name="datePosted" />
                    </div>
                    <div>
                        <label for="title">Title:</label>
                        <input type="text" defaultValue={formState.title} onChange={handleChange} name="title" />
                    </div>
                    <div>
                        <label for="company">Company:</label>
                        <input type="text" defaultValue={formState.company} onChange={handleChange} name="company" />
                    </div>
                    <div>
                        <label for="link">Link:</label>
                        <input type="text" defaultValue={formState.link} onChange={handleChange} name="link" />
                    </div>
                    <div>
                        <label for="location">Password:</label>
                        <input type="text" defaultValue={formState.location} onChange={handleChange} name="location" />
                    </div>
                    <div>
                        <label for="officeSetting">Office setting:</label>
                        <input type="text" defaultValue={formState.officeSetting} onChange={handleChange} name="officeSetting" />
                    </div>
                    <div>
                        <input type="radio" id="inPerson" name="officeSet" value="In person" />
                        <label for="inPerson">In person</label>
                        <input type="radio" id="remote" name="officeSet" value="Remote" />
                        <label for="remote">Remote</label>
                        <input type="radio" id="hybrid" name="officeSet" value="Hybrid" />
                        <label for="hybrid">Hybrid</label>
                    </div>
                    <div>
                        <label for="source">Source:</label>
                        <input type="text" defaultValue={formState.source} onChange={handleChange} name="source" />
                    </div>
                    <div>
                        <label for="requirements">Requirements:</label>
                        <input type="text" defaultValue={formState.requirements} onChange={handleChange} name="requirements" />
                    </div>
                    <div>
                        <label for="benefits">Benefits:</label>
                        <input type="text" defaultValue={formState.benefits} onChange={handleChange} name="benefits" />
                    </div>
                    <div>
                        <label for="pay">Pay:</label>
                        <input type="text" defaultValue={formState.pay} onChange={handleChange} name="pay" />
                    </div>
                    <div>
                        <label for="applicationStatus">Application status:</label>
                        <input type="text" defaultValue={formState.applicationStatus} onChange={handleChange} name="applicationStatus" />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Job;