import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Contact: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    const closeModal = () => {
        setIsModalOpen(false);
        onClose();
    };

    return (
        <>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}>
                            X
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Contact;
