import { useState } from "react";
import CreateInvoice from "./CreateInvoice";

const InvoiceHeading = ({ handleFilter, invoiceTotal }) => {
  const [asideOpen, setAsideOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleShowAside = () => {
    localStorage.setItem("asideOpen", JSON.stringify(true))
    setAsideOpen(true)
  }

  const handleShowDropdown = () => {
    setDropdownOpen(prevState => !prevState)
  }

  const plural1 = invoiceTotal == 1 ? "is" : "are"
  const plural2 = invoiceTotal == 1 ? "invoice" : "invoices"

  return (
    <>
      {asideOpen && <CreateInvoice />}
      <div className="invoice-heading">
        <div>
          <h2>Invoices</h2>
          {invoiceTotal > 0 ? <p>There {plural1} {invoiceTotal} total {plural2}</p> : <p>No invoices</p>}
        </div>
        <div>
          <p className="invoice-heading-filter"><span></span> <i className="fa-solid fa-angle-down" onClick={handleShowDropdown}></i></p>
          <button className="invoice-heading__add" onClick={handleShowAside}><i className="fa-solid fa-circle-plus"></i> <p></p></button>
          {dropdownOpen && <div className="invoice-heading-filter__dropdown">
            <div>
              <input type="radio" name="filterStatus" id="all" value="all" onChange={(event) => handleFilter(event)} />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input type="radio" name="filterStatus" id="draft" value="draft" onChange={(event) => handleFilter(event)} />
              <label htmlFor="draft">Draft</label>
            </div>
            <div>
              <input type="radio" name="filterStatus" id="pending" value="pending" onChange={(event) => handleFilter(event)} />
              <label htmlFor="pending">Pending</label>
            </div>
            <div>
              <input type="radio" name="filterStatus" id="paid" value="paid" onChange={(event) => handleFilter(event)} />
              <label htmlFor="paid">Paid</label>
            </div>
          </div>}
        </div>
      </div>
    </>
  )
}

export default InvoiceHeading
