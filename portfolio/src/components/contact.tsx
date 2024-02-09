import CancelIcon from '@mui/icons-material/Cancel';
import MailIcon from '@mui/icons-material/Mail';
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./contact.css";

const Contact = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsLoaded(false);
            const timeoutId = setTimeout(() => setIsLoaded(true), 1);
            return () => clearTimeout(timeoutId);
        }
    }, [isOpen]);

    const closeModal = () => {
        setIsLoaded(false);
        onClose();
    };


    return (
        
        <div className={`relative ${isLoaded ? 'fade-in' : 'hidden'}`} style={{ zIndex: 2 }}>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <div className="bg-blue-950 p-8 rounded-3xl shadow-lg">
                        <span className="mb-6" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2 className="text-2xl ">Contact</h2>
                            <button 
                                onClick={closeModal}
                                style={{
                                    color: "#93c5fd",
                                    marginTop: "-2rem",
                                    marginRight: "-1rem"
                                }}
                            >
                                <CancelIcon/>
                            </button>
                        </span>
                        <div>
                            <a href="mailto:vinliu356@gmail.com" className="block mb-4">
                                <MailIcon/>: <span className="hover:underline hover:brightness-200">vinliu356@gmail.com</span>
                            </a>
                            <a href="https://github.com/vinn03" target="_blank" rel="noreferrer" className="block mb-4">
                                <GitHub/>: <span className="hover:underline hover:brightness-200">vinn03</span>
                            </a>
                            <a href="https://www.linkedin.com/in/vincent-wz-liu" target="_blank" rel="noreferrer" className="block mb-2">
                                <LinkedIn/>: <span className="hover:underline hover:brightness-200">vincent-wz-liu</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;