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
    e.preventDefault();

    try {
      await removeJob({
        variables: e.target.key,
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
            className="job-card mb-3 me-3 w-100"
            key={_id}
            onClick={() => toggleDetailModal(job, i)}
          >
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-3">
                Company: {job.company}
              </Card.Subtitle>
              <Card.Text className="mb-5">
                Location: {job.location}
                <br />
                Source: {job.source}
              </Card.Text>
              <Card.Link
                className="position-absolute bottom-0 mb-3"
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
