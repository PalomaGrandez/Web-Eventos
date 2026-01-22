import CountUp from 'react-countup';

const subTitle = "Nuestra Comunidad";
const title = "Eventos en Números";


const achievementList = [
    {
        count: '150',
        desc: 'Eventos Realizados',
    },
    {
        count: '8500',
        desc: 'Personas Han Asistido',
    },
    {
        count: '45',
        desc: 'Organizadores Activos',
    },
    {
        count: '12',
        desc: 'Ciudades con Eventos',
    },
]

const achieveList = [
    {
        imgUrl: 'assets/images/achive/01.png',
        imgAlt: 'organiza eventos',
        title: '¿Quieres Organizar Eventos?',
        desc: 'Si tienes experiencia organizando eventos y quieres llegar a más personas, únete a nuestra plataforma',
        btnText: 'Información para Organizadores',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/achive/02.png',
        imgAlt: 'registrate',
        title: 'Únete a la Comunidad',
        desc: 'Regístrate para recibir notificaciones sobre nuevos eventos y tener acceso a toda la información',
        btnText: 'Crear Cuenta Gratis',
        siteLink: '/signup',
    },
]


const Achievement = () => {
    return (
        <div className="achievement-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="counter-part mb-4">
                        <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
                            {achievementList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="count-item">
                                        <div className="count-inner">
                                            <div className="count-content">
                                                <h2><span className="count"><CountUp end={val.count} /></span><span>+</span></h2>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="achieve-part">
                        <div className="row g-4 row-cols-1 row-cols-lg-2">
                            {achieveList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="achieve-item">
                                        <div className="achieve-inner">
                                            <div className="achieve-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="achieve-content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
                                                <a href={val.siteLink} className="lab-btn"><span>{val.btnText}</span></a>
                                            </div>
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
 
export default Achievement;