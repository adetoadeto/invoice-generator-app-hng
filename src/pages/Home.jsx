import InvoiceHeading from "../components/InvoiceHeading"
import EmptyInvoice from "../components/EmptyInvoice"
import Invoice from "../components/Invoice"

const Home = () => {
    const invoices = JSON.parse(localStorage.getItem("database")) || [];

  return (
     <>
        <InvoiceHeading />
      
        {(invoices.length > 0) ?
        <section className="invoices">
          {invoices.map(item => <Invoice key={item.id} item={item}/>)}
        </section>
        :   <EmptyInvoice />
        }
      </>
  )
}

export default Home
