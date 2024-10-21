import { Link, useLocation } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, NavLink, BackButton } from './styled';
import { FaArrowLeft } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/home';

  return (
    <HeaderContainer>
      {!isHome && (
        <Link to="/home">
          <BackButton>
            <FaArrowLeft />
          </BackButton>
        </Link>
      )}
      <Logo>Recicla BH</Logo>
    </HeaderContainer>
  );
};

export default Header;
