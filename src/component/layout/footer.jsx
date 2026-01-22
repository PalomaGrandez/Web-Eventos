import { Link } from "react-router-dom";

const siteTitle = "Mapa del Sitio";
const useTitle = "Enlaces Útiles";
const socialTitle = "Redes Sociales";
const supportTitle = "Soporte";


const siteList = [
    {
        text: 'Inicio',
        link: '/',
    },
    {
        text: 'Todos los Eventos',
        link: '/course',
    },
    {
        text: 'Noticias',
        link: '/blog',
    },
    {
        text: 'Organizadores',
        link: '/team',
    },
    {
        text: 'Contacto',
        link: '/contact',
    },
]

const useList = [
    {
        text: 'Acerca de Nosotros',
        link: '/about',
    },
    {
        text: 'Preguntas Frecuentes',
        link: '#',
    },
    {
        text: 'Términos y Condiciones',
        link: '#',
    },
    {
        text: 'Contáctanos',
        link: '/contact',
    },
    {
        text: 'Política de Privacidad',
        link: '#',
    },
]

const socialList = [
    {
        text: 'Facebook',
        link: '#',
        icon: 'icofont-facebook',
    },
    {
        text: 'Twitter',
        link: '#',
        icon: 'icofont-twitter',
    },
    {
        text: 'Instagram',
        link: '#',
        icon: 'icofont-instagram',
    },
    {
        text: 'LinkedIn',
        link: '#',
        icon: 'icofont-linkedin',
    },
    {
        text: 'YouTube',
        link: '#',
        icon: 'icofont-youtube',
    },
]

const supportList = [
    {
        text: 'Centro de Ayuda',
        link: '#',
    },
    {
        text: 'Cómo Registrarse',
        link: '/signup',
    },
    {
        text: 'Guía de Eventos',
        link: '#',
    },
    {
        text: 'Reportar un Problema',
        link: '#',
    },
    {
        text: 'Contactar Soporte',
        link: '/contact',
    },
]



const Footer = () => {
    return (
        <div className="news-footer-wrap">
            <div className="fs-shape">
                <img src="assets/images/shape-img/03.png" alt="fst" className="fst-1" />
                <img src="assets/images/shape-img/04.png" alt="fst" className="fst-2" />
            </div>
            
            <footer>
                <div className="footer-top padding-tb">
                    <div className="container">
                        <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{siteTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {siteList.map((val, i) => (
                                                        <li key={i}><Link to={val.link}>{val.text}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{useTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {useList.map((val, i) => (
                                                        <li key={i}><Link to={val.link}>{val.text}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{socialTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {socialList.map((val, i) => (
                                                        <li key={i}>
                                                            <a href={val.link}>
                                                                <i className={val.icon}></i> {val.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{supportTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {supportList.map((val, i) => (
                                                        <li key={i}><Link to={val.link}>{val.text}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-2">
                    <div className="container">
                        <div className="section-wrapper">
                            <p>&copy; 2026 <Link to="/">EventPro</Link> | Todos los derechos reservados | Lima, Perú </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
 
export default Footer;