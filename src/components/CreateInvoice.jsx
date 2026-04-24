
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateInvoice = () => {
    const formRef = useRef();

    const asideIsOpen = JSON.parse(localStorage.getItem("asideOpen"));

    const [asideOpen, setAsideOpen] = useState(true);
    const [status, setStatus] = useState("draft")
    const [items, setItems] = useState([])

    const navigate = useNavigate();

    const handleStatus = (status) => {
        setStatus(status)
    }

    const handleCloseModal = () => {
        localStorage.setItem("asideOpen", JSON.stringify(false))
        setAsideOpen(false)
    }

    const handleStoreData = (e) => {
        if (status === "draft") {
            e.preventDefault()
        }

        const formData = new FormData(formRef.current)

        const body = {
            id: (Math.round(Math.random() * 10000)),
            status: status || "pending",
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

        let newDatabase = []
        const existingData = JSON.parse(localStorage.getItem("database")) || []

        if (existingData.length > 0) {
            newDatabase = [...existingData]
        }

        newDatabase.push(body)

        localStorage.setItem("database", JSON.stringify(newDatabase))

        alert("Operation successful! Close modal and reload page to view changes")
    }

    return (
        <>
            {(asideOpen || asideIsOpen) && <aside className="invoice-form">
                <form  ref={formRef} onSubmit={handleStoreData}>
                    <div className="invoice-form-content">
                        <h2>New Invoice</h2>

                        <div className="bill-from">
                            <p className="bill">Bill From</p>
                            <div>
                                <label htmlFor="vendor-address">Street Address</label>
                                <input type="text" name="vendor-address" required />
                            </div>
                            <div className="flex">
                                <div className="city">
                                    <label htmlFor="vendor-city">City</label>
                                    <input type="text" name="vendor-city" required />
                                </div>

                                <div className="post-code">
                                    <label htmlFor="vendor-post-code">Post Code</label>
                                    <input type="text" name="vendor-post-code" required />
                                </div>

                                <div className="country">
                                    <label htmlFor="vendor-country">Country</label>
                                    <input type="text" name="vendor-country" required />
                                </div>
                            </div>
                        </div>

                        <div className="bill-to">
                            <p className="bill">Bill To</p>
                            <div className="client-name">
                                <label htmlFor="client-name">Client's Name</label>
                                <input type="text" name="client-name" required />
                            </div>

                            <div className="client-email">
                                <label htmlFor="client-email">Client's Email</label>
                                <input type="email" name="client-email" required placeholder="e.g example@gmail.com" />
                            </div>

                            <div>
                                <label htmlFor="client-address">Street Address</label>
                                <input type="text" name="client-address" required />
                            </div>

                            <div className="flex">
                                <div className="city">
                                    <label htmlFor="client-city">City</label>
                                    <input type="text" name="client-city" required />
                                </div>

                                <div className="post-code">
                                    <label htmlFor="client-post-code">Post Code</label>
                                    <input type="text" name="client-post-code" required />
                                </div>

                                <div className="country">
                                    <label htmlFor="client-country">Country</label>
                                    <input type="text" name="client-country" required />
                                </div>
                            </div>

                        </div>

                        <div className="invoice-details">
                            <div className="flex">
                                <div>
                                    <label htmlFor="invoice-date">Invoice Date</label>
                                    <input type="date" name="invoice-date" required />
                                </div>

                                <div>
                                    <label htmlFor="payment-terms">Payment Terms</label>
                                    <select name="payment-terms" id="payment-terms" required>
                                        <option value="1">Next 1 Day</option>
                                        <option value="7">Next 7 Days</option>
                                        <option value="14">Next 14 Days</option>
                                        <option value="30">Next 30 Days</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="project-description">Project Description</label>
                                <input type="text" name="project-description" maxLength="30" required placeholder="e.g Graphic Design Service"/>
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
                                                <p>00.00</p>
                                                <i className="fa-solid fa-trash"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* second list */}
                            </div>
                            <button className="add-more-item">+ Add New Item
                            </button>
                        </div>
                    </div>
                    <div className="invoice-form-actions" id="create">
                        <button onClick={handleCloseModal}>Discard</button>
                        <div>
                            <button type="submit" onClick={() => handleStatus("draft")}>Save as Draft</button>
                            <button type="submit">Save & Send</button>
                        </div>
                    </div>
                </form>


            </aside>}
        </>
    )
}

export default CreateInvoice
