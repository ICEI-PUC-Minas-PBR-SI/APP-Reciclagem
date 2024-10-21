import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, BackButton } from './styled';
import { FaArrowLeft } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const isHome = location.pathname === '/home';

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <HeaderContainer>
      {!isHome && (
        <BackButton onClick={handleBackClick}>
          <FaArrowLeft />
        </BackButton>
      )}
      <Logo>Recicla BH</Logo>
    </HeaderContainer>
  );
};

export default Header;
