import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ ref , invoiceId}) => {
    const dialog = useRef();
    const navigate = useNavigate()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    const handleCloseModal = ()=> {
        dialog.current.close()
    }

    const  handleDeleteInvoice = ()=> {
        const invoices = JSON.parse(localStorage.getItem("database")) || [];
        const filteredData = invoices.filter(item => item.id != invoiceId)
        localStorage.setItem("database", JSON.stringify(filteredData))
        handleCloseModal()
        navigate("/")
    }

    return createPortal (
    <dialog ref={dialog} className="delete-modal dark-theme">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete invoice <span>#XM{invoiceId}?</span> This action cannot be undone</p>
        <div>
            <button onClick={handleCloseModal}>Cancel</button>
            <button onClick={handleDeleteInvoice}>Delete</button>
        </div>
    </dialog>,
    document.getElementById("modal")
    )

}

export default DeleteModal
