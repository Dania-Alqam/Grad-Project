import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummy";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "الرقم", width: 100 },
    {
      field: "teacher",
      headerName: "اسم المدرس الكامل",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "contact-info", headerName: "معلومات التواصل", width: 200 },
    {
      field: "Department Name",
      headerName: "اسم الدائرة",
      width: 200,
    },
    {
      field: "office",
      headerName: "رقم المكتب",
      width: 160,
    },
    {
      field: "office-p",
      headerName: "مكان المكتب",
      width: 160,
    },
    {
      field: "action",
      headerName: "تحديث",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">تعديل</button>
            </Link>
           
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}
