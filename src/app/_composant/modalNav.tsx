
import React from 'react';
import "../../styles/header.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // Ajoutez cette ligne pour définir children
}

const ModalNav: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="container-nav-mobile-all" onClick={onClose}>
      <div className="container-nav-mobile" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalNav;