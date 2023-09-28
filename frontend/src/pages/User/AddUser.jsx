import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddUserCard from "../../components/User/AddUserCard";


const AddUserPage = () => {

    const history = useNavigate();

    function handleGoBack() {
        history(-1);
    }

    return (
        <>
            <AddUserCard />
        </>
    );
}

export default AddUserPage;