import React from 'react';
import python2 from '../Image/python2.jpg';
import java1 from '../Image/java1.jpeg';
import it2 from '../Image/it2.png';

const Home = () => {
  return (
    <div className="HomeContainer">
      <main>
        <section className="HeaderText">
          <h1>Our Most Popular Courses</h1>
          <p>Knowledge is the essential key to growth</p>
        </section>

        <section className="CourseGrid">
          <div className="CourseItem">
            <img src={python2} alt="Python Full Stack Development" />
            <p>Python Full Stack Development</p>
            <button className="RegisterButton">Register Now</button>
          </div>
          <div className="CourseItem">
            <img src={java1} alt="Java Full Stack Development" />
            <p>Java Full Stack Development</p>
            <button className="RegisterButton">Register Now</button>
          </div>
          <div className="CourseItem">
            <img src={it2} alt="Communication Skills" width={350} height={200} />
            <p>We also teach communication</p>
            <button className="RegisterButton">Register Now</button>
          </div>
        </section>

        <section className="FooterText">
          <h1>Be in Demand with Our Professional Training</h1>
          <p>To push your career forward, you will need to pursue in-demand skills to expand your knowledge and capabilities and set yourself apart from other candidates.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
