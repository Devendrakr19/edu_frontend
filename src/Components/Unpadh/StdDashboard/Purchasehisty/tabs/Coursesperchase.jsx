import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export default function Coursesperchase() {
  const columns = [
    { id: "course", label: "Course Name", minWidth: 170 },
    { id: "date", label: "Date", minWidth: 170, align: "center" },
    { id: "total_price", label: "Total Price", minWidth: 170, align: "center" },
    {
      id: "payment_type",
      label: "Payment Type",
      minWidth: 170,
      align: "center",
    },
    { id: "download", label: "Download", minWidth: 170, align: "center" },
  ];
  const rows = [
    {
      course: "MERN stack",
      date: "12/06/2024",
      total_price: 4999,
      payment_type: "Rupay****2822",
      download: (
        <>
          <div className="flex justify-center gap-[10px] items-center">
            <button className="site_btn py-[1px]">Receipt</button>
            <button className="site_btn py-[1px]">Invoice</button>
          </div>
        </>
      ),
    },
    {
      course: "MERN stack",
      date: "12/06/2024",
      total_price: 4999,
      payment_type: "Rupay****2822",
      download: (
        <>
          <div className="flex justify-center gap-[10px] items-center">
            <button className="site_btn py-[1px]">Receipt</button>
            <button className="site_btn py-[1px]">Invoice</button>
          </div>
        </>
      ),
    },
    {
      course: "MERN stack",
      date: "12/06/2024",
      total_price: 4999,
      payment_type: "Rupay****2822",
      download: (
        <>
          <div className="flex justify-center gap-[10px] items-center">
            <button className="site_btn py-[1px]">Receipt</button>
            <button className="site_btn py-[1px]">Invoice</button>
          </div>
        </>
      ),
    },
    {
      course: "MERN stack",
      date: "12/06/2024",
      total_price: 4999,
      payment_type: "Rupay****2822",
      download: (
        <>
          <div className="flex justify-center gap-[10px] items-center">
            <button className="site_btn py-[1px]">Receipt</button>
            <button className="site_btn py-[1px]">Invoice</button>
          </div>
        </>
      ),
    },
    {
      course: "MERN stack",
      date: "12/06/2024",
      total_price: 4999,
      payment_type: "Rupay****2822",
      download: (
        <>
          <div className="flex justify-center gap-[10px] items-center">
            <button className="site_btn py-[1px]">Receipt</button>
            <button className="site_btn py-[1px]">Invoice</button>
          </div>
        </>
      ),
    },
    {
      course: "MERN stack",
      date: "12/06/2024",
      total_price: 4999,
      payment_type: "Rupay****2822",
      download: (
        <>
          <div className="flex justify-center gap-[10px] items-center">
            <button className="site_btn py-[1px]">Receipt</button>
            <button className="site_btn py-[1px]">Invoice</button>
          </div>
        </>
      ),
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <div className="mt-[10px]">
        <Paper sx={{ width: "100%"}}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{fontSize:"16px", fontWeight:"600"}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}  style={{ borderColor: '#e5e5e5' }} >
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination 
            rowsPerPageOptions={[5, 10, 30]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}
