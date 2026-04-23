import { Link } from "react-router-dom"

const Invoice = () => {
  return (
    <div className="invoice">
      <strong className="invoice-id"><span>#</span>RT3080</strong>
      <span className="invoice-date">Due 19 Aug 2021</span>
      <p className="invoice-name">Jensen Juanghhhhhhhhhhhhhhhhhhhhhhhhh</p>
      <strong className="invoice-price">$1,4569999999</strong>
      <div>
        <p className="invoice-status paid"><i className="fa-solid fa-circle"></i>Pending</p>
        <Link to="/view-invoice/1"><i class="fa-solid fa-angle-right"></i></Link>
      </div>
    </div>
  )
}

export default Invoice
