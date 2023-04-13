import './App.css';
import Topbar from './Front-end/Components/Topbar/Topbar';
import Header from './Front-end/Components/Header/Header';
import ReactCarousel from './Front-end/Components/Carousel/Carousel.js'
import Navbar from './Front-end/Components/Navbar/Navbar'
import Cards from './Front-end/Components/FeatureCard/featureCard'
import Intro from './Front-end/Components/Introduction/Introduction'
import Fields from './Front-end/Components/topFields/topFields'
// import Reviews from './Front-end/Components/reviewCarousel/reviewCarousel'
import Jumbotron from './Front-end/Components/Jumbotron/Jumbotron';
import TopNews from './Front-end/Components/latestNews/latestNews';
import VideoSection from './Front-end/Components/videoSection/videoSection';
import PictureGallery from './Front-end/Components/pictureGallery/pictureGallery'
import Newsletter from './Front-end/Components/newsLetter/newsletter';
import Footer from './Front-end/Components/Footer/Footer';
import Scholarship from './Front-end/Components/Scholarships/Scholarship';
import Admissions from './Front-end/Components/Admissions/Admissions';
// import { Jumbotron } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <Topbar></Topbar> 
      <Header></Header>
      <div className="mainSection">
          <ReactCarousel></ReactCarousel> 
          <Navbar></Navbar>
      </div>
      <Cards></Cards>
      <Intro></Intro>
      <Fields></Fields>
      <Jumbotron></Jumbotron>
      {/* <Reviews></Reviews> */}
      <Scholarship></Scholarship>
      <Admissions></Admissions>
      <TopNews></TopNews>
      <VideoSection></VideoSection>
      <PictureGallery></PictureGallery>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}
export default App;
