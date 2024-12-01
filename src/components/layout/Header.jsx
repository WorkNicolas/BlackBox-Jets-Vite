import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../forms/SearchBar';
import Navigation from './Navigation';
import Programs from './Programs';
import RequestInformation from '../forms/RequestInformation';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleSearchClick = () => setShowSearch(!showSearch);
  const handleNavClick = () => setShowNav(!showNav);
  const handleProgramsClick = () => setShowPrograms(!showPrograms);
  const toggleModal = () => setIsModalOpen(!isModalOpen); // Toggle modal state

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
        <Link to="/" className="title">
          BLACKBOX JETS
        </Link>
        <Link to="/aboutus" >
            <span className="dropdown-trigger">
                ABOUT US
            </span>
        </Link>
        <span
          className="dropdown-trigger title"
          onMouseOver={handleMouseOver}
          onClick={handleNavClick}
        >
          SERVICES
        </span>
        <Link to="/orglogin">
            <span className="dropdown-trigger">
                OWNER'S LOGIN
            </span>
        </Link>
        <Link to="/partnership">
            <span className="dropdown-trigger">
                BECOME A PARTNER
            </span>
        </Link>
        {/* Add Request Information Link */}
        <button className="header-link" onClick={toggleModal}>
          Request Information
        </button>
      </header>

      {showSearch && <SearchBar />}
      {showNav && <Navigation />}
      {showPrograms && <Programs />}
      {/* Render Modal */}
      {isModalOpen && (
        <RequestInformation
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
