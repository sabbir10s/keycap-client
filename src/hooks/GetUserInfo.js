import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";


const GetUserInfo = (email) => {
    const navigate = useNavigate();
    const {
        data: userInfo,
        isLoading,
        refetch,
    } = useQuery(["userInfo", email], () =>
        fetch(`https://nexiq-server.onrender.com/user/${email}`, {
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem("accessToken");
                navigate("/signIn");
            }
            return res.json();
        })
    );

    return { userInfo, isLoading, refetch };
};

export default GetUserInfo;
