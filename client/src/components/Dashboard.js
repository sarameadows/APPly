import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import JobModal from './JobModal';
import JobDetail from './JobDetail';
import Spinner from 'react-bootstrap/Spinner';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const Dashboard = () => {
  const { isJobEntryModalOpen, setJobEntryModalOpen } = useState(false);
  const { isJobDetailModalOpen, setJobDetailModalOpen } = useState(false);
  const { jobs, setJobs } = useState();

  const { loading, data } = useQuery(GET_ME);

  const [currentJob, setCurrentJob] = useState();

  const ToggleDetailModal = (job, i) => {
    setCurrentJob({ ...job, index: i });
    setJobDetailModalOpen(!isJobDetailModalOpen);
  };

  const ToggleEntryModal = () => {
    setJobEntryModalOpen(!isJobEntryModalOpen);
  };

  let locationArr = [];
  let officeSettingArr = [];
  let sourceArr = [];
  let applicationStatusArr = [];

  for (const savedJob of data.savedJobs) {
    locationArr.push(...savedJob.location);
    officeSettingArr.push(...savedJob.officeSetting);
    sourceArr.push(...savedJob.source);
    applicationStatusArr.push(...savedJob.applicationStatus);
  }

  const uniqueLocations = [...new Set(locationArr)];
  const filterLocations = [
    ...new Set(uniqueLocations.map((location) => location)),
  ];

  const uniqueOfficeSettings = [...new Set(officeSettingArr)];
  const filterOfficeSettings = [
    ...new Set(uniqueOfficeSettings.map((officeSetting) => officeSetting)),
  ];

  const uniqueSources = [...new Set(sourceArr)];
  const filterSources = [...new Set(uniqueSources.map((source) => source))];

  const uniqueApplicationStatuses = [...new Set(applicationStatusArr)];
  const filterApplicationStatuses = [
    ...new Set(
      uniqueApplicationStatuses.map((applicationStatus) => applicationStatus)
    ),
  ];

  const filterLocation = (selectedLocation) => {
    const newJob = data.savedJobs.filter((newVal) => {
      return newVal.location.includes(selectedLocation);
    });
    setJobs(newJob);
  };

  const filterOfficeSetting = (selectedOfficeSetting) => {
    const newJob = data.savedJobs.filter((newVal) => {
      return newVal.officeSetting.includes(selectedOfficeSetting);
    });
    setJobs(newJob);
  };

  const filterSource = (selectedSource) => {
    const newJob = data.savedJobs.filter((newVal) => {
      return newVal.source.includes(selectedSource);
    });
    setJobs(newJob);
  };

  const filterApplicationStatus = (selectedApplicationStatus) => {
    const newJob = data.savedJobs.filter((newVal) => {
      return newVal.applicationStatus.includes(selectedApplicationStatus);
    });
    setJobs(newJob);
  };

  useEffect(() => {
    if (loading) {
      return <Spinner animation="border" />;
    } else if (!loading) {
    }

    const Dashboard = () => {
      return (
        <div id="dashboard-container">
          <div>
            {isJobEntryModalOpen && <JobModal onClose={ToggleEntryModal} />}
          </div>
          <div>
            {isJobDetailModalOpen && (
              <JobDetail currentJob={currentJob} onClose={ToggleDetailModal} />
            )}
          </div>
          <div id="jobs-filter-bar">
            <DropdownButton
              className="filter-btn"
              id="location-filter"
              title="Location"
            >
              {filterLocations.map((location, id) => {
                return (
                  <Dropdown.Item
                    as="button"
                    className="dropdown-btn"
                    key={id}
                    onClick={() => filterLocation(location)}
                  >
                    {location}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <DropdownButton
              className="filter-btn"
              id="office-setting-filter"
              title="Office Setting"
            >
              {filterOfficeSettings.map((officeSetting, id) => {
                return (
                  <Dropdown.Item
                    as="button"
                    className="dropdown-btn"
                    key={id}
                    onClick={() => filterOfficeSetting(officeSetting)}
                  >
                    {officeSetting}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <DropdownButton
              className="filter-btn"
              id="source-filter"
              title="Posting Source"
            >
              {filterSources.map((source, id) => {
                return (
                  <Dropdown.Item
                    as="button"
                    className="dropdown-btn"
                    key={id}
                    onClick={() => filterSource(source)}
                  >
                    {source}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <DropdownButton
              className="dropdown-btn"
              id="application-status-filter"
              title="Application Status"
            >
              {filterApplicationStatuses.map((applicationStatus, id) => {
                return (
                  <Dropdown.Item
                    as="button"
                    className="dropdown-btn"
                    key={id}
                    onClick={() => filterApplicationStatus(applicationStatus)}
                  >
                    {applicationStatus}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <Button onClick={ToggleEntryModal}>Enter a new job</Button>
          </div>
          <div id="jobs-container">
            {data.savedJobs.map((savedJob, jobId) => {
              return (
                <Card className="job-card" onClick={() => ToggleDetailModal}>
                  <Card.Body>
                    <Card.Title>{savedJob.title}</Card.Title>
                    <Card.Subtitle>{savedJob.company}</Card.Subtitle>
                    <Card.Text>
                      Location: {savedJob.location}
                      Source: {savedJob.source}
                    </Card.Text>
                    <Card.Link href={savedJob.link}>Direct Link</Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      );
    };
  });
};

export default Dashboard;
