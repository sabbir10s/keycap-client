import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import useAxios from "../../../hooks/useAxios";
import UsersRow from "../../../components/Users/UsersRow";
import { useState } from "react";
import Pagination from "../../../shared/Pagination";
const title = ["No", "Name", "Email", "Role", "Action"];
const MangeUsers = () => {
  const [axiosSecure] = useAxios();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure.get(`/user`);
    return res.data;
  });
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsOffset, setItemsOffset] = useState(0);
  const itemsPerPage = 5;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white border-[1px] border-gray-200/80">
      <h2 className="p-4 font-semibold">USERS LIST</h2>
      <div className="border-b"></div>
      <div className="overflow-x-auto p-4">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-400 ">
                <tr>
                  {title.map((item, idx) => (
                    <th
                      key={idx}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200 ">
                {currentItems.map((user, index) => (
                  <UsersRow
                    user={user}
                    index={index}
                    key={user._id}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="text-gray-700 flex flex-col md:flex-row gap-6 justify-between items-center w-full pl-[15px] pr-[30px] py-6 text-sm">
        <p className="uppercase font-semibold">
          showing ({itemsOffset + 1}- {itemsOffset + currentItems.length}) of{" "}
          {users.length}
        </p>
        <Pagination
          pageCount={pageCount}
          setPageCount={setPageCount}
          itemsOffset={itemsOffset}
          setItemsOffset={setItemsOffset}
          setCurrentItems={setCurrentItems}
          itemsPerPage={itemsPerPage}
          items={users}
        />
      </div>
    </div>
  );
};

export default MangeUsers;
