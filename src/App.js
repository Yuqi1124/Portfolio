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
          <div className="row">
              <div className="col-md-8 d-flex justify-content-center">
                  <div className="large-top">
                      <div className="display-1 mb-5">Hi, I’m Yueqi Mao.</div>
                      <div className="fs-2 fw-light text-secondary">
                          <ul>
                              <li>Student</li>
                              <li>Beginner</li>
                              <li>Learner</li>
                          </ul>
                      </div>
                      <div className="fs-2 fw-light text-secondary pt-3">In the Web Development / UIUX field.</div>
                      <div className="larger-top">
                          <div className="fs-1 fw-light pt-4">I would like to share several projects I did with you!</div>
                          <div className="row pt-5 pb-5">
                              <div className="col-md-6"><Piece name={PieceData[0].name} text={PieceData[0].text} img={PieceData[0].img} link={PieceData[0].link}/></div>
                              <div className="col-md-6"><Piece name={PieceData[1].name} text={PieceData[1].text} img={PieceData[1].img} link={PieceData[1].link}/></div>
                          </div>
                          <div className="row pt-5 pb-5">
                              <div className="col-md-6"><Piece name={PieceData[2].name} text={PieceData[2].text} img={PieceData[2].img} link={PieceData[2].link}/></div>
                              <div className="col-md-6"><Piece name={PieceData[3].name} text={PieceData[3].text} img={PieceData[3].img} link={PieceData[3].link}/></div>
                          </div>
                      </div>

                      <div className="large-top pb-5 container fw-light fs-4">
                          <p><i className="fa-regular fa-copyright"></i> 2022 Yueqi Mao All Rights Reserve</p>
                          <span><a href="#">Linkedin</a> | <a href="#">Email</a></span>
                      </div>

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
