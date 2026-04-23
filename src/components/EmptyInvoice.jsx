import vectorImg from "../assets/imgs/vector-img1.png";

const EmptyInvoice = () => {
    return (

        <div className="invoice-empty--content">
            <img src={vectorImg} alt="a woman with a microphone from an envelope" />
            <strong>There is nothing here</strong>
            <p>Create an invoice by clicking the </p>
            <p><span>New Invoice</span> button and get started</p>
        </div>

    )
}

export default EmptyInvoice
