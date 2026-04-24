
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditInvoice = () => {

    const { editIsOpen, id } = JSON.parse(localStorage.getItem("editIsOpen"));
    const invoices = JSON.parse(localStorage.getItem("database"));

    const navigate = useNavigate();
    const formRef = useRef();

    const [editOpen, setEditOpen] = useState(true);
    const [status, setStatus] = useState("draft")
    const [items, setItems] = useState([])

    const invoice = invoices.find(item => item.id == id)

    const handleStoreData = (e) => {
        const formData = new FormData(formRef.current)
        const body = {
            id: id,
            status: invoice.status,
            vendorAddress: formData.get("vendor-address"),
            vendorCity: formData.get("vendor-city"),
            vendorPostCode: formData.get("vendor-post-code"),
            vendorCountry: formData.get("vendor-country"),
            clientName: formData.get("client-name"),
            clientEmail: formData.get("client-email"),
            clientAddress: formData.get("client-address"),
            clientCity: formData.get("client-city"),
            clientPostCode: formData.get("client-post-code"),
            clientCountry: formData.get("client-country"),
            invoiceDate: formData.get("invoice-date"),
            paymentTerms: formData.get("payment-terms"),
            projectDescription: formData.get("project-description"),
            lists: items
        }

        const invoiceIndex = invoices.findIndex(item => item.id == id)

        invoices[invoiceIndex] = body

        localStorage.setItem("database", JSON.stringify(invoices))
    }

    const handleCloseModal = () => {
        localStorage.setItem("editIsOpen", false)
        setEditOpen(false)
    }

    return (
        <>
            {(editOpen || editIsOpen) && <aside className="invoice-form">
                <form className="invoice-form-content" ref={formRef} onSubmit={handleStoreData}>

                    <h2>Edit #RT{invoice.id}</h2>

                    <div className="bill-from">
                        <p className="bill">Bill From</p>
                        <div>
                            <label htmlFor="vendor-address">Street Address</label>
                            <input type="text" name="vendor-address" defaultValue={invoice.vendorAddress} required />
                        </div>
                        <div className="flex">
                            <div className="city">
                                <label htmlFor="vendor-city">City</label>
                                <input type="text" name="vendor-city" defaultValue={invoice.vendorCity} required />
                            </div>

                            <div className="post-code">
                                <label htmlFor="vendor-post-code">Post Code</label>
                                <input type="text" name="vendor-post-code" defaultValue={invoice.vendorPostCode} required />
                            </div>

                            <div className="country">
                                <label htmlFor="vendor-country">Country</label>
                                <input type="text" name="vendor-country" defaultValue={invoice.vendorCountry} required />
                            </div>
                        </div>
                    </div>

                    <div className="bill-to">
                        <p className="bill">Bill To</p>
                        <div className="client-name">
                            <label htmlFor="client-name">Client's Name</label>
                            <input type="text" name="client-name" defaultValue={invoice.clientName} required />
                        </div>

                        <div className="client-email">
                            <label htmlFor="client-email">Client's Email</label>
                            <input type="email" name="client-email" defaultValue={invoice.clientEmail} required />
                        </div>

                        <div>
                            <label htmlFor="client-address">Street Address</label>
                            <input type="text" name="client-address" defaultValue={invoice.clientAddress} required />
                        </div>

                        <div className="flex">
                            <div className="city">
                                <label htmlFor="client-city">City</label>
                                <input type="text" name="client-city" defaultValue={invoice.clientCity} required />
                            </div>

                            <div className="post-code">
                                <label htmlFor="client-post-code">Post Code</label>
                                <input type="text" name="client-post-code" defaultValue={invoice.clientPostCode} required />
                            </div>

                            <div className="country">
                                <label htmlFor="client-country">Country</label>
                                <input type="text" name="client-country" defaultValue={invoice.clientCountry} required />
                            </div>
                        </div>

                    </div>

                    <div className="invoice-details">
                        <div className="flex">
                            <div>
                                <label htmlFor="invoice-date">Invoice Date</label>
                                <input type="date" name="invoice-date" defaultValue={invoice.invoiceDate} required />
                            </div>

                            <div>
                                <label htmlFor="payment-terms">Payment Terms</label>
                                <select name="payment-terms" id="payment-terms" required>
                                    <option value="1">Next 30 Days</option>
                                    <option value="7">Next 7 Days</option>
                                    <option value="14">Next 1 Day</option>
                                    <option value="30">Next 30 Days</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="project-description">Project Description</label>
                            <input type="text" name="project-description" maxLength="30" defaultValue={invoice.projectDescription} required />
                        </div>
                    </div>

                    <div className="item-lists">
                        <p>Item List</p>
                        <div className="list">
                            {/* first list */}
                            <div className="item flex">
                                <div className="item-name">
                                    <label htmlFor="item-name">Item Name</label>
                                    <input type="text" name="item-name" required />
                                </div>
                                <div className="flex">
                                    <div className="qty">
                                        <label htmlFor="qty">Qty</label>
                                        <input type="text" name="qty" required />
                                    </div>

                                    <div className="price">
                                        <label htmlFor="price">Price</label>
                                        <input type="text" name="price" required />
                                    </div>

                                    <div className="total">
                                        <label htmlFor="total">Total</label>
                                        <div className="flex">
                                            <p>156.00</p>
                                            <i class="fa-solid fa-trash"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* second list */}
                        </div>
                        <button className="add-more-item">+ Add New Item
                        </button>
                    </div>

                    <div className="invoice-form-actions" id="edit">
                        <button onClick={handleCloseModal}>Discard</button>
                        <button type="submit">Save Changes</button>
                    </div>
                </form>


            </aside>
            }
        </>
    )
}

export default EditInvoice
