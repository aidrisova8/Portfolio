import React from 'react'

const Projects = () => {
    return (
        <div>
          <h1 className='name'>Projects</h1>
          <div className='project-wrapper'>
          <div className='cont'> 
          <div className='project-circle'>
          <iframe
          title='Project Game'
          src='https://aidrisova8.github.io/ProjectGame/'
          width='100%'
          height='100%'
          frameBorder='0'
          allowFullScreen
        ></iframe>
          </div>
          <p>
          <a href='https://aidrisova8.github.io/ProjectGame/' target='_blank' rel=''>
            Zaruba Game
          </a>
        </p>
        </div>
        <div className='cont'>
        <div className='project-circle middle'>
        <img src="/img/codeTest.png" alt="" />
          </div>
          <p>
          <a href='https://github.com/aidrisova8/Cucumber-Selenium-RestAssured-JDBC' target='_blank' rel=''>
            Cucumber-Selenium-RestAssured-JDBC Framework
          </a>
        </p>
        </div>

        <div className='cont'> 
          <div className='project-circle'>
          <iframe
          title='Project Game'
          src='https://blog-frontend-hlip.onrender.com/'
          width='100%'
          height='100%'
          frameBorder='0'
          allowFullScreen
        ></iframe>
          </div>
          <p>
          <a href='https://blog-frontend-hlip.onrender.com/' target='_blank' rel=''>
            Cafe Website
          </a>
        </p>
        </div>
        </div>
        </div>
      );
    };

export default Projects