import './DarkLightToggle.scss';

const DarkLightToggle = ({ isDarkMode, toggleTheme }) => {
    const handleChange = () => {
      toggleTheme();
    };
  
    return (
      <label className="dark-light-toggle">
        Toggle Dark Mode
        <input type="checkbox" onChange={handleChange} checked={isDarkMode} />
      </label>
    );
  };
  
  export default DarkLightToggle;
