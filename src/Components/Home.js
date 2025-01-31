import React from 'react';
import action from '../Image/action.png'
import career from '../Image/career.png'
import apk from '../Image/apk.webp'

function NewPage() {
  return (
    <section className="services">
      <div className="grid">
        <img src={action} alt="Actionable Training" className="service-img" />
        <header className='trainee'>Actionable Training</header>
        <p>Action Learning is a process of insightful questioning and reflective listening.</p>
        <button className="courses">View all Courses</button>
      </div>
      <div className="grid">
        <img src={career} alt="Interesting Quizzes" className="service-img" />
        <header className='trainee'>Interesting Quizzes</header>
        <p>Quizzes can make the session more interactive and more informative.</p>
        <button className="courses">View all Courses</button>
      </div>
      <div className="grid">
        <img src={apk} alt="Premium Material" className="service-img" />
        <header className='trainee'>Premium Material</header>
        <p>Good material can help you to revive your knowledge in less time.</p>
        <button className="courses">View all Courses</button>
      </div>
    </section>
  );
}

export default NewPage;
