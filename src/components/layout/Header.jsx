// React
import { useState } from 'react';
import { Link } from 'react-router-dom';

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// Components
import SearchBar from '../forms/SearchBar';
import Navigation from './Navigation';
import Programs from './Programs';

function Header() {
    // Functional
    // Search
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
        console.log("Search Icon clicked!");
    };

    // Navigation
    const [showNav, setShowNav] = useState(false);

    const handleNavClick = () => {
        setShowNav(!showNav);
        console.log("Navigation clicked!");
    };

    // Programs
    const [showPrograms, setShowPrograms] = useState(false);

    const handleProgramsClick = () => {
        setShowPrograms(!showPrograms);
        console.log("Programs clicked!");
    };

    // Decoration
    const handleMouseOver = (e) => {
        e.target.style.cursor = 'pointer';
    };

    return (
        <>
            <header>
                <FontAwesomeIcon 
                    aria-label="Search"
                    icon={faMagnifyingGlass} 
                    onMouseOver={handleMouseOver}
                    onClick={handleSearchClick}
                />
                <span 
                    className="dropdown-trigger"
                    onMouseOver={handleMouseOver}
                    onClick={handleNavClick}
                >
                    ETHEREAL EXPERIENCE
                </span>
                <Link to="/" 
                    className="title"
                >
                    BLACKBOX JETS
                </Link>
                <span 
                    className="dropdown-trigger"
                    onMouseOver={handleMouseOver}
                    onClick={handleProgramsClick}
                >
                    OUR PROGRAMS & AIRCRAFT
                </span>
                <span 
                    className="dropdown-trigger-end"
                    onMouseOver={handleMouseOver}
                >
                    CA <FontAwesomeIcon icon={faAngleDown} />
                </span>
                <span 
                    className="dropdown-trigger-end"
                    onMouseOver={handleMouseOver}
                >
                    MORE <FontAwesomeIcon icon={faAngleDown} />
                </span>
            </header>
            {showSearch && <SearchBar />}
            {showNav && <Navigation />}
            {showPrograms && <Programs />}
        </>
    )
}

export default Header;