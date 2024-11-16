import { Link } from "react-router-dom";

function ServiceLink() {
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
                    <Link className="nav-item-header" to="/service">SERVICE ›</Link>
                </li>
                <li className="nav-link"><Link className="nav-item" to="/service#engage">Engage Your Senses ›</Link></li>
                <li className="nav-link"><Link className="nav-item" to="/service#personal">A Personal Touch ›</Link></li>
                <li className="nav-link"><Link className="nav-item" to="/service#welcoming">Welcoming Loved Ones ›</Link></li>
            </ul>
        </>
    )
}

export default ServiceLink;