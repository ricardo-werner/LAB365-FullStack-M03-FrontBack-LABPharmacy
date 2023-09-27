import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import { PharmaFormStore } from "../../components/Pharma/PharmaFormStore";

const AddPharmacyStorePage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout} = useContext(AuthContext);
    
    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            <PharmaFormStore />
            <button 
                type="button"
                className="btn btn-danger mx-3 my-2"
                onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default AddPharmacyStorePage;