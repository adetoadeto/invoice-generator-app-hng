import InvoiceHeading from "../components/InvoiceHeading"
import EmptyInvoice from "../components/EmptyInvoice"
import Invoice from "../components/Invoice"
import { useState } from "react";

const Home = () => {
  const invoices = JSON.parse(localStorage.getItem("database")) || [];
  const [filteredData, setFilteredData] = useState(invoices)

  const handleFilterInvoices = (event) => {
    const status = event.target.value
    if (status.toLowerCase() === "all") {
      setFilteredData(invoices)
      return;
    }
    const data = invoices.filter(item => item.status === status)
    if (data) {
      setFilteredData(data)
    } else {
      setFilteredData([])
    }
  }

  return (
    <>
      <InvoiceHeading handleFilter={handleFilterInvoices} invoiceTotal={filteredData.length} />

      {(filteredData.length > 0) ?
        <section className="invoices">
          {invoices.map(item => <Invoice key={item.id} item={item} />)}
        </section>
        : <EmptyInvoice />
      }
    </>
  )
}

export default Home
