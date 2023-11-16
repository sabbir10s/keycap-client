import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import UsersRow from "./UsersRow";
import useAxios from "../../../hooks/useAxios";
const AllUsers = () => {
  const [axiosSecure] = useAxios();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure.get(`/user`);
    return res.data;
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto mx-5 mt-5">
      <p className="text-2xl font-bold text-primary-700">Menage All Users</p>
      <div className="divider mt-3"></div>

      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UsersRow
              user={user}
              index={index}
              key={user._id}
              refetch={refetch}
            ></UsersRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
