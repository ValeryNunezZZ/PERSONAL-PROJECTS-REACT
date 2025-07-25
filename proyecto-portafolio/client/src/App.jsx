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
import gitHubLogo from './img/gitHubLogo.png'


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
          
          <div className='slider'>
              <div className='list-images'>
                <div className='item' style={{"--position": "1"}}>
                  <img src={cssLogo}/>
                </div>
                
                <div className='item' style={{"--position": "2"}}>
                  <img src={reactLogo}/>
                </div>
                
                <div className='item' style={{"--position": "3"}}>
                  <img src={htmlLogo}/>
                </div>
                
                <div className='item' style={{"--position": "4"}}>
                  <img src={cLogo}/>
                </div>

                <div className='item' style={{"--position": "5"}}>
                  <img src={gitHubLogo}/>
                </div>

                <div className='item' style={{"--position": "6"}}>
                  <img src={cssLogo}/>
                </div>
                
                <div className='item' style={{"--position": "7"}}>
                  <img src={reactLogo}/>
                </div>
                
                <div className='item' style={{"--position": "8"}}>
                  <img src={htmlLogo}/>
                </div>
                
                <div className='item' style={{"--position": "9"}}>
                  <img src={cLogo}/>
                </div>

                <div className='item' style={{"--position": "10"}}>
                  <img src={gitHubLogo}/>
                </div>
              </div>

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
              <div className='container-technologies'>
                <div className='technologie-container'>
                  <img src={cssLogo}/>
                </div>
                <div className='technologie-container'>
                  <img src={htmlLogo}/>
                </div>
                <div className='technologie-container'>
                  <img src={jsLogo}/>
                </div>
              </div>
              <div className='container-buttons'>
                <button>Visit site</button>
                <button><span>Code</span><img src={gitHubLogo}/></button>
              </div>
            </div>
          </div>

          <div className='project-container'>
            <img src={proyectoIpTracker}/>
            <div className='info-container'>
              <h3>Super calculator</h3>

              <p>This projects was made with my own hands to the start to the end</p>
              <div className='container-technologies'>
                <div className='technologie-container'>
                  <img src={cssLogo}/>
                </div>
                <div className='technologie-container'>
                  <img src={htmlLogo}/>
                </div>
                <div className='technologie-container'>
                  <img src={jsLogo}/>
                </div>
              </div>
              <div className='container-buttons'>
                <button>Visit site</button>
                <button><span>Code</span><img src={gitHubLogo}/></button>
              </div>
            </div>
          </div>

          <div className='project-container'>
            <img src={proyectoCalculadora}/>
            <div className='info-container'>
              <h3>Super calculator</h3>

              <p>This projects was made with my own hands to the start to the end</p>
              <div className='container-technologies'>
                <div className='technologie-container'>
                  <img src={cssLogo}/>
                </div>
                <div className='technologie-container'>
                  <img src={htmlLogo}/>
                </div>
                <div className='technologie-container'>
                  <img src={jsLogo}/>
                </div>
              </div>
              <div className='container-buttons'>
                <button>Visit site</button>
                <button><span>Code</span><img src={gitHubLogo}/></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about-me-section'>
        <h2>About me</h2>
        <div className='about-me-container'>
            <div className='about-me-up'>
              <img className='yoSaludando' src={yoSaludando}/>
            </div>
            <div className='about-me-down'>
              <p>Hi I am appasionated studetn that loves code.  start doing some front end projects since 2023, and i have been improving with the years.</p>
              <p>I also love competitive programming, becuse is one of the most changelleges things that i have ever tried.</p>

              <p>I love drawing and design, but i made those things more because more like a hobby cause i have never had any kind of curse of that</p>
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
