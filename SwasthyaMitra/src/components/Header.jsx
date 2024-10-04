import { MdOutlineCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const Header = () => {
    return <ul className="nav nav-underline Header">
        <li className="nav-item">
            <div className="nav-link">व्यायामात् लभते स्वास्थ्यं दीर्घायुष्यं बलं सुखं। आरोग्यं परमं भाग्यं स्वास्थ्यं सर्वार्थसाधनम्॥</div>
        </li>
        <li className="nav-item">
            <div className="nav-link" >
                <MdOutlineCall size={22} />
                +91-5198461698
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
                <CiMail size={22} />
                swasthyaMitra2024@gmail.com
            </a>
        </li>

    </ul>
}

export default Header;