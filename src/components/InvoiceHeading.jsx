
const InvoiceHeading = () => {
  return (
    <div className="invoice-heading">
      <div>
        <h2>Invoices</h2>
        <p>No invoices</p>
      </div>
      <div>
        <p className="invoice-heading-filter"><span></span> <i class="fa-solid fa-angle-down"></i></p>
        <button className="invoice-heading__add"><i class="fa-solid fa-circle-plus"></i> <p></p></button>
        <div className="invoice-heading-filter__dropdown">
          <div>
            <input type="checkbox" name="filterStatus" id="draft" />
            <label htmlFor="draft">Draft</label>
          </div>
          <div>
            <input type="checkbox" name="filterStatus" id="pending" />
            <label htmlFor="pending">Pending</label>
          </div>
          <div>
            <input type="checkbox" name="filterStatus" id="paid" />
            <label htmlFor="paid">Paid</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceHeading
