import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import JobDetail from './JobDetail';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import { REMOVE_JOB } from '../utils/mutations';

const JobList = ({ jobs, onClick, setJobs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentJob, setCurrentJob] = useState();

  const toggleDetailModal = (job, i) => {
    setCurrentJob({ ...job, index: i });
    setIsModalOpen(!isModalOpen);
  };

  const [removeJob] = useMutation(REMOVE_JOB);

  const handleDelete = async (e, _id) => {
    try {
      await removeJob({
        variables: _id,
      });

      setJobs(jobs);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      id="jobs-container"
      className="d-flex justify-content-around flex-wrap card-deck h-75"
    >
      {isModalOpen && (
        <JobDetail
          currentJob={currentJob}
          onClose={toggleDetailModal}
          isModalOpen={isModalOpen}
          setJobs={setJobs}
          jobs={jobs}
        />
      )}
      {jobs.map((job, _id, i) => {
        return (
          <Card
            className="job-card mb-3 me-3 w-25 h-100 border-dark shadow"
            key={_id}
            onClick={() => toggleDetailModal(job, i)}
          >
            <Card.Body className="m-0">
              <Card.Title
                id="card-title"
                className="card-header border-primary rounded-top text-light bg-primary h-25"
              >
                {job.title}
              </Card.Title>
              <Card.Subtitle className="text-end mt-0 pe-3 pt-2 pb-2 text-light bg-dark border-dark border-start border-end border-bottom rounded-bottom">
                {job.company}
              </Card.Subtitle>
              <Card.Text className="position-absolute w-100 ps-2 top-50 lh-lg">
                <strong>Location: </strong>
                {job.location}
                <br />
                <strong>Source: </strong>
                {job.source}
                <br />
                <strong>Comp: </strong>
                {job.pay}
              </Card.Text>
              <Card.Link
                className="position-absolute bottom-0 mb-3 text-decoration-none text-primary fw-bold"
                href={job.link}
              >
                Direct Link
              </Card.Link>
              <Button
                variant="danger"
                className="btn position-absolute bottom-0 end-0 me-2 mb-2"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default JobList;
