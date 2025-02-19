import { useRouteError } from "react-router-dom";

const Error = ()=> {
    let error = useRouteError();

    return (
        <div>
            <h1>Error Logger :</h1> <p>{error.data}</p> 
            <h3>Error Status : </h3>  <p>{error.status}</p>
            <h3>Error Status Text : </h3>  <p>{error.statusText}</p>
        </div>
    )   
}

export default Error;