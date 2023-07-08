import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";


// const listOfNames = ["Adonis is the Best", "Garett is ok part-time", "Zokdo was once here" ]

// const personObject = {name: "Francis",
//                       age: 26,
//                     legalStatus: "Alien"}

// const listOfPeople = [{name: "Francis", age: 26, legalStatus: "Alien"}, {name: "Garett", age: 36, legalStatus: "Too legit"}, {name: "Adonis", age: 21, legalStatus: "Citizen"}]

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />

          </Col>
        </Row>
        {/* <div>{listOfNames[1]}</div>
        <div>{personObject.age}</div>
        <ul>{listOfPeople.map((whateever) => <li>{whateever.age}</li>)}</ul> */}

{dataportfolio.map((musicVideos) => {
    console.log(musicVideos.description);  // check the console for description value
    return musicVideos.youtubeId && (
        <div className="video-container">
            {musicVideos.description && 
                <h4 className="video-description">{musicVideos.description}</h4>
            }
            <iframe 
                src={`https://www.youtube.com/embed/${musicVideos.youtubeId}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                title="YouTube video player">
            </iframe>
        </div>
    )
})}


        
        {/* <div>
          {dataportfolio.map((musicVideos) => {
            return musicVideos.youtubeId && (
              <div className="">
                <iframe 
                  width="800" 
                  height="450" 
                  src={`https://www.youtube.com/embed/${musicVideos.youtubeId}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  title="YouTube video player">
                </iframe>
              </div>
            )
          })}
        </div> */}

       {/* <div className="mb-5 po_items_ho">
          {dataportfolio.map((portfolio, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="work-box">
                  <a href={portfolio.link} data-lightbox="gallery-vmarine">
                    <div className="work-img">
                      <img src={portfolio.img} alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">{portfolio.name}</h2>
                        <div className="w-more">
                          <span className="w-ctegory">{portfolio.description}</span> <span
                              className="w-date">{portfolio.year}</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href={portfolio.link}> <span className="ion-ios-plus-outline"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {portfolio.youtubeId && (
                    <div className="video-container">
                      <iframe 
                        width="560" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${portfolio.youtubeId}`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                        title="YouTube video player">
                      </iframe>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div> */}
      </Container>
    </HelmetProvider>
  );
};
