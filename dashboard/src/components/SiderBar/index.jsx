import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo-DH.png";
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiCameraMovie } from 'react-icons/bi';
import { MdDeveloperMode } from 'react-icons/md';

export const SideBar = () => {
      return (
            <>
                  {/* <!-- Sidebar --> */}
                  <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                        {/* <!-- Sidebar - Brand --> */}
                        <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                              <div className="sidebar-brand-icon">
                                    <img className="w-100" src={Logo} alt="Digital House" />
                              </div>
                        </Link>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/* <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                              <Link to="/" className="nav-link">
                                    <span>Dashboard - DH movies</span>
                              </Link>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Heading --> */}
                        <div className="sidebar-heading">Actions</div>

                        <li className="nav-item">
                              <Link to="/search-movies" className="nav-link collapsed">
                                    <span>Search Movies </span>
                                    <AiOutlineSearch />
                              </Link>
                        </li>

                        {/* <!-- Nav Item - Tables --> */}
                        <li className="nav-item">
                              <Link to="/movies" className="nav-link" href="/">
                                    <span>Movies List </span>
                                    <AiOutlineUnorderedList />
                              </Link>
                        </li>

                        {/* <!-- Nav Item - Pages --> */}
                        <li className="nav-item">
                              <Link to="/genres" className="nav-link collapsed" icon="fa-box">
                                    <span>Genres </span>
                                    <BiCameraMovie />
                              </Link>
                        </li>

                        {/* <!-- Nav Item - Charts --> */}
                        <li className="nav-item">
                              <Link to="/charts" className="nav-link" href="/">
                                    <span>Charts in development</span>
                                    <MdDeveloperMode />
                              </Link>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />
                  </ul>
                  {/* <!-- End of Sidebar --></hr> */}
            </>
      );
};
