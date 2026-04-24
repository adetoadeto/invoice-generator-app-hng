import { Link, useNavigate } from "react-router-dom"

const Invoice = ({item}) => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/view-invoice/${id}`)
  }

  return (
    <div className="invoice" onClick={()=>handleNavigation(item.id)}>
      <strong className="invoice-id"><span>#</span>RT{item.id}</strong>
      <span className="invoice-date">{item.invoiceDate}</span>
      <p className="invoice-name">{item.clientName}</p>
      <strong className="invoice-price">$0.00</strong>
      <div>
        <p className={`invoice-status ${item.status}`}><i className="fa-solid fa-circle"></i>{item.status}</p>
        <Link to={`/view-invoice/${item.id}`}><i class="fa-solid fa-angle-right"></i></Link>
      </div>
    </div>
  )
}

export default Invoice
