import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/sidebar/pagination";


const blogList = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'Noticia de evento',
        title: 'Nuevo Festival de Música Electrónica en Lima',
        desc: 'Se anuncia un nuevo festival de música electrónica para el próximo mes. Conoce los detalles sobre las fechas y artistas confirmados.',
        commentCount: '12',
        btnText: 'Leer Más',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Redacción',
            },
            {
                iconName: 'icofont-calendar',
                text: '15 Ene, 2026',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'Noticia de evento',
        title: 'Conferencia de Tecnología Confirmada para Marzo',
        desc: 'La esperada conferencia de tecnología e innovación ya tiene fecha. Empresas locales e internacionales participarán del evento.',
        commentCount: '8',
        btnText: 'Leer Más',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Redacción',
            },
            {
                iconName: 'icofont-calendar',
                text: '12 Ene, 2026',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'Noticia de evento',
        title: 'Feria Gastronómica Internacional en el Parque Central',
        desc: 'Llega una nueva edición de la feria gastronómica con comida de diferentes países. Entrada libre para toda la familia.',
        commentCount: '15',
        btnText: 'Leer Más',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Redacción',
            },
            {
                iconName: 'icofont-calendar',
                text: '10 Ene, 2026',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/04.jpg',
        imgAlt: 'Noticia de evento',
        title: 'Maratón Anual: Inscripciones Abiertas',
        desc: 'Ya están abiertas las inscripciones para la maratón anual de la ciudad. Categorías de 5K, 10K y 21K disponibles.',
        commentCount: '6',
        btnText: 'Leer Más',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Redacción',
            },
            {
                iconName: 'icofont-calendar',
                text: '08 Ene, 2026',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/05.jpg',
        imgAlt: 'Noticia de evento',
        title: 'Taller de Fotografía para Principiantes',
        desc: 'Se realizará un taller intensivo de fotografía este fin de semana. Cupos limitados, inscripciones en la página del evento.',
        commentCount: '4',
        btnText: 'Leer Más',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Redacción',
            },
            {
                iconName: 'icofont-calendar',
                text: '05 Ene, 2026',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/06.jpg',
        imgAlt: 'Noticia de evento',
        title: 'Concierto de Rock Nacional en el Estadio',
        desc: 'Bandas nacionales se presentarán en un concierto especial. Las entradas ya están disponibles en puntos de venta autorizados.',
        commentCount: '20',
        btnText: 'Leer Más',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Redacción',
            },
            {
                iconName: 'icofont-calendar',
                text: '03 Ene, 2026',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/07.jpg',
        imgAlt: 'Noticia de evento',
        title: 'Obra de Teatro Infantil en el Centro Cultural',
        desc: 'Una nueva obra de teatro para niños se presentará durante todo el mes. Perfecta para disfrutar en familia.',
        commentCount: '7',
        btnText: 'Leer Más',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Redacción',
            },
            {
                iconName: 'icofont-calendar',
                text: '01 Ene, 2026',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/08.jpg',
        imgAlt: 'Noticia de evento',
        title: 'Exposición de Arte Contemporáneo',
        desc: 'Artistas locales expondrán sus obras en la galería municipal. La entrada es gratuita durante toda la semana.',
        commentCount: '5',
        btnText: 'Leer Más',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Redacción',
            },
            {
                iconName: 'icofont-calendar',
                text: '28 Dic, 2025',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/09.jpg',
        imgAlt: 'Noticia de evento',
        title: 'Festival de Cine Independiente',
        desc: 'Se proyectarán películas de cineastas independientes durante tres días. Un evento imperdible para los amantes del cine.',
        commentCount: '9',
        btnText: 'Leer Más',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Redacción',
            },
            {
                iconName: 'icofont-calendar',
                text: '25 Dic, 2025',
            },
        ],
    },
]



const BlogPage = () => {
    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'Noticias y Novedades'} curPage={'Noticias'} />
            <div className="blog-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
                            {blogList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="post-item">
                                        <div className="post-inner">
                                            <div className="post-thumb">
                                                <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                            </div>
                                            <div className="post-content">
                                                <Link to="/blog-single"><h4>{val.title}</h4></Link>
                                                <div className="meta-post">
                                                    <ul className="lab-ul">
                                                        {val.metaList.map((val, i) => (
                                                            <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <p>{val.desc}</p>
                                            </div>
                                            <div className="post-footer">
                                                <div className="pf-left">
                                                    <Link to="/blog-single" className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                                </div>
                                                <div className="pf-right">
                                                    <i className="icofont-comment"></i>
                                                    <span className="comment-count">{val.commentCount}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default BlogPage;