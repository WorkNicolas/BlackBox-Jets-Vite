import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

const Footer = () => {
    return (
        <footer>
            <p>
                <a href="https://www.linkedin.com/in/worknicolas/" >
                    <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn Profile Link" />
                </a>
                <a href="https://twitter.com/qcnvmendoza/" >
                    <img src="https://skillicons.dev/icons?i=twitter" alt="Twitter Profile Link" />
                </a>
                <a href="https://github.com/WorkNicolas" >
                    <img src="https://skillicons.dev/icons?i=github" alt="GitHub Profile Link" />
                </a>
                <a href="mailto:carl.nicolas.v.mendoza@gmail.com" >
                    <img src="https://skillicons.dev/icons?i=gmail" alt="Mail to my GMail" />
                </a>
            </p>
            <p><FontAwesomeIcon icon={faPhone} /> tel: <a href="tel:+14377332225">437-733-2225</a> | <FontAwesomeIcon icon={faEnvelope} /> email: <a href="mailto:carl.nicolas.v.mendoza@gmail.com" >bbj@blackbox.jets.ca</a></p>
            <p>Copyright &copy; 2024 BlackBox Jets - Licensed under GPLv3.0</p>
        </footer>
    );
}

export default Footer;