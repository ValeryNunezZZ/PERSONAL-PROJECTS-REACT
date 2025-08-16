import './App.css'
import Navbar from './Navbar';
import ContactForm from './ContactForm';

//images
import yoIntroFinal from './img/yoIntroFinal.GIF';
import yoSaludando from './img/yoSaludando.png'
import phone from './img/phoneT.png'

/* import proyectouno from './img/proyecto-uno.PNG' */
import proyectoPPT from './img/proyectoPPT.png'
import proyectoCalculadora from './img/proyectoCalculadora.png'
import proyectoIpTracker from './img/proyectoIpTracker.png'
import proyectoPaises from './img/proyectoPaises.png'

import cssLogo from './img/cssLogo.png'
import htmlLogo from './img/htmlLogo.png'
import jsLogo from './img/jsLogo.png'
import reactLogo from './img/reactLogo.png'
import cLogo from './img/cLogo.png'
import gitHubLogo from './img/gitHubLogo.png'
import igLogo from './img/igLogo.png'


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
              <span id='init'>Hello!</span><br></br>
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
            <p>
              I work with <strong>HTML, CSS, Bootstrap,</strong> and <strong>Tailwind CSS</strong> to create responsive and user-friendly interfaces,  
              while using <strong>JavaScript</strong> to bring them to life with dynamic interactions.  
              <br></br>
              <br></br>
              I also have strong programming foundations in <strong>C++</strong>, with a focus on algorithms and data structures.  
              <br></br>
              <br></br>
              As an active member of the <strong>Algorithm Club</strong> and a regular participant in <strong>competitive programming contests</strong>,  
              I’m constantly honing my problem-solving skills and striving to write clean, efficient, and elegant code.
            </p>
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
        <h2 id='projects' className='someProjects-h2'>Some projects</h2>

        <div className='projects-container'>
          <div className='project-container'>
            <img src={proyectoPPT}/>
            <div className='info-container'>
              <h3>RPS Arena</h3>

              <p>Challenge the computer in this responsive and stylish Rock, Paper, Scissors game, designed for smooth gameplay on any device.</p>
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
                <div className='technologie-container'>
                  <img src={reactLogo}/>
                </div>
              </div>
              <div className='container-buttons'>
                <button><a href='https://personal-projects-react-fg1o.vercel.app/'>Visit site</a></button>
                <button><a href='https://github.com/ValeryNunezZZ/PERSONAL-PROJECTS-REACT/tree/main/proyecto-rock-paper'><span>Code</span><img src={gitHubLogo}/></a></button>
              </div>
            </div>
          </div>

          <div className='project-container'>
            <img src={proyectoIpTracker}/>
            <div className='info-container'>
              <h3>IP Hunter</h3>

              <p>An interactive IP address tracker that pinpoints any IP on a dynamic map, complete with real-time location data and a responsive, user-friendly interface.</p>
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
                <div className='technologie-container'>
                  <img src={reactLogo}/>
                </div>
              </div>
              <div className='container-buttons'>
                <button><a href='https://personal-projects-react-8u13.vercel.app/'>Visit site</a></button>
                <button><a href='https://github.com/ValeryNunezZZ/PERSONAL-PROJECTS-REACT/tree/main/proyecto-ip-address-tracker'><span>Code</span><img src={gitHubLogo}/></a></button>
              </div>
            </div>
          </div>

          <div className='project-container'>
            <img src={proyectoCalculadora}/>
            <div className='info-container'>
              <h3>CalcX</h3>

              <p>A sleek, theme-switching calculator that adapts to any screen size and remembers your preferences while handling all the math you throw at it.</p>
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
                <div className='technologie-container'>
                  <img src={reactLogo}/>
                </div>
              </div>
              <div className='container-buttons'>
                <button><a href='https://personal-projects-react.vercel.app'>Visit site</a></button>
                <button><a href='https://github.com/ValeryNunezZZ/PERSONAL-PROJECTS-REACT/tree/main/proyecto-calculadora'><span>Code</span><img src={gitHubLogo}/></a></button>
              </div>
            </div>
          </div>

          <div className='project-container'>
            <img src={proyectoPaises}/>
            <div className='info-container'>
              <h3>WorldScope</h3>

              <p>A REST Countries API explorer with powerful search, region filters, detailed country pages, border navigation, and light/dark mode for global browsing comfort.</p>
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
                <div className='technologie-container'>
                  <img src={reactLogo}/>
                </div>
              </div>
              <div className='container-buttons'>
                <button><a href='https://web-d-react-avanzado.vercel.app/'>Visit site</a></button>
                <button><a href='https://github.com/ValeryNunezZZ/PERSONAL-PROJECTS-REACT/tree/main/proyecto-paises'><span>Code</span><img src={gitHubLogo}/></a></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='about-me-section'>
        <h2>About me</h2>
        <div className='about-me-container'>
            <div className='about-me-up'>
              <img className='yoSaludando' src={yoSaludando}/>
            </div>
            <div className='about-me-down'>
              <p>
                Hi, I’m Valery, a Systems Engineering student passionate about tackling challenges of all kinds — especially programming ones. About six months ago, I joined an Algorithm Club where I’ve been sharpening my competitive programming skills to compete with my team in the ICPC.</p>
              <p>
                I also love frontend development and enjoy taking on frontend challenges and recreating them. Lately, I’ve been exploring backend development too, which I find really interesting.
              </p>
              <p>
                Besides coding, I’m also passionate about digital drawing. Whenever I can, I love blending my art with the projects I work on — just like this web profile you’re viewing, where all the illustrations were created by me.
              </p>
            </div>
        </div>
      </section>

      <section id='contact' className='contact-section'>
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
          <p>
            I’m Valery, a Systems Engineering student who loves coding, especially competitive programming and web development. I also enjoy digital drawing and often combine my art with my projects.
          </p>
        </div>

        <div className='center-container-footer'>
          <span className='containerLinks'><span class="material-symbols-outlined">mail</span><a>valery.2012.nr@gmail.com</a></span>
          <span className='containerLinks'><span><img src={igLogo}></img></span><a href='https://www.instagram.com/valery.nunez.mx?igsh=MWdjejdvam90MjNjdQ%3D%3D&utm_source=qr'>Valery Nuñez</a></span>
          <span className='containerLinks'><span><img src={gitHubLogo}></img></span><a href='https://github.com/ValeryNunezZZ'>ValeryNunezZZ</a></span>
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
