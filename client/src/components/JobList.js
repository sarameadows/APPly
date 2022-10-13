import Card from 'react-bootstrap/Card';

const JobList = (jobs, toggleDetailModal) => {
  return (
    <div id="jobs-container d-flex justify-content-around">
      {jobs.map((job, _id) => {
        return (
          <Card
            className="job-card"
            key={_id}
            onClick={() => toggleDetailModal}
          >
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle>{job.company}</Card.Subtitle>
              <Card.Text>
                Location: {job.location}
                Source: {job.source}
              </Card.Text>
              <Card.Link href={job.link}>Direct Link</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default JobList;
