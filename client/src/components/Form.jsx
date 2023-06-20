import { useState } from "react";
import "../css/Form.css"

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        account: "",
        iban: "",
        swift: ""
    })

    function dataFetch(event) {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch("/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        console.log(formData)
    }

    return (
        <>
        <form className="container mt-2" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Bank Name</label>
            <input className="form-control" 
            id="name" 
            type="text" 
            value={formData.name}
            onChange={dataFetch}
            required
             />
        </div>
        <div className="mb-3">
            <label htmlFor="account" className="form-label">Account Number</label>
            <input className="form-control" 
            id="account" 
            type="text"
            value={formData.account}
            onChange={dataFetch}
            required
            />
        </div>
        <div className="mb-3">
            <label htmlFor="iban" className="form-label">Iban</label>
            <input  className="form-control" 
            id="iban" 
            type="text" 
            value={formData.iban}
            onChange={dataFetch}
            required
            />
        </div>
        <div className="mb-3">
            <label htmlFor="swift" className="form-label">Swift Code</label>
            <input className="form-control" 
            id="swift" 
            type="text" 
            value={formData.swift}
            onChange={dataFetch}
            required
            />
        </div>
        <button type="submit" className="btn mb-2" id="btn">Submit</button>
        </form>
        </>
    )
}

export default Form;