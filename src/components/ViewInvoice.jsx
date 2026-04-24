import { useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"

import DeleteModal from "./DeleteModal"
import EditInvoice from "./EditInvoice";


const ViewInvoice = () => {
    const [editOpen, setEditOpen] = useState(false);
    const dialog = useRef();
    const { id } = useParams();

    const invoices =
        JSON.parse(localStorage.getItem("database")) || []

    const invoice = invoices.find(item => item.id == id)

    const handleDeleteModal = () => {
        dialog.current.open()
    }

    const handleStatusChange = () => {
        const invoice = invoices.findIndex(item => item.id == id)
        invoices[invoice].status = "paid"

        localStorage.setItem("database", JSON.stringify(invoices))
    }

    const handleShowAside = () => {
        localStorage.setItem("editIsOpen", JSON.stringify({id: id, editIsOpen: true}))
        setEditOpen(true)
    }


    return (
        <>
            <DeleteModal ref={dialog} invoiceId={id} />
            {editOpen && <EditInvoice />}
            <section className="view-invoice">
                <Link to="/" className="view-invoice-return">
                    <i class="fa-solid fa-angle-left"></i>
                    <p>Go back</p>
                </Link>
                <div className="view-invoice-heading">
                    <div className="status">
                        <p>Status</p>
                        <p className={`invoice-status ${invoice.status}`}><i className="fa-solid fa-circle"></i>{invoice.status}</p>
                    </div>
                    <div className="view-invoice-actions desktop">
                        <button onClick={handleShowAside}>Edit</button>
                        <button onClick={handleDeleteModal}>Delete</button>
                        <button onClick={handleStatusChange}>Mark as Paid</button>
                    </div>
                </div>

                <div className="view-invoice-content">
                    <div className="vendor-info">
                        <div className="purpose">
                            <p>#<strong>XM{invoice.id}</strong></p>
                            <p>{invoice.projectDescription}</p>
                        </div>
                        <div className="address">
                            <p>{invoice.vendorAddress}</p>
                            <p>{invoice.vendorCity}</p>
                            <p>{invoice.vendorPostCode}</p>
                            <p>{invoice.vendorCountry}</p>
                        </div>
                    </div>
                    <div className="client-info">
                        <div>
                            <div>
                                <p>Invoice Date</p>
                                <strong>{invoice.invoiceDate}</strong>
                            </div>
                            <div>
                                <p>Payment Due</p>
                                <strong>{invoice.invoiceDate}</strong>
                            </div>
                        </div>
                        <div>
                            <p>Bill To</p>
                            <strong>{invoice.clientName}</strong>
                            <div>
                                <p>{invoice.clientAddress}</p>
                                <p>{invoice.clientCity}</p>
                                <p>{invoice.clientPostCode}</p>
                                <p>{invoice.clientCountry}</p>
                            </div>
                        </div>
                        <div>
                            <p>Sent to</p>
                            <strong>{invoice.clientEmail}</strong>
                        </div>
                    </div>
                    <div className="billing-info">
                        <div>
                            <div className="billing-info-heading">
                                <div>
                                    <p className="first">Item</p>
                                    <div>
                                        <p className="second">QTY</p>
                                        <p className="third">Price</p>
                                    </div>
                                </div>
                                <strong className="fourth">Total</strong>
                            </div>
                            <div className="billing-info-content">
                                <div>
                                    <p className="first">Placeholder</p>
                                    <div>
                                        <p className="second">1</p>
                                        <span className="multiply">X</span>
                                        <p className="third">£ 00.00</p>
                                    </div>
                                </div>
                                <strong>£ 00.00</strong>
                            </div>

                        </div>
                        <div className="grand-total">
                            <p>Amount Due</p>
                            <p>£ 00.00</p>
                        </div>
                    </div>
                </div>
                <div className="view-invoice-actions mobile">
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Mark as Paid</button>
                </div>
            </section>
        </>
    )
}

export default ViewInvoice
