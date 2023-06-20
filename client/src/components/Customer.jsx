function Customer({id, name, accountNumber, swiftNumber, onDelete}) {
    function handleDelete() {
        onDelete(id)
    }

    return (
        <>
        <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{accountNumber}</td>
        <td>{swiftNumber}</td>
        <td><button className="btn btn-danger" onClick={handleDelete}>Delete</button></td>
        </tr>
        </>
    )
}
export default Customer;