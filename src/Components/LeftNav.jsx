import React, { useState, useEffect, useRef } from 'react';

import styles from '../Components/Styles/LeftNav.module.css';
import logoutIcon from '../Components/Assets/userIcon.svg';
import userIcon from '../Components/Assets/employee.jpg';

const LeftNav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropDownMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };


  const [isNavOpen, setIsNavOpen] = useState(false);
  const navDropdownRef = useRef(null);

  const navDropDownMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClickOutside1 = (event) => {
    if (navDropdownRef.current && !navDropdownRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };


  const [isNavOpen1, setIsNavOpen1] = useState(false);
  const navDropdownRef1 = useRef(null);

  const navDropDownMenu1 = () => {
    setIsNavOpen1(!isNavOpen1);
  };

  const handleClickOutside2 = (event) => {
    if (navDropdownRef1.current && !navDropdownRef1.current.contains(event.target)) {
      setIsNavOpen1(false);
    }
  };

  const [isNavOpen2, setIsNavOpen2] = useState(false);
  const navDropdownRef2 = useRef(null);

  const navDropDownMenu2 = () => {
    setIsNavOpen2(!isNavOpen2);
  };

  const handleClickOutside3 = (event) => {
    if (navDropdownRef2.current && !navDropdownRef2.current.contains(event.target)) {
      setIsNavOpen2(false);
    }
  };

  const [isNavOpen3, setIsNavOpen3] = useState(false);
  const navDropdownRef3 = useRef(null);

  const navDropDownMenu3 = () => {
    setIsNavOpen3(!isNavOpen3);
  };

  const handleClickOutside4 = (event) => {
    if (navDropdownRef3.current && !navDropdownRef3.current.contains(event.target)) {
      setIsNavOpen3(false);
    }
  };

  const [isNavOpen4, setIsNavOpen4] = useState(false);
  const navDropdownRef4 = useRef(null);

  const navDropDownMenu4 = () => {
    setIsNavOpen4(!isNavOpen4);
  };

  const handleClickOutside5 = (event) => {
    if (navDropdownRef4.current && !navDropdownRef4.current.contains(event.target)) {
      setIsNavOpen4(false);
    }
  };

  const [isNavOpen5, setIsNavOpen5] = useState(false);
  const navDropdownRef5 = useRef(null);

  const navDropDownMenu5 = () => {
    setIsNavOpen5(!isNavOpen5);
  };

  const handleClickOutside6 = (event) => {
    if (navDropdownRef5.current && !navDropdownRef5.current.contains(event.target)) {
      setIsNavOpen5(false);
    }
  };

  const [isNavOpen6, setIsNavOpen6] = useState(false);
  const navDropdownRef6 = useRef(null);

  const navDropDownMenu6 = () => {
    setIsNavOpen6(!isNavOpen6);
  };

  const handleClickOutside7 = (event) => {
    if (navDropdownRef6.current && !navDropdownRef6.current.contains(event.target)) {
      setIsNavOpen6(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutside1);
    document.addEventListener('click', handleClickOutside2);
    document.addEventListener('click', handleClickOutside3);
    document.addEventListener('click', handleClickOutside4);
    document.addEventListener('click', handleClickOutside5);
    document.addEventListener('click', handleClickOutside6);
    document.addEventListener('click', handleClickOutside7);
    return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('click', handleClickOutside1);
        document.removeEventListener('click', handleClickOutside2);
        document.removeEventListener('click', handleClickOutside3);
        document.removeEventListener('click', handleClickOutside4);
        document.removeEventListener('click', handleClickOutside5);
        document.removeEventListener('click', handleClickOutside6);
        document.removeEventListener('click', handleClickOutside7);
    };
}, []);



  return (
    <div>
    <div className={styles.full_body}>
        <section className={styles.left_navbar}>
        <div className={styles.companyLogo}>
            <img src="https://www.leadplaner.com/assetmain/images/leadplaner_logo.png" className={styles.company_logo}/>
        </div>
        <div className={styles.logoutMenu}>
            <div className={styles.client_details}>
                <div className={styles.client_img}>
                <img src={userIcon} className={styles.employeeImg}/>
                </div>
                <div className={styles.employee_basic_details}>
                <h5>Raman</h5>
                <p>Admin</p>
                </div>
            </div>
            <div className={styles.logoutIcon}>
            <div className={styles.dropdown} ref={dropdownRef}>
                <button className={styles.dropdownToggle} onClick={dropDownMenu}>
                    <img src={logoutIcon} className={styles.logoutImg}/><i className="fa-sharp fa-solid fa-chevron-right"></i>
                    </button>
                    {isOpen && (
                    <ul className={styles.dropdownMenu}>
                        <li>LogOut</li>
                        <li>Register</li>
                    </ul>
                    )}
            </div>
            </div>
        </div>
        <div className={styles.outer_nav_section}>
            <div className={styles.nav_sections}>
                <div className={styles.navItems}>
                    <button>Menu</button>
                </div>
            
                <div className={styles.navItems}>
                    <div className={styles.navDropdown} ref={navDropdownRef}>
                        <button className={styles.navDropdownToggle} onClick={navDropDownMenu}>
                            Blog<i className="fa-sharp fa-solid fa-chevron-right"></i>
                            </button>
                            {isNavOpen && (
                            <ul className={styles.navDropdownMenu}>
                                <li>Add</li>
                                <li>Update</li>
                            </ul>
                            )}
                    </div>
                </div>

                <div className={styles.navItems}>
                    <div className={styles.navDropdown} ref={navDropdownRef1}>
                        <button className={styles.navDropdownToggle} onClick={navDropDownMenu1}>
                            Site Pages<i className="fa-sharp fa-solid fa-chevron-right"></i>
                            </button>
                            {isNavOpen1 && (
                            <ul className={styles.navDropdownMenu}>
                                <li>Add</li>
                                <li>Update</li>
                                <li>Meta Keywords</li>
                            </ul>
                            )}
                    </div>
                </div>

                <div className={styles.navItems}>
                    <div className={styles.navDropdown} ref={navDropdownRef2}>
                        <button className={styles.navDropdownToggle} onClick={navDropDownMenu2}>
                            Help Section<i className="fa-sharp fa-solid fa-chevron-right"></i>
                            </button>
                            {isNavOpen2 && (
                            <ul className={styles.navDropdownMenu}>
                                <li>Add</li>
                                <li>Update</li>
                            </ul>
                            )}
                    </div>
                </div>

                <div className={styles.navItems}>
                    <div className={styles.navDropdown} ref={navDropdownRef3}>
                        <button className={styles.navDropdownToggle} onClick={navDropDownMenu3}>
                            User Management<i className="fa-sharp fa-solid fa-chevron-right"></i>
                            </button>
                            {isNavOpen3 && (
                            <ul className={styles.navDropdownMenu}>
                                <li>Add</li>
                                <li>Update</li>
                            </ul>
                            )}
                    </div>
                </div>

                <div className={styles.navItems}>
                    <div className={styles.navDropdown} ref={navDropdownRef4}>
                        <button className={styles.navDropdownToggle} onClick={navDropDownMenu4}>
                            Employee<i className="fa-sharp fa-solid fa-chevron-right"></i>
                            </button>
                            {isNavOpen4 && (
                            <ul className={styles.navDropdownMenu}>
                                <li>Add</li>
                                <li>Update</li>
                            </ul>
                            )}
                    </div>
                </div>

                <div className={styles.navItems}>
                    <button>Acsess Management</button>
                </div>

                <div className={styles.navItems}>
                    <button>Reports and Analytics</button>
                </div>

                <div className={styles.navItems}>
                    <div className={styles.navDropdown} ref={navDropdownRef5}>
                        <button className={styles.navDropdownToggle} onClick={navDropDownMenu5}>
                            Master Settings<i className="fa-sharp fa-solid fa-chevron-right"></i>
                            </button>
                            {isNavOpen5 && (
                            <ul className={styles.navDropdownMenu}>
                                <li>City</li>
                            </ul>
                            )}
                    </div>
                </div>

                <div className={styles.navItems}>
                    <div className={styles.navDropdown} ref={navDropdownRef6}>
                        <button className={styles.navDropdownToggle} onClick={navDropDownMenu6}>
                            System<i className="fa-sharp fa-solid fa-chevron-right"></i>
                            </button>
                            {isNavOpen6 && (
                            <ul className={styles.navDropdownMenu}>
                                <li>State</li>
                            </ul>
                            )}
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
    </div>
  )
}

export default LeftNav;