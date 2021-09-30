
import testimonial1 from './../assets/testimonial-1.jpg';
import testimonial2 from './../assets/testimonial-2.jpg';
import testimonial3 from './../assets/testimonial-3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './Testimonials.scss'
import { Carousel } from 'react-responsive-carousel';

function Testimonials() {
  return (
    <div class="testimonial">
      <div class="container">
        <div class="testimonial-icon">
          <i class="fa fa-quote-left"></i>
        </div>
        <Carousel interval={5000} autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} class="testimonials-carousel">
          <div class="testimonial-item">
            <div class="testimonial-img">
              <img src={testimonial1} alt="Image" />
            </div>
            <div class="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
              </p>
              <h3>Customer Name</h3>
              <h4>Profession</h4>
            </div>
          </div>
          <div class="testimonial-item">
            <div class="testimonial-img">
              <img src={testimonial2} alt="Image" />
            </div>
            <div class="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
              </p>
              <h3>Customer Name</h3>
              <h4>Profession</h4>
            </div>
          </div>
          <div class="testimonial-item">
            <div class="testimonial-img">
              <img src={testimonial3} alt="Image" />
            </div>
            <div class="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
              </p>
              <h3>Customer Name</h3>
              <h4>Profession</h4>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;