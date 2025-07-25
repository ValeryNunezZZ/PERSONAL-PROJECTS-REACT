import './App.css'
import Navbar from './Navbar';
import ContactForm from './ContactForm';

//images
import yoIntroFinal from './img/yoIntroFinal.GIF';
import yoSaludando from './img/yoSaludando.png'
import phone from './img/phoneT.png'

import proyectouno from './img/proyecto-uno.PNG'
/* import proyectodos from './img/proyecto-dos.PNG' */
import proyectoCalculadora from './img/proyectoCalculadora.png'
import proyectoIpTracker from './img/proyectoIpTracker.png'

import cssLogo from './img/cssLogo.png'
import htmlLogo from './img/htmlLogo.png'
import jsLogo from './img/jsLogo.png'
import reactLogo from './img/reactLogo.png'
import cLogo from './img/cLogo.png'


function App() {

  return (
    <>
      <section className='main-section'>
{/*         <nav>
          <div className='navIzq'>
          Valery Núñez
          </div>
          <div className='navDer'>
            <ul>
              <li><a>Init</a></li>
              <li><a>Projects</a></li>
              <li><a>About me</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </nav> */}

        <Navbar />

        <div className='container-presentation'>
          <div className='container-izq'>
            <img src={yoIntroFinal}/>
          </div>

          <div className='container-der'>
            <h1>
              <span>Hello!</span><br></br>
              I'm Valery<br></br>
              Núñez
            </h1>
            <span>Software Developer</span>
          </div>
        </div>
      </section>

      <section className='develope-section'>

        <div className='skills-container'>
          <div className='skills-up'>
            <h2>Skills</h2>
            <p>I am a appassionate human that love tranforms an idea in a reality with creativity, enthusiast and uniqunues.</p>
          </div>
          
          <div className='skills-down'>
            <div className='skill-1'>
              <img src={cssLogo}/>
            </div>
            <div className='skill-2'>
              <img src={htmlLogo}/>
            </div>
            <div className='skill-3'>
              <img src={jsLogo}/>
            </div>
            <div className='skill-4'>
              <img src={reactLogo}/>
            </div>
            <div className='skill-5'>
              <img src={cLogo}/>
            </div>
          </div>
        </div>

        <div className='about-me-container'>
          <div className='about-me-up'>
            <img className='yoSaludando' src={yoSaludando}/>
          </div>
          <div className='about-me-down'>
            <h2>About me</h2>{/* 
            <p>I am a appasionated human that love trnaform an idea in a reality with creativity, enthusiat and uniqunues.</p> */}
          </div>
        </div>
      </section>

      <section className='projects-section'>
        <h2 className='someProjects-h2'>Some projects</h2>

        <div className='projects-container'>
          <div className='project-container'>
            <img src={proyectouno}/>
            <div className='info-container'>
              <h3>Super calculator</h3>

              <p>This projects was made with my own hands to the start to the end</p>
              <br></br>
              <br></br>
              <button>Open link</button>
            </div>
          </div>

          <div className='project-container'>
            <img src={proyectoIpTracker}/>
            <div className='info-container'>
              <h3>Super calculator</h3>

              <p>This projects was made with my own hands to the start to the end</p>
              <br></br>
              <br></br>
              <button>Open link</button>
            </div>
          </div>

          <div className='project-container'>
            <img src={proyectoCalculadora}/>
            <div className='info-container'>
              <h3>Super calculator</h3>

              <p>This projects was made with my own hands to the start to the end</p>
              <br></br>
              <br></br>
              <button>Open link</button>
            </div>
          </div>
        </div>
      </section>

      <section className='contact-section'>
        <h2>Let's work together</h2>
        <div className='container-form'>
          <div className='image-container'>
            <div className='circle'>
              <img src={phone}/>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className='izq-container-footer'>

        </div>

        <div className='der-container-footer'>
          <div className='name-container'>
            Valery<br></br>Núñez
          </div>
          <div className='img-footer'>
            <img src={yoSaludando}/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
