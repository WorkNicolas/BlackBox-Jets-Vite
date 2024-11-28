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
        <span
          className="dropdown-trigger"
          onMouseOver={handleMouseOver}
          onClick={handleNavClick}
        >
          ETHEREAL EXPERIENCE
        </span>
        <Link to="/" className="title">
          BLACKBOX JETS
        </Link>
        <span
          className="dropdown-trigger"
          onMouseOver={handleMouseOver}
          onClick={handleProgramsClick}
        >
          OUR PROGRAMS & AIRCRAFT
        </span>
        <span className="dropdown-trigger-end" onMouseOver={handleMouseOver}>
          CA <FontAwesomeIcon icon={faAngleDown} />
        </span>
        <span className="dropdown-trigger-end" onMouseOver={handleMouseOver}>
          MORE <FontAwesomeIcon icon={faAngleDown} />
        </span>
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
