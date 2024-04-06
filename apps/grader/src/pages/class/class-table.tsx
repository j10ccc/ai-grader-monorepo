import { ClassEntities } from "@ai-grader/entities";
import { Link } from "@tanstack/react-router";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import useClassList from "@/hooks/class/use-class-list";

const columns: ColumnsType<ClassEntities.Class> = [
  { title: "#", dataIndex: "id", width: 60 },
  { title: "班级", dataIndex: "name", width: 200 },
  { title: "人数", dataIndex: "stuCount" },
  {
    title: "操作",
    render: (_, record) => <Link to={`analysis/${record.id}`}>分析</Link>,
    width: 80
  },
];

export default function ClassTable() {
  const { classes } = useClassList();

  return (
    <Table
      dataSource={classes}
      columns={columns}
      rowKey="id"
      pagination={{ pageSize: 8 }}
      bordered
    />
  );
}