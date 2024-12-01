import { Link } from "react-router-dom";

function AccessLink() {
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
                    <Link className="nav-item-header" to="/access">ACCESS ›</Link>
                </li>
                <li className="nav-link"><Link className="nav-item" to="/access#fleet">Fleet ›</Link></li>
                <li className="nav-link"><Link className="nav-item" to="/access#benefits">Benefits of Scale ›</Link></li>
                <li className="nav-link"><Link className="nav-item" to="/access#travel">International Travel ›</Link></li>
            </ul>
        </>
    )
}

export default AccessLink;