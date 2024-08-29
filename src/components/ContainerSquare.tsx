import React, {useState, useEffect} from "react";
import './ContainerSquare.css';


const ContainerSquare: React.FC = () => {
  // useState to track if the container is active or not
  const [isActive, setIsActive] = useState(false);

  // Handle the toggle event and reset automatically after 2000ms
  useEffect( () => {
    if(isActive){
      // Set as inactive after 2 seconds
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 2000);
      
      // Clean up the timer when component is unmounted or when isActive changes
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  // Function to toggle the active/inactive state when the container is clicked
  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if( event.key === 'Enter' || event.key === ' '){
      event.preventDefault();
      toggleActiveState();
    }
  }

  return (
    <div
      className={`container-square ${isActive ? 'active' : 'inactive'}`}
      onClick={toggleActiveState}
      onKeyDown={handleKeyDown} //keyboard interaction with enter or space
      tabIndex={0} //makes the container focusable
      role='button'
      aria-pressed={isActive} //make pressed state known
    >
      <div className={`smaller-square ${isActive? 'active' : 'inactive'}`}></div>
    </div>
  );


};

export default ContainerSquare;