import { Link } from "react-router-dom";

function ExclusivesLink() {
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
                    <Link className="nav-item-header" to="/exclusives">EXCLUSIVES ›</Link>
                </li>
                <li className="nav-link"><Link className="nav-item" to="/exclusives#events">Events ›</Link></li>
                <li className="nav-link"><Link className="nav-item" to="/exclusives#offers">Offers ›</Link></li>
                <li className="nav-link"><Link className="nav-item" to="/exclusives#car">Car & Security Services ›</Link></li>
            </ul>
        </>
    )
}

export default ExclusivesLink;