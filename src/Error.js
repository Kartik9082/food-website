import { useRouteError } from "react-router-dom";
import Errors from './components/images/error.png'
const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div className="error-png">
        <img className=""src={Errors} />
        </div>
        
    )
}

export default Error;