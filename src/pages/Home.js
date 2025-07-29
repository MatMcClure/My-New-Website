import '../style.css';
import React, { useState } from 'react';
import github from '../images/github_img.png';
import linkedin from '../images/linkedin_img.png';
import foodmoodImage from '../images/foodmood_image.png';
import sparkingzeroImage from '../images/sparking-zero-image.png';
import fitnessappImage from '../images/fitness_image.png';

const Home = () => {
  const [activeProject, setActiveProject] = useState(null);

  const showProject = (projectName) => {
    setActiveProject(projectName);
  };

  return (
    <>
      <header className="nav-header">
        <div className="nav-left">
          <button className="nav-button" onClick={() => setActiveProject(null)}>Home</button>
          <div className="dropdown">
            <button className="nav-button">Projects</button>
            <div className="dropdown-content">
              <a href="#foodmood" onClick={() => showProject('foodmood')}>Food Mood</a>
              <a href="#sparkingzero" onClick={() => showProject('sparkingzero')}>Sparking Zero</a>
              <a href="#fitnessapp" onClick={() => showProject('fitnessapp')}>Fitness App</a>
              <a href="#foodrestapi" onClick={() => showProject('foodrestapi')}>Food Rest API</a>
            </div>
          </div>
        </div>

        <div className="nav-right">
          <a href="https://www.linkedin.com/in/matthew-mcclure-a3b2a1262/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn profile" height={40} width={40} className="linkedin-icon" />
          </a>
          <a href="https://github.com/MatMcClure" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub profile" height={30} width={30} className="github-icon" />
          </a>
        </div>
      </header>

      <main className="main-content">
      {activeProject === null && (
        <>
          <h1>Hello, my name is Matthew McClure</h1>
          <h3>and I am an aspiring Software Developer looking to begin my career</h3>
        </>
      )}

      {/*Food Mood*/}
      {activeProject === 'foodmood' && (
        <section id="foodmood" className="project-details">
          <h2>
            Food Mood{' '}
            <a href="https://github.com/MatMcClure/Food-Mood" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            |{' '}
            <a href="https://foodmoodpro.netlify.app/" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </h2>
          <p><strong>June 2025</strong></p>
          <ul>
            <li>Developed an interactive meal suggestion food application, integrating OpenAI GPT-3.5/GPT-4 to generate user selected food recommendations</li>
            <li>Integrated the Yelp API to fetch and display nearby restaurants, including name, address, and rating</li>
            <li>Utilized the Pexels API to give related food images based on the GPT-generated food recommendations</li>
            <li>Stylized components with CSS which include, hover animations, grid layouts, and mobile adapted display</li>
          </ul>
          <p><strong>Tech Used:</strong> ReactJS, JavaScript, HTML, CSS</p>
          <img src={foodmoodImage} alt="Food Mood Screenshot" className="project-image" />
        </section>
      )}

      {/*Sparking Zero*/}
      {activeProject === 'sparkingzero' && (
        <section id="sparkingzero" className="project-details">
          <h2>
            Sparking Zero{' '}
            <a href="https://github.com/MatMcClure/Sparking-Zero-Rolling-Hammer" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            |{' '}
            <a href="https://sparkingzerotg.netlify.app/" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </h2>
          <p><strong>June 2025</strong></p>
            <ul>
              <li>Developed a web application to showcase combo tutorials in Dragon Ball Sparking Zero to help both new and experienced players</li>
              <li>Designed a responsive UI using React, JavaScript, and CSS, ensuring a seamless user-friendly experience across both desktop and mobile devices</li>
              <li>Integrated videos and custom UI components to aid users in finding the right character for them</li>
              <li>Garnered 3,000 impressions through social media, indicating user interest and visits</li>
            </ul>
          <p><strong>Tech Used:</strong> ReactJS, JavaScript, HTML, CSS</p>
          <img src={sparkingzeroImage} alt="Sparking Zero Screenshot" className="project-image" />
        </section>
      )}

      {/*Fitness App*/}
      {activeProject === 'fitnessapp' && (
        <section id="fitnessapp" className="project-details">
          <h2>
            Fitness App{' '}
            <a href="https://github.com/MatMcClure/Fitness-App" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
          </h2>
          <p><strong>June 2025</strong></p>
            <ul>
              <li>An app which uses external APIs to search and return results for a certain exercise</li>
              <li>Implemented a search feature that allows utilizes the YouTube Search API for users to get multiple results for desired videos</li>
              <li>ExerciseDB API is used to display animations to demonstrate to users which exercise they are viewing</li>
            </ul>
          <p><strong>Tech Used:</strong> ReactJS, JavaScript, HTML, CSS</p>
          <img src={fitnessappImage} alt="Fitness App Screenshot" className="project-image" />
        </section>
      )}

      {/*Food REST API*/}
      {activeProject === 'sparkingzero' && (
        <section id="sparkingzero" className="project-details">
          <h2>
            Sparking Zero{' '}
            <a href="https://github.com/MatMcClure/Sparking-Zero-Rolling-Hammer" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            |{' '}
            <a href="https://sparkingzerotg.netlify.app/" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </h2>
          <p><strong>June 2025</strong></p>
            <ul>
              <li>Developed a REST API for managing breakfast bookings using ASP.NET Core and CRUD operations for entries</li>
              <li>Utilized the BuberBreakfast API so that users can create, get, update, and delete breakfast request and receive a response</li>
              <li>Integrated error handling and validation to improve API readability and user experience</li>
            </ul>
          <p><strong>Tech Used:</strong> ASP.NET Core, C#</p>
          <img src={''} alt="Sparking Zero Screenshot" className="project-image" />
        </section>
      )}
      </main>

    </>
  );
};

export default Home;
