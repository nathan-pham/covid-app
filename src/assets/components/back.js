import { Link } from "react-router-dom"

const Back = () => {
    return (
        <Link to="/">
            <button className="primary-background back-button">
                <i className="fas fa-chevron-left"></i>
            </button>
        </Link>
    )
}

export default Back