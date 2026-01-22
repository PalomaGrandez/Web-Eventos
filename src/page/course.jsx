import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";



const courseList = [
    {
        imgUrl: 'assets/images/course/01.jpg',
        imgAlt: 'Concierto de Rock',
        price: 'S/50',
        cate: 'Conciertos',
        title: 'Festival de Rock Internacional 2026',
        totalLeson: '8 horas',
        schdule: 'Presencial',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'organizador evento',
        authorName: 'Live Music Productions',
        btnText: 'Ver Detalles',
    },
    {
        imgUrl: 'assets/images/course/02.jpg',
        imgAlt: 'Conferencia Tech',
        price: 'Gratis',
        cate: 'Conferencias',
        title: 'Conferencia de Tecnología e Innovación',
        totalLeson: '6 horas',
        schdule: 'Híbrido',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'organizador evento',
        authorName: 'TechHub Lima',
        btnText: 'Ver Detalles',
    },
    {
        imgUrl: 'assets/images/course/03.jpg',
        imgAlt: 'Festival Gastronómico',
        price: 'S/80',
        cate: 'Festivales',
        title: 'Festival Gastronómico Internacional',
        totalLeson: 'Todo el día',
        schdule: 'Presencial',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'organizador evento',
        authorName: 'Sabores del Mundo',
        btnText: 'Ver Detalles',
    },
    {
        imgUrl: 'assets/images/course/04.jpg',
        imgAlt: 'Maratón Deportiva',
        price: 'S/35',
        cate: 'Deportes',
        title: 'Maratón Lima 2026 - 10K y 21K',
        totalLeson: '4 horas',
        schdule: 'Presencial',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'organizador evento',
        authorName: 'Running Club Perú',
        btnText: 'Ver Detalles',
    },
    {
        imgUrl: 'assets/images/course/05.jpg',
        imgAlt: 'Obra de Teatro',
        price: 'S/65',
        cate: 'Teatro',
        title: 'Obra Musical: El Fantasma de la Ópera',
        totalLeson: '3 horas',
        schdule: 'Presencial',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'organizador evento',
        authorName: 'Teatro Nacional',
        btnText: 'Ver Detalles',
    },
    {
        imgUrl: 'assets/images/course/06.jpg',
        imgAlt: 'Taller de Fotografía',
        price: 'S/120',
        cate: 'Talleres',
        title: 'Taller Intensivo de Fotografía Profesional',
        totalLeson: '2 días',
        schdule: 'Presencial',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'organizador evento',
        authorName: 'Escuela de Artes',
        btnText: 'Ver Detalles',
    },
    {
        imgUrl: 'assets/images/course/07.jpg',
        imgAlt: 'Feria de Emprendimiento',
        price: 'Gratis',
        cate: 'Ferias',
        title: 'Feria de Emprendimiento y Negocios',
        totalLeson: '5 horas',
        schdule: 'Presencial',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'organizador evento',
        authorName: 'Cámara de Comercio',
        btnText: 'Ver Detalles',
    },
    {
        imgUrl: 'assets/images/course/08.jpg',
        imgAlt: 'Concierto Jazz',
        price: 'S/45',
        cate: 'Conciertos',
        title: 'Noche de Jazz en Vivo',
        totalLeson: '4 horas',
        schdule: 'Presencial',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'organizador evento',
        authorName: 'Jazz Club Lima',
        btnText: 'Ver Detalles',
    },
    {
        imgUrl: 'assets/images/course/09.jpg',
        imgAlt: 'Exposición de Arte',
        price: 'S/25',
        cate: 'Arte',
        title: 'Exposición de Arte Moderno',
        totalLeson: '3 horas',
        schdule: 'Presencial',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'organizador evento',
        authorName: 'Galería Nacional',
        btnText: 'Ver Detalles',
    },
]


const CoursePage = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Todos los Eventos'} curPage={'Eventos'} />
            <div className="course-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                            {courseList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="course-item">
                                        <div className="course-inner">
                                            <div className="course-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="course-content">
                                                <div className="course-price">{val.price}</div>
                                                <div className="course-category">
                                                    <div className="course-cate">
                                                        <a href="#">{val.cate}</a>
                                                    </div>
                                                </div>
                                                <Link to={`/course-single/${i + 1}`}><h4>{val.title}</h4></Link>
                                                <div className="course-details">
                                                    <div className="couse-count"><i className="icofont-clock-time"></i> {val.totalLeson}</div>
                                                    <div className="couse-topic"><i className="icofont-location-pin"></i> {val.schdule}</div>
                                                </div>
                                                <div className="course-footer">
                                                    <div className="course-author">
                                                        <img src={`${val.authorImgUrl}`} alt={`${val.authorImgAlt}`} />
                                                        <Link to="/team-single" className="ca-name">{val.authorName}</Link>
                                                    </div>
                                                    <div className="course-btn">
                                                        <Link to={`/course-single/${i + 1}`} className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default CoursePage;