import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import "./user.scss";
import users from "./userData";
import { getUser } from "../../api/users";

export const User = () => {
  const [colWidth1, setColWidth1] = useState("40%");
  const [colWidth2, setColWidth2] = useState("60%");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    document.getElementsByClassName("mainContainer")[0].style.display = "flex";
    getUser()
      .then((res) => {
        setUserList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
      width: colWidth1,
    },
    {
      name: "Address",
      selector: "walletAddress",
      sortable: true,
      width: colWidth2,
    },
  ];

  return (
    <div className="user">
      <DataTable
        title="User List"
        columns={columns}
        data={userList}
        defaultSortFieldId={1}
        pagination
        striped
        highlightOnHover
        responsive
      />
    </div>
  );
};
