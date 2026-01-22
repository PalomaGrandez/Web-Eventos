import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";


const subTitle = "Organizadores Destacados";
const title = "Conoce a Nuestros Mejores Organizadores";

const instructorList = [
    {
        imgUrl: 'assets/images/instructor/01.jpg',
        imgAlt: 'organizador de eventos',
        name: 'María Fernández',
        degi: 'Especialista en Eventos Corporativos',
        courseCount: '45 eventos',
        studentAnroll: '12K asistentes',
    },
    {
        imgUrl: 'assets/images/instructor/02.jpg',
        imgAlt: 'organizador de eventos',
        name: 'Carlos Mendoza',
        degi: 'Productor de Conciertos',
        courseCount: '32 eventos',
        studentAnroll: '25K asistentes',
    },
    {
        imgUrl: 'assets/images/instructor/03.jpg',
        imgAlt: 'organizador de eventos',
        name: 'Ana Gutiérrez',
        degi: 'Coordinadora de Festivales',
        courseCount: '28 eventos',
        studentAnroll: '18K asistentes',
    },
    {
        imgUrl: 'assets/images/instructor/04.jpg',
        imgAlt: 'organizador de eventos',
        name: 'Luis Torres',
        degi: 'Director de Conferencias',
        courseCount: '52 eventos',
        studentAnroll: '8K asistentes',
    },
]


const Instructor = () => {
    return (
        <div className="instructor-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {instructorList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="instructor-item">
                                    <div className="instructor-inner">
                                        <div className="instructor-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="instructor-content">
                                            <Link to="/team-single"><h4>{val.name}</h4></Link>
                                            <p>{val.degi}</p>
                                            <Rating />
                                        </div>
                                    </div>
                                    <div className="instructor-footer">
                                        <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                                            <li><i className="icofont-calendar"></i> {val.courseCount}</li>
                                            <li><i className="icofont-users-alt-3"></i> {val.studentAnroll}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center footer-btn">
                        <p>¿Quieres organizar eventos increíbles? <Link to="/team">Conviértete en organizador</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Instructor;