import '../css/Navbar.css'

function NavBar() {
    return (
        <>
        <nav className="container mt-2 navbar bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand">Bank</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </nav>
    </>
    )
}

export default NavBar;