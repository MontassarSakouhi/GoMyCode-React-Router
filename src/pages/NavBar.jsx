import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav style={{
            backgroundColor: "#333",
            padding: "1rem",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
            marginBottom: "50px"

        }}>
            <ul style={{
                display: "flex",
                justifyContent: "space-around",
                listStyle: "none",
                margin: 0,
                padding: 0,
                color: "white",
                fontSize: "1.2rem"
            }}>

                <li style={{ cursor: "pointer", fontWeight: "bold" }}><Link to={"/"} >Movie List</Link></li>
                <li style={{ cursor: "pointer", fontWeight: "bold" }}><Link to={"/add"} >Add Movie</Link></li>
            </ul>
        </nav>
    );
}
