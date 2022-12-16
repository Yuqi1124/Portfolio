import './App.css';
import * as React from 'react';
import Piece from "./Piece";
import PieceData from "./PieceData.json";

function App() {
  let backgroundImage = "/image/leone.jpg";
  return (
      <>
          <div style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat', position: 'fixed',
              width: '100vw',
              height: '100vh',
              zIndex: '-1'
          }}>
          </div>
          <nav className="navbar fixed-top navbar-expand-sm bg-light">
              <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarText">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#hello">
                                  <span className="text-dark">Hello</span>
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#aboutme">
                                  <span className="text-dark">About Me</span>
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#projects">
                                  <span className="text-dark">Projects</span>
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#contacts">
                                  <span className="text-dark">Contact</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <div className="row">
              <div className="col-md-8 ps-5">
                  <div className="large-top large-bottom" id="hello">
                      <div className="display-1 mb-5">Hi, I’m [Anonymous].</div>
                      <div className="fs-2 fw-light text-secondary">
                          <ul>
                              <li>Student</li>
                              <li>Beginner</li>
                              <li>Learner</li>
                          </ul>
                      </div>
                      <div className="fs-2 fw-light text-secondary pt-4">In the Web Development / UIUX field.</div>
                  </div>
                      <div id="aboutme" className="large-bottom pt-3">
                          <div className="fs-1 fw-light pt-4 pb-4">About Me</div>
                          <div className="fs-2 fw-light text-secondary">
                              I’m an international student at Brown University majoring in Computer Science. I’m a beginner in the field of UI/UX.
                          </div>
                          <br/>
                          <div className="fs-2 fw-light text-secondary">
                              I’m a curious person with a great passion for exploring different aspects of this field. Next, you can see my step-by-step exploration of the design field in the series of projects I worked on. They might not be perfect - both in terms of web-dev techniques and design - but I think I’m always making progress and learning a lot in the process.
                          </div>
                      </div>
                      <div id="projects">
                          <div className="fs-1 fw-light mt-3">I would like to share several projects I did with you!</div>
                          <div className="row pt-5 pb-5">
                              <div className="col-md-6"><Piece name={PieceData[0].name} text={PieceData[0].text} img={PieceData[0].img} link={PieceData[0].link}/></div>
                              <div className="col-md-6"><Piece name={PieceData[1].name} text={PieceData[1].text} img={PieceData[1].img} link={PieceData[1].link}/></div>
                          </div>
                          <div className="row pt-5 pb-5">
                              <div className="col-md-6"><Piece name={PieceData[2].name} text={PieceData[2].text} img={PieceData[2].img} link={PieceData[2].link}/></div>
                              <div className="col-md-6"><Piece name={PieceData[3].name} text={PieceData[3].text} img={PieceData[3].img} link={PieceData[3].link}/></div>
                          </div>
                      </div>

                      <div className="large-top pb-5 container fw-light fs-4" id="contacts">
                          <p><i className="fa-regular fa-copyright"></i> 2022 Anonymous</p>
                          <span><a href="https://www.google.com/">Linkedin</a> | <a href="https://www.google.com/">Email</a></span> (Not real links due to the anonymous requirement.)
                      </div>


              </div>
              <div className="col-md-4">
              </div>
          </div>
          {/*<div className="position-relative">*/}
          {/*    <div className="display-1 position-absolute top-50 start-50 translate-middle">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*    <div className="display-1">Context</div>*/}
          {/*</div>*/}
      </>
  );
}

export default App;
