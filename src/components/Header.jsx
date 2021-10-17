import './Header.css';

const Header = () => {
  return (
    <span className='header' onClick={() => window.scroll(0, 0)}>
      🎥 CINEFILUS 🍿{' '}
    </span>
  );
};

export default Header;
