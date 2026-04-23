import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const DeleteModal = ({ ref }) => {
    const dialog = useRef();

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

    return createPortal (
    <dialog ref={dialog} className="delete-modal dark-theme">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete invoice <span>#XM9141?</span> This action cannot be undone</p>
        <div>
            <button onClick={handleCloseModal}>Cancel</button>
            <button>Delete</button>
        </div>
    </dialog>,
    document.getElementById("modal")
    )

}

export default DeleteModal
