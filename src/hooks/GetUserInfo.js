import { useQuery } from "react-query";

const GetUserInfo = (email) => {
    const {
        data: userInfo,
        isLoading,
        refetch,
    } = useQuery(["userInfo", email], () =>
        fetch(`https://nexiq-server.onrender.com/user/${email}`, {
        }).then((res) => res.json())
    );

    return { userInfo, isLoading, refetch };
};

export default GetUserInfo;
