import { useState } from "react";
import vectorImg from "../assets/imgs/vector-img1.png";
import CreateInvoice from "./CreateInvoice";

const EmptyInvoice = () => {
    
    const [asideOpen, setAsideOpen] = useState(false);

    const handleShowAside = () => {
        localStorage.setItem("asideOpen", JSON.stringify(true))
        setAsideOpen(true)
    }
    
    return (
        <>
            {asideOpen  && <CreateInvoice />}
            <div className="invoice-empty--content">
                <img src={vectorImg} alt="a woman with a microphone from an envelope" />
                <strong>There is nothing here</strong>
                <p>Create an invoice by clicking the </p>
                <p><span onClick={handleShowAside}>New Invoice</span> button and get started</p>
            </div>
        </>

    )
}

export default EmptyInvoice
