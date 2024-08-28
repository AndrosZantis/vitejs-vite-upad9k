import React, {useState, useEffect} from "react";
import './ContainerSquare.css';


const ContainerSquare: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect( () => {
    if(isActive){
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`container-square ${isActive ? 'active' : 'inactive'}`}
      onClick={toggleActiveState}
    >
      <div className={`smaller-square ${isActive? 'active' : 'inactive'}`}></div>
    </div>
  )


};

export default ContainerSquare;