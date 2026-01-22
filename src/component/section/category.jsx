import { Link } from "react-router-dom";

const subTitle = "Categorías Populares";
const title = "Explora Eventos Por Categoría";
const btnText = "Ver Todas las Categorías";


const categoryList = [
    {
        imgUrl: 'assets/images/category/icon/01.jpg',
        imgAlt: 'Conciertos y Música',
        title: 'Conciertos',
        count: '45 Eventos',
    },
    {
        imgUrl: 'assets/images/category/icon/02.jpg',
        imgAlt: 'Conferencias',
        title: 'Conferencias',
        count: '28 Eventos',
    },
    {
        imgUrl: 'assets/images/category/icon/03.jpg',
        imgAlt: 'Deportes',
        title: 'Deportes',
        count: '32 Eventos',
    },
    {
        imgUrl: 'assets/images/category/icon/04.jpg',
        imgAlt: 'Festivales',
        title: 'Festivales',
        count: '18 Eventos',
    },
    {
        imgUrl: 'assets/images/category/icon/05.jpg',
        imgAlt: 'Teatro y Arte',
        title: 'Teatro y Arte',
        count: '22 Eventos',
    },
    {
        imgUrl: 'assets/images/category/icon/06.jpg',
        imgAlt: 'Talleres',
        title: 'Talleres',
        count: '15 Eventos',
    },
]


const Category = () => {
    return (
        <div className="category-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-2 justify-content-center row-cols-xl-6 row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {categoryList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="category-item text-center">
                                    <div className="category-inner">
                                        <div className="category-thumb">
                                            <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                                        </div>
                                        <div className="category-content">
                                            <Link to="/course"><h6>{val.title}</h6></Link>
                                            <span>{val.count}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/course" className="lab-btn"><span>{btnText}</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Category;