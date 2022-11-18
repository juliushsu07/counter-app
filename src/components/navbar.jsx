// Stateless Functional Component

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Total Number of Counters: {" "}
                <span className="badge bg-pill bg-secondary">{totalCounters}</span>
            </a>
        </nav>
    );
}
 
export default NavBar;