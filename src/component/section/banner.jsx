const subTitle = "Descubre Experiencias Únicas";
const title = <h2 className="title"><span className="d-lg-block">Los Mejores</span> Eventos <span className="d-lg-block">Te Esperan</span></h2>;
const desc = "Encuentra conciertos, conferencias, festivales y más. Únete a miles de personas que ya viven experiencias inolvidables.";


const catagoryList = [
    {
        name: 'Conciertos',
        link: '#',
    },
    {
        name: 'Conferencias',
        link: '#',
    },
    {
        name: 'Festivales',
        link: '#',
    },
    {
        name: 'Deportes',
        link: '#',
    },
]


const shapeList = [
    {
        name: '50K+ Asistentes Felices',
        link: '#',
        className: 'ccl-shape shape-1',
    },
    {
        name: '500+ Eventos Realizados',
        link: '#',
        className: 'ccl-shape shape-2',
    },
    {
        name: '95% Satisfacción',
        link: '#',
        className: 'ccl-shape shape-3',
    },
    {
        name: '15+ Ciudades',
        link: '#',
        className: 'ccl-shape shape-4',
    },
    {
        name: 'Eventos Todo el Año',
        link: '#',
        className: 'ccl-shape shape-5',
    },
]

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-10">
                            <div className="banner-content">
                                <h6 className="subtitle text-uppercase fw-medium">{subTitle}</h6>
                                {title}
                                <p className="desc">{desc}</p>

                                <div className="banner-catagory d-flex flex-wrap">
                                    <p>Más Populares: </p>
                                    <ul className="lab-ul d-flex flex-wrap">
                                        {catagoryList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.name}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6">
                            <div className="banner-thumb">
                                <img src="assets/images/banner/01.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-shapes"></div>
            <div className="cbs-content-list d-none">
                <ul className="lab-ul">
                    {shapeList.map((val, i) => (
                        <li className={val.className} key={i}><a href={val.link}>{val.name}</a></li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
 
export default Banner;