import { List, useTable, EditButton, ShowButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const SceneList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="description" title={"Description"} />
        <Table.Column dataIndex="budget" title={"Budget"} />
        <Table.Column dataIndex="minutes" title={"Minutes"} />
        <Table.Column dataIndex="location" title={"Location"} />
        <Table.Column dataIndex="date_shot" title={"Date Shot"} />
        <Table.Column dataIndex="actors_involved" title={"Actors Involved"} />
        <Table.Column dataIndex="film_id" title={"Film ID"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record} />
              <ShowButton hideText size="small" recordItemId={record} />
              <DeleteButton hideText size="small" recordItemId={record} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
