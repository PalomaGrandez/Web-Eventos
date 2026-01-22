import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { eventsData } from "../data/events";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

const CourseSingle = () => {
    const { id } = useParams();
    const event = eventsData[id] || eventsData[1];

    return (
        <Fragment>
            <Header />
            <PageHeader title={event.title} curPage={'Detalle del Evento'} />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-thumb mb-4">
                                            <img src={event.image} alt={event.title} />
                                        </div>
                                        <div className="course-content">
                                            <h3>Descripción del Evento</h3>
                                            <p>{event.overview}</p>
                                            <p>{event.description}</p>
                                            
                                            <h4>Qué Incluye Este Evento:</h4>
                                            <ul className="lab-ul">
                                                {event.learn.map((item, i) => (
                                                    <li key={i}><i className="icofont-tick-mark"></i>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-video">
                                    <div className="course-video-title">
                                        <h4>Programa del Evento</h4>
                                    </div>
                                    <div className="course-video-content">
                                        <div className="accordion" id="accordionExample">
                                            {event.schedule.map((section, idx) => (
                                                <div className="accordion-item" key={idx}>
                                                    <div className="accordion-header" id={`accordion${idx}`}>
                                                        <button 
                                                            className="d-flex flex-wrap justify-content-between" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target={`#schedule${idx}`}
                                                            aria-expanded={idx === 0 ? "true" : "false"}
                                                            aria-controls={`schedule${idx}`}
                                                        >
                                                            <span>{section.title}</span>
                                                            <span>{section.duration}</span>
                                                        </button>
                                                    </div>
                                                    <div 
                                                        id={`schedule${idx}`} 
                                                        className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                                                        aria-labelledby={`accordion${idx}`}
                                                        data-bs-parent="#accordionExample"
                                                    >
                                                        <ul className="lab-ul video-item-list">
                                                            {section.items.map((item, i) => (
                                                                <li key={i} className="d-flex flex-wrap justify-content-between">
                                                                    <div className="video-item-title">{item}</div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="course-item mt-4">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h4>Sobre el Organizador</h4>
                                            <div className="d-flex align-items-center mb-3">
                                                <img 
                                                    src={event.organizer.image} 
                                                    alt={event.organizer.name}
                                                    style={{width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px'}}
                                                />
                                                <div>
                                                    <h5 className="mb-1">{event.organizer.name}</h5>
                                                    <p className="mb-0">{event.organizer.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="sidebar-part">
                                <div className="course-side-detail">
                                    <div className="csd-title">
                                        <h4>Información del Evento</h4>
                                    </div>
                                    <ul className="lab-ul csd-list">
                                        <li>
                                            <div className="csdi-left"><i className="icofont-ticket"></i> Precio:</div>
                                            <div className="csdi-right">{event.price}</div>
                                        </li>
                                        <li>
                                            <div className="csdi-left"><i className="icofont-calendar"></i> Fecha:</div>
                                            <div className="csdi-right">{event.date}</div>
                                        </li>
                                        <li>
                                            <div className="csdi-left"><i className="icofont-clock-time"></i> Duración:</div>
                                            <div className="csdi-right">{event.duration}</div>
                                        </li>
                                        <li>
                                            <div className="csdi-left"><i className="icofont-location-pin"></i> Modalidad:</div>
                                            <div className="csdi-right">{event.location}</div>
                                        </li>
                                        <li>
                                            <div className="csdi-left"><i className="icofont-home"></i> Lugar:</div>
                                            <div className="csdi-right">{event.venue}</div>
                                        </li>
                                        <li>
                                            <div className="csdi-left"><i className="icofont-tag"></i> Categoría:</div>
                                            <div className="csdi-right">{event.category}</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default CourseSingle;