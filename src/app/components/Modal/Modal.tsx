import React, { useState, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode; // Use ReactNode type for children
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
          <div className="bg-white  rounded-lg shadow-md z-20">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
