import { useAuthContext } from "../context/AuthContext";
import useAxios from "./useAxios";
import { useQuery } from "react-query";

const useAdmin = () => {
  const { user, loading } = useAuthContext();
  const [axiosSecure] = useAxios();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryHash: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
      return res.data.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
