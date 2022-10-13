import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { useState } from 'react';
import { UPDATE_JOB, REMOVE_JOB } from '../utils/mutations';

const JobDetail = (currentJob, onClose, isModalOpen, setJobs, jobs) => {
  const {data} = useQuery(GET_ME);
  // object destructuring for a query, not array destructuring!

  const [jobFormData, setJobFormData] = useState({
    dateApplied: '',
    datePosted: '',
    title: '',
    company: '',
    link: '',
    location: '',
    officeSetting: '',
    source: '',
    requirements: '',
    applicationStatus: '',
    benefits: '',
    pay: '',
  });

  const [updateJob] = useMutation(UPDATE_JOB);
  const [removeJob] = useMutation(REMOVE_JOB);

  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(isModalOpen);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleInputChange(e) {
    const { name, value } = e.target;

    setJobFormData({ ...jobFormData, [name]: value });
  }

  const handleSaveSubmit = async (e) => {
    e.preventDefault();

    const form = e.currenTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropogation();
    }

    try {
      await updateJob({
        variables: { jobData: { ...jobFormData } },
      });

      setJobs(jobs);
      handleClose();
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setJobFormData({
      dateApplied: '',
      datePosted: '',
      title: '',
      company: '',
      link: '',
      location: '',
      officeSetting: '',
      source: '',
      requirements: '',
      applicationStatus: '',
      benefits: '',
      pay: '',
    });
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
  };

  {
    /* Can insert progress bar as a sort of status indicator */
  }

  const {
    dateApplied,
    datePosted,
    title,
    company,
    link,
    location,
    officeSetting,
    pay,
    source,
    applicationStatus,
    requirements,
    benefits,
  } = currentJob;
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered
      scrollable
      onHide={handleClose}
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="detail-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Text id="detail-company-label" className="label">
                Company
              </InputGroup.Text>
              <Form.Control
                id="detail-company"
                aria-label="Company"
                value={company}
              />
            </InputGroup>
          </Col>
          <Col>
            <Dropdown id="application-status" title={applicationStatus}>
              <Dropdown.Item>Saved</Dropdown.Item>
              <Dropdown.Item>Applied</Dropdown.Item>
              <Dropdown.Item>Interview</Dropdown.Item>
              <Dropdown.Item>Hired</Dropdown.Item>
              <Dropdown.Item>Rejected</Dropdown.Item>
              <Dropdown.Item>Not interested</Dropdown.Item>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Text id="detail-date-app-label" className="label">
                Date Applied
              </InputGroup.Text>
              <Form.Control
                id="detail-date-app"
                aria-label="Date Applied"
                value={dateApplied}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Text id="detail-date-post-label" className="label">
                Date Posted
              </InputGroup.Text>
              <Form.Control
                id="detail-date-post"
                aria-label="Date Posted"
                value={datePosted}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Text id="detail-setting-label" className="label">
                Office Setting
              </InputGroup.Text>
              <Form.Control
                id="detail-setting"
                aria-label="Office Setting"
                value={officeSetting}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Text id="detail-location-label" className="label">
                Location
              </InputGroup.Text>
              <Form.Control
                id="detail-location"
                aria-label="location"
                value={location}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Text id="detail-pay-label" className="label">
                $
              </InputGroup.Text>
              <Form.Control id="detail-pay" aria-label="Pay" value={pay} />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Text id="detail-source-label" className="label">
                Source
              </InputGroup.Text>
              <Form.Control
                id="detail-source"
                aria-label="Source"
                value={source}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Text id="detail-link-label" className="label">
                Direct Link
              </InputGroup.Text>
              <Form.Control id="detail-link" aria-label="Link" value={link} />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Text id="requirements-label" className="label">
                Job Requirements
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                id="requirements"
                aria-label="Requirements"
                value={requirements}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Text id="benefits-label" className="label">
                Job benefits
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                id="benefits"
                aria-label="benefits"
                value={benefits}
              />
            </InputGroup>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <InputGroup>
              <InputGroup.Text id="notes-label" className="label">
                Notes
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                id="notes"
                aria-label="Personal Notes"
                value={data.notes.text}
              />
            </InputGroup>
          </Col>
        </Row> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => handleSaveSubmit()}>
          Save
        </Button>
        <Button variant="secondary">Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JobDetail;
