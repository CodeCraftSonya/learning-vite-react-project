import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav style={{ marginBottom: "20px" }}>
            <Link to="/">Home</Link>
            {Array.from({ length: 9 }).map((_, i) => (
                <span key={i}>
          {" | "}
                    <Link to={`/exercise${i + 1}`}>Exercise {i + 1}</Link>
        </span>
            ))}
        </nav>
    );
};