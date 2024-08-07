import { Table } from "antd";
import React from "react";
import "./content.css";

function CustomerDetailsTable() {
  const columns = [
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Order No.",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const data = [
    {
      key: "1",
      customer: "John Doe",
      order: "1001",
      amount: "$300.00",
      status: "Pending",
    },
    {
      key: "2",
      customer: "Jane Smith",
      order: "1002",
      amount: "$150.00",
      status: "Completed",
    },
    {
      key: "3",
      customer: "Mike Johnson",
      order: "1003",
      amount: "$450.00",
      status: "Shipped",
    },
    {
      key: "4",
      customer: "Emily Davis",
      order: "1004",
      amount: "$200.00",
      status: "Cancelled",
    },
    {
      key: "5",
      customer: "David Brown",
      order: "1005",
      amount: "$350.00",
      status: "Completed",
    },
    {
      key: "6",
      customer: "Sarah Wilson",
      order: "1006",
      amount: "$500.00",
      status: "Pending",
    },
    {
      key: "7",
      customer: "James Taylor",
      order: "1007",
      amount: "$400.00",
      status: "Shipped",
    },
  ];

  return (
    <>
      <Table
        className="customer-table"
        columns={columns}
        dataSource={data}
        // scroll={{ y: 250 }}
        pagination={false}
      />
    </>
  );
}

export default CustomerDetailsTable;
