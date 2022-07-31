import { Link } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/ellisvelandia.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className='sublogo' src={LogoSubtitle} alt="Ellisvelandia" />
    </Link>
  </div>
);

export default Sidebar;
