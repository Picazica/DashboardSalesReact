import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from "@material-ui/icons"
import "./usersList.css"
import { Fragment } from 'react';
import {userRows} from "../../../data.js"
import { Link } from "react-router-dom";


export default function UsersList() {


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'user', headerName: 'User', width: 150, renderCell: (params)=>{
      return (
          <div className="userListUser">
              <img src={params.row.avatar} alt="" className="userListImg"/>
              {params.row.username}
          </div>
      )
  } },
  { field: 'email', headerName: 'Email', width: 170 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'transaction', headerName: 'Transaction', width: 150 },
  {field: "action", headerName: "Action", width: 150, renderCell: (params) => {
      return (
          <Fragment>
              <Link to={"/user/"+params.row.id}>
                <button className="userListBtn">Edit</button>
              </Link>
            <DeleteOutline className="userListDelete"/>
          </Fragment>
      )
  }},
];
    return (
        <div className="userList">
             <DataGrid rows={userRows} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}
