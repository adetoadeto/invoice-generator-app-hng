import InvoiceHeading from "../components/InvoiceHeading"
import EmptyInvoice from "../components/EmptyInvoice"
import Invoice from "../components/Invoice"

const Home = () => {
  return (
     <>
        <InvoiceHeading />
        {/* <EmptyInvoice /> */}
        <section className="invoices">
          <Invoice />
          <Invoice />
          <Invoice />
          <Invoice />
        </section>
      </>
  )
}

export default Home
