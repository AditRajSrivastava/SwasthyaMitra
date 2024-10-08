import { FaUserNurse } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary custom-bg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: "#4285F4" }}><FaUserNurse size={25} color="#4285F4" /> SwasthyaMitra</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <button type="button" className="btn btn-outline-primary"><CgProfile size={20} />Profile</button>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
