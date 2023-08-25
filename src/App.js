import './App.css';
import About from './components/About';
import Announcement from './components/Announcement';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
// import EventCorousel from './components/EventCorousel';
import Numbers from './components/Numbers';
import EventPlanned from './components/EventPlanned';
import TaskForce from './components/Taskforce';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [announce, setAnnounce] = useState([]);
  const [timeLine, setTimeLine] = useState([]);
  const [gallery, setGallery] = useState([]);

    useEffect(() => {
      // announcement fetch
        axios.post('http://localhost/FitnessFirstFestival/src/components/cardDets.php')
          .then((response) => {
            setAnnounce(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
        axios.post('http://localhost/FitnessFirstFestival/src/components/timelineDets.php')
          .then((response) => {
            setTimeLine(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
        axios.post('http://localhost/FitnessFirstFestival/src/components/galleryDets.php')
          .then((response) => {
            setGallery(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <div className='relative'>
      <Banner timeLine={timeLine} />
      <About />
      <Numbers />
      <TaskForce />
      <Timeline timeLine={timeLine} />
      <EventPlanned />
      <Gallery gallery={gallery} />
      <Footer/>
      {/* <EventCorousel/> */}
      <Announcement announce={announce} />

    </div>

  );
}

export default App;
