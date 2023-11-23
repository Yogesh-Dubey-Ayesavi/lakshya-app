import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

import classes from './Home.module.css'

const carouselSettings = {
  dots: true,
  autoplay: true,
  centerMode:true,
  speed: 12500,
  pauseOnHover: true,
  cssEase: "linear",
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
};


const Home = () => {
  return (
    <>
      <div className={classes.container}>
      <header>
        <h1>XploreMania</h1>
        <p>Unleashing Innovation and Fun!</p>
      </header>

      <section className={classes.about}>
        <h2>About XploreMania</h2>
        <p>
          XploreMania is a fusion of Lakshya (technical event), Uday (tech fest), and a variety of thrilling sports activities. This multi-day extravaganza, spanning late December, promises an unforgettable experience filled with learning, fun, and camaraderie.
        </p>
      </section>

      <section className={classes.highlights}>
        <h2>Key Highlights</h2>
        <ul>
          <li><strong>Date:</strong> Late December (Exact dates to be announced)</li>
          <li><strong>Duration:</strong> 3-5 Days</li>
          <li><strong>Venue:</strong> BIT, Raipur</li>
        </ul>
      </section>

      <section className={classes.carousel}>
        <h2>Events Carousel</h2>
        <Slider {...carouselSettings}>
          <div>
            <img src="https://fastly.picsum.photos/id/268/600/300.jpg?hmac=ptyJ5o5fM3xo9-rgSduIsNpkjp1lbCMiWWHsvx4CNe4" alt="Event 1" />
            <p className="legend">Event 1</p>
          </div>
          <div>
            <img src="https://fastly.picsum.photos/id/936/600/300.jpg?hmac=kTL6KpsjxCctTIVB1H8SUgMTwTsCJrYS1FReVNrmhQU" alt="Event 2" />
            <p className="legend">Event 2</p>
          </div>
          <div>
            <img src="https://fastly.picsum.photos/id/521/600/300.jpg?hmac=iVonvTr0NC-qxlxEj_y3VQHxdBFDcBEMBwtzjC3HWI0" alt="Event 3" />
            <p className="legend">Event 3</p>
          </div>
          <div>
            <img src="https://fastly.picsum.photos/id/1078/600/300.jpg?hmac=anS8qgzJR-KQXpJcEsPC_a1xF7yup1i3bTnak1pb1QE" alt="Event 4" />
            <p className="legend">Event 4</p>
          </div>
          <div>
            <img src="https://fastly.picsum.photos/id/656/600/300.jpg?hmac=C6GMlT-ldtptk408uzK6zUHhbKa_m6QFMQ5L83eXZX8" alt="Event 5" />
            <p className="legend">Event 5</p>
          </div>
          <div>
            <img src="https://fastly.picsum.photos/id/831/600/300.jpg?hmac=q2V8sdwLa73xw3xqvxX5AOsVH3KDBaTE3KYUVGgJG84" alt="Event 6" />
            <p className="legend">Event 6</p>
          </div>
          <div>
            <img src="https://fastly.picsum.photos/id/598/600/300.jpg?hmac=4_0qq3Gb6PFhJdrwZ12pvUjQpjC5g_n7fV5OPp1nIpE" alt="Event 7" />
            <p className="legend">Event 7</p>
          </div>
        </Slider>
        
      </section>

      <section className={classes.whyAttend}>
        <h2>Why Attend XploreMania?</h2>
        <ul>
          <li>Learn: Engage in insightful technical sessions and workshops.</li>
          <li>Innovate: Showcase your creativity in tech fest competitions.</li>
          <li>Compete: Participate in exciting sports challenges.</li>
          <li>Network: Connect with like-minded individuals and experts.</li>
          <li>Fun: Enjoy a blend of learning and entertainment.</li>
        </ul>
      </section>

      <section className={classes.involved}>
        <h2>Get Involved</h2>
        <p>Mark your calendar and get ready to be a part of XploreMania. Stay tuned for more details, event schedules, and registration information. Follow us on social media for the latest updates.</p>
        <p>Save the dates and let the countdown to XploreMania begin! 🎉</p>
      </section>
    </div>

    <Link to='/tickets'>Check your tix here</Link>
    </>
  );
};

export default Home;
