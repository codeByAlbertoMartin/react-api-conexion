import { useState, type ReactNode } from "react"
import { createPortal } from "react-dom"
import "./BasicExamplePortal.css"

const portalRoot= document.getElementById("portal-root")

interface ModalProps {
    children:ReactNode
}

const Modal = ({children}: ModalProps) =>{
    return createPortal( <div className="modal">{children}</div>, portalRoot as HTMLElement)
}

interface Props {
    children: ReactNode
}

const CustomModal = ({children}: Props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return(
        <div>
            <button onClick={toggleModal}>Toggle Model</button>
            {showModal && (
                <Modal>
                    <h2>{children}</h2>
                    <button onClick={toggleModal}>Close</button>
                </Modal>
            )}
        </div>
    )
}

export default CustomModal;