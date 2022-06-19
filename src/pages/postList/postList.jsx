import "./postList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PostList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "اسم الطالب ",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "date", headerName: "التاريخ", width: 120 },
    { field: "time", headerName: "الوقت", width: 120 },

    {
      field: "content",
      headerName: "المحتوى",
      width: 500,
    },
    {
        field: "action",
        headerName: "الحالة",
        width: 200,
        renderCell: (params) => {
          return (
            <>
            <button className="productListEdit">قبول</button>
            <button className="productListEdit">رفض</button>

             
            </>
          );
        },
      },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}
