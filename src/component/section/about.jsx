const subTitle = "Sobre Nosotros";
const title = "Creamos Experiencias Memorables Para Ti";
const desc = "Somos la plataforma líder en organización y promoción de eventos en Perú. Conectamos a miles de personas con experiencias únicas, desde conciertos y festivales hasta conferencias y talleres especializados.";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'Organizadores Profesionales',
        title: 'Organizadores Profesionales',
        desc: 'Trabajamos con los mejores organizadores del país para garantizar eventos de alta calidad y experiencias inolvidables',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'Variedad de Eventos',
        title: 'Variedad de Eventos',
        desc: 'Desde conciertos y festivales hasta conferencias y talleres. Encuentra el evento perfecto para ti',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'Fácil Acceso',
        title: 'Acceso Inmediato',
        desc: 'Registro sencillo y acceso instantáneo a toda la información de eventos. Todo en un solo lugar',
    },
]


const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
                    <div className="col">
                        <div className="about-right padding-tb">
                            <div className="section-header">
                                <span className="subtitle">{subTitle}</span>
                                <h2 className="title">{title}</h2>
                                <p>{desc}</p>
                            </div>
                            <div className="section-wrapper">
                                <ul className="lab-ul">
                                    {aboutList.map((val, i) => (
                                        <li key={i}>
                                            <div className="sr-left">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="sr-right">
                                                <h5>{val.title}</h5>
                                                <p>{val.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="about-left">
                            <div className="about-thumb">
                                <img src="assets/images/about/01.png" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;