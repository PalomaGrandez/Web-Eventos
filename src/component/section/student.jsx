import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";


const subTitle = "Más de 50,000 asistentes satisfechos";
const title = "Lo Que Dicen Nuestros Asistentes";


const studentList = [
    {
        imgUrl: 'assets/images/feedback/student/01.jpg',
        imgAlt: 'asistente a evento',
        name: 'Andrea Morales',
        degi: 'Asistió a 15 eventos',
        desc: 'Increíble plataforma para descubrir eventos. He asistido a conciertos, conferencias y festivales increíbles. La experiencia siempre es excelente y la organización impecable. ¡Totalmente recomendado!',
    },
    {
        imgUrl: 'assets/images/feedback/student/02.jpg',
        imgAlt: 'asistente a evento',
        name: 'Roberto Sánchez',
        degi: 'Asistió a 23 eventos',
        desc: 'La mejor manera de estar al tanto de los eventos en la ciudad. El proceso de registro es súper fácil y siempre encuentro eventos que me interesan. La calidad de los organizadores es excepcional.',
    },
]


const Student = () => {
    return (
        <div className="student-feedbak-section padding-tb shape-img">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                        <div className="col">
                            <div className="sf-left">
                                <div className="sfl-thumb">
                                    <img src="assets/images/feedback/01.jpg" alt="testimonios asistentes" />
                                    <a href="https://www.youtube.com/embed/MU3qrgR2Kkc" className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {studentList.map((val, i) => (
                                <div className="stu-feed-item" key={i}>
                                    <div className="stu-feed-inner">
                                        <div className="stu-feed-top">
                                            <div className="sft-left">
                                                <div className="sftl-thumb">
                                                    <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                                                </div>
                                                <div className="sftl-content">
                                                    <Link to="/team-single"><h6>{val.name}</h6></Link>
                                                    <span>{val.degi}</span>
                                                </div>
                                            </div>
                                            <div className="sft-right">
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="stu-feed-bottom">
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Student;