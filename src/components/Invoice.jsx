import { Link, useNavigate } from "react-router-dom"

const Invoice = ({item}) => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/view-invoice/${id}`)
  }

  const grandTotal = (item.lists.map(item => item.price * item.qty)).reduce((acc, curr)=> acc + curr, 0);

  return (
    <div className="invoice" onClick={()=>handleNavigation(item.id)}>
      <strong className="invoice-id"><span>#</span>RT{item.id}</strong>
      <span className="invoice-date">{item.invoiceDate}</span>
      <p className="invoice-name">{item.clientName}</p>
      <strong className="invoice-price">${grandTotal}</strong>
      <div>
        <p className={`invoice-status ${item.status}`}><i className="fa-solid fa-circle"></i>{item.status}</p>
        <Link to={`/view-invoice/${item.id}`}><i className="fa-solid fa-angle-right"></i></Link>
      </div>
    </div>
  )
}

export default Invoice
