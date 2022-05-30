import { Space, Table } from "antd";
import React from "react";
import SemiHeader from "../../layouts/MainLayout/SemiHeader";
import {
  MainCreateAppointmentWrapper,
  TableWrapper,
} from "../CreateAppointment/styles";
import TableTopHeader from "./TableTopHeader";
import type { ColumnsType } from "antd/lib/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface DataType {
  key: React.Key;
  time: string;
  capacity: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Slot Timing",
    dataIndex: "time",
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: "Seating Capacity",
    dataIndex: "capacity",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined />
        <DeleteOutlined />
      </Space>
    ),
  },
];
const data: DataType[] = [
  {
    key: "1",
    time: "11:00 - 11:15",
    capacity: 1,
  },
  {
    key: "2",
    time: "11:15 - 11:30",
    capacity: 1,
  },
  {
    key: "3",
    time: "11:30 - 11:45",
    capacity: 2,
  },
  {
    key: "4",
    time: "11:45 - 12:00",
    capacity: 2,
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.time === "Disabled User", // Column configuration not to be checked
    name: record.time,
  }),
};

const AppointmentList = () => {
  return (
    <MainCreateAppointmentWrapper>
      <SemiHeader
        left={{ text: "Appointment slots", extraText: `(${data?.length})` }}
        current="appointment-list"
      />

      <TableTopHeader />
      <TableWrapper>
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          pagination={false}
          columns={columns}
          dataSource={data}
        />
      </TableWrapper>
    </MainCreateAppointmentWrapper>
  );
};

export default AppointmentList;
