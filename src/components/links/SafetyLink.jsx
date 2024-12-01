import { Link } from "react-router-dom";

function SafetyLink() {
    return (
        <>
            <ul>
                <li className="nav-link-header">
                    <Link to="/access">
                        <img 
                            src="https://fastly.picsum.photos/id/532/700/471.jpg?hmac=i9tZe8H4QaInaFMA7IyyXvGFOkz5cZSZ66QZ_WFHQ_M" 
                            alt="Placeholder"
                            height="200"
                            width="300"
                        />
                    </Link>
                    <Link className="nav-item-header" to="/safety">SAFETY ›</Link>
                </li>
                <li className="nav-link"><Link className="nav-item" to="/safety#crew">Expert Crews ›</Link></li>
                <li className="nav-link"><Link className="nav-item" to="/safety#culture">Safety Culture ›</Link></li>
                <li className="nav-link"><Link className="nav-item" to="/safety#security">Personal Security ›</Link></li>
                <li className="nav-link"><Link className="nav-item" to="/safety#maintenance">Fleet Maintenance ›</Link></li>
            </ul>
        </>
    )
}

export default SafetyLink;