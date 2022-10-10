import Modal from 'react-bootstrap/Modal';

const JobDetail = ({ currentJob }) => {
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
    <Modal size="lg" aria-labelledby="contained-modal-title-center" centered>
      <Modal.Header closeButton>
        <Modal.Title id="detail-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1 id="detail-company">{company}</h1>
      </Modal.Body>
    </Modal>
  );
};

export default JobDetail;
