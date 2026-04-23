import { useRef } from "react"
import { Link } from "react-router-dom"
import DeleteModal from "./DeleteModal"


const ViewInvoice = () => {
    const dialog = useRef()

    const handleDeleteModal = ()=> {
        dialog.current.open()
    }

    return (
        <>
        <DeleteModal ref={dialog}/>
        <section className="view-invoice">
            <Link to="/" className="view-invoice-return">
                <i class="fa-solid fa-angle-left"></i>
                <p>Go back</p>
            </Link>
            <div className="view-invoice-heading">
                <div className="status">
                    <p>Status</p>
                    <p className="invoice-status paid"><i className="fa-solid fa-circle"></i>Pending</p>
                </div>
                <div className="view-invoice-actions desktop">
                    <button>Edit</button>
                    <button onClick={handleDeleteModal}>Delete</button>
                    <button>Mark as Paid</button>
                </div>
            </div>

            <div className="view-invoice-content">
                <div className="vendor-info">
                    <div className="purpose">
                        <p>#<strong>XM9141</strong></p>
                        <p>Graphic Design</p>
                    </div>
                    <div className="address">
                        <p>19 Union Terrace</p>
                        <p>London</p>
                        <p>E13EZ</p>
                        <p>United Kingdom</p>
                    </div>
                </div>
                <div className="client-info">
                    <div>
                        <div>
                            <p>Invoice Date</p>
                            <strong>21 Aug 2021</strong>
                        </div>
                        <div>
                            <p>Payment Due</p>
                            <strong>20 Sep 2021</strong>
                        </div>
                    </div>
                    <div>
                        <p>Bill To</p>
                        <strong>Alex Grim</strong>
                        <div>
                            <p>84 Church Way</p>
                            <p>Bradford</p>
                            <p>BD1 9PB</p>
                            <p>United Kingdom</p>
                        </div>
                    </div>
                    <div>
                        <p>Sent to</p>
                        <strong>alexgrim@mail.com</strong>
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
                                <p className="first">Banner design</p>
                                <div>
                                    <p className="second">1</p>
                                    <span className="multiply">X</span>
                                    <p className="third">£ 156.60</p>
                                </div>
                            </div>
                            <strong>£ 156.00</strong>
                        </div>

                        <div className="billing-info-content">
                            <div>
                                <p className="first">Banner design</p>
                                <div>
                                    <p className="second">1</p>
                                    <p className="third">£ 156.60</p>
                                </div>
                            </div>
                            <strong className="fourth">£ 156.00</strong>
                        </div>
                        <div className="billing-info-content">
                            <div>
                                <p className="first">Banner designlllllll</p>
                                <div>
                                    <p className="second">10000</p>
                                    <p className="third">£ 15699999000000.60</p>
                                </div>
                            </div>
                            <strong className="fourth">£ 15600000000000000000.00</strong>
                        </div>
                    </div>
                    <div className="grand-total">
                        <p>Amount Due</p>
                        <p>£ 556.00</p>
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
