import { useSearchParams } from "react-router-dom";

function Results() {
    const [result, setResult] = useSearchParams();
    const query = result.get("query");
    return <div>Results for {query}</div>;
}

export default Results;
