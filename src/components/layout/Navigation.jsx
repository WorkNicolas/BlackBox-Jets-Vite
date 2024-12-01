// React
import { Link } from "react-router-dom";

// JSX Components
import SafetyLink from "../links/SafetyLink.jsx";
import ServiceLink from "../links/ServiceLink.jsx";
import AccessLink from "../links/AccessLink.jsx";
import ExclusivesLink from "../links/ExclusivesLink.jsx";

function Navigation() {
    return (
        <nav>
            <ul>
                <li className="nav-link-header">
                    <Link className="nav-item-header milestone" to="/milestone">ELEVATE EVERY MILESTONE ›</Link>
                </li>
            </ul>
            <div className="nav-flex">
                <SafetyLink />
                <ServiceLink />
                <AccessLink />
                <ExclusivesLink />
            </div>
        </nav>
    )
}

export default Navigation;