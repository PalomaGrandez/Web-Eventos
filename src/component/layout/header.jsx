import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const phoneNumber = "+51-123-4567";
const address = "Lima, Perú";

let socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
    },
]

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFiexd, setHeaderFiexd] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFiexd(true);
        } else {
            setHeaderFiexd(false);
        }
    });

    return (
        <header className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <ul className="lab-ul left">
                            <li><i className="icofont-ui-call"></i> <span>{phoneNumber}</span></li>
                            <li><i className="icofont-location-pin"></i> {address}</li>
                        </ul>
                        <ul className="lab-ul social-icons d-flex align-items-center">
                            <li><p>Síguenos en: </p></li>
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
    <Link to="/" style={{fontSize: '32px', fontWeight: 'bold', color: '#ff6b39'}}>Eventos</Link>
</div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li>
                                        <NavLink to="/">Inicio</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/course">Eventos</NavLink>
                                    </li>
                                </ul>
                            </div>
                            
                           

                            <div className={`header-bar d-lg-none ${menuToggle ? "active" : "" }`} onClick={() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;