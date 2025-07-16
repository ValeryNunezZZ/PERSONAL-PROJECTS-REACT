import './App.css'

//images
import yoIntroFinal from './img/yoIntroFinal.GIF';
import yoSaludando from './img/yoSaludando.png'
import phone from './img/phoneT.png'

import proyectouno from './img/proyecto-uno.PNG'
import proyectodos from './img/proyecto-dos.PNG'

import cssLogo from './img/cssLogo.png'
import htmlLogo from './img/htmlLogo.png'
import jsLogo from './img/jsLogo.png'
import reactLogo from './img/reactLogo.png'


function App() {

  return (
    <>
      <section className='main-section'>
        <nav>
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
        </nav>

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
        <div className='about-me-container'>
          <div className='about-me-up'>
            <h2>About me</h2>
            <p>I am a appasionated human that love trnaform an idea in a reality with creativity, enthusiat and uniqunues.</p>
          </div>

          <div className='about-me-down'>
            <img className='yoSaludando' src={yoSaludando}/>
            <div className='blanck-container'></div>
            <div className='cv-container'></div>
          </div>
        </div>

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
              <img src={cssLogo}/>
            </div>
            <div className='skill-3'>
              <img src={cssLogo}/>
            </div>
            <div className='skill-4'>
              <img src={cssLogo}/>
            </div>
            <div className='skill-5'>
              <img src={cssLogo}/>
            </div>
          </div>
        </div>
      </section>

      <section className='projects-section'>
        <h2>Some projects</h2>

        <div className='project-container'>
          <img src={proyectouno}/>
          <div className='info-container'>
            <h3>Super calculator</h3>

            <p>This projects was made with my own hands to the start to the end</p>
          </div>
        </div>

        <div className='project-container'>
          <img src={proyectouno}/>
          <div className='info-container'>
            <h3>Super calculator</h3>

            <p>This projects was made with my own hands to the start to the end</p>
          </div>
        </div>

        <div className='project-container'>
          <img src={proyectouno}/>
          <div className='info-container'>
            <h3>Super calculator</h3>

            <p>This projects was made with my own hands to the start to the end</p>
          </div>
        </div>
      </section>

      <section className='contact-section'>
        <div className='image-container'>
          <img src={phone}/>
        </div>
        <form>
          <h3>Send me a message</h3>

          <div className='container-input'>
            <label>NAME</label>
            <input placeholder='Your name'></input>
          </div>

          <div className='container-input'>
            <label>EMAIL ADDRESS</label>
            <input placeholder='Your email'></input>
          </div>

          <div className='container-input'>
            <label>MESSAGE</label>
            <textarea placeholder='Your message...'></textarea>
          </div>

          <button type='submit'>SUBMIT</button>
        </form>
      </section>

      <footer>
        <div className='izq-container-footer'>
          <img src={yoSaludando}/>
          <div className='name-container'>
            Valery<br></br>Núñez
          </div>
        </div>

        <div className='der-container-footer'>

        </div>
      </footer>
    </>
  )
}

export default App
