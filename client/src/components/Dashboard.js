import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import JobContainer from './JobModal';
import JobDetail from './JobDetail';
import JobList from './JobList';
// import Spinner from 'react-bootstrap/Spinner';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavBar from './Navbar';
import Auth from '../utils/auth';

const Dashboard = () => {
  const [isJobEntryModalOpen, setJobEntryModalOpen] = useState(false);
  const [isJobDetailModalOpen, setJobDetailModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState();

  const userData = Auth.getProfile();

  const { data, loading } = useQuery(GET_ME, {
    variables: { username: userData.data.username },
    onCompleted: ({ me }) => me,
    ssr: false,
  });
  console.log('LOADING', loading);
  console.log('DATA', data);

  const [jobs, setJobs] = useState(data.me.jobs);
  console.log('JOBS', jobs);

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

  // Filter creation start
  for (const job of jobs) {
    locationArr.push(job.location);
    officeSettingArr.push(job.officeSetting);
    sourceArr.push(job.source);
    applicationStatusArr.push(job.applicationStatus);
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
    const newJob = data.jobs.filter((newVal) => {
      return newVal.location.includes(selectedLocation);
    });
    setJobs(newJob);
  };

  const filterOfficeSetting = (selectedOfficeSetting) => {
    const newJob = data.jobs.filter((newVal) => {
      return newVal.officeSetting.includes(selectedOfficeSetting);
    });
    setJobs(newJob);
  };

  const filterSource = (selectedSource) => {
    const newJob = data.jobs.filter((newVal) => {
      return newVal.source.includes(selectedSource);
    });
    setJobs(newJob);
  };

  const filterApplicationStatus = (selectedApplicationStatus) => {
    const newJob = data.jobs.filter((newVal) => {
      return newVal.applicationStatus.includes(selectedApplicationStatus);
    });
    setJobs(newJob);
  };
  // Filter creation end

  // useEffect(() => {
  //   if (loading) {
  //     return <Spinner animation="border" />;
  //   } else if (!loading) {
  //     return data;
  //   }
  // }, [data, loading]);

  return (
    <Container fluid>
      <NavBar />
      <div id="dashboard-container" className="d-flex">
        <div>
          {isJobEntryModalOpen && <JobContainer props={isJobEntryModalOpen} onClose={ToggleEntryModal} />}
        </div>
        <div>
          {isJobDetailModalOpen && (
            <JobDetail currentJob={currentJob} onClose={ToggleDetailModal} />
          )}
        </div>
        <div id="jobs-filter-bar" className="ms-2 mt-3 me-5">
          <DropdownButton
            className="filter-btn mb-3"
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
            className="filter-btn mb-3"
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
            className="filter-btn mb-3"
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
            className="dropdown-btn mb-5"
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
        <div className="mt-3 d-flex justify-content-center align-items-start">
          <JobList jobs={jobs} toggleDetailModal={ToggleDetailModal} />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
