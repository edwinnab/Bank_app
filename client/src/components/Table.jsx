import '../css/Table.css'
import { useEffect, useState } from 'react';
import Customer from './Customer';

function Table() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch("/customers")
        .then(res => res.json())
        .then(data => setCustomers(data))
    },[])

    
    function handleDelete(id) {
        fetch(`/customers/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then(res => console.log(res))
    } 


    return (
    <table className="table container">
    <thead className="table-dark">
        <tr>
        <th scope="col">Customer ID</th>
        <th scope="col">Name</th>
        <th scope="col">Account-Number</th>
        <th scope="col">Swift-Number</th>
        <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {
            customers.map((customer) => {
                return (
                    <Customer
                    key={customer.id}
                    id = {customer.id}
                    name = {customer.name}
                    accountNumber = {customer.account}
                    swiftNumber = {customer.swift}
                    onDelete = {handleDelete}
                     />
                )
            } 
            )
        }
    </tbody>
    </table>
    )
}

export default Table;