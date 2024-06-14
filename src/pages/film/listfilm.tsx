import { List, useTable, EditButton, ShowButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";

// Define la interfaz para los datos de la tabla
interface Film {
  id: string;
  title: string;
  director: string;
  duration: number;
  release_year: number;
  genre: string;
  language: string;
  country: string;
  synopsis: string;
}

export const FilmList = () => {
  const { tableProps } = useTable<Film>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column<Film> dataIndex="id" title={"ID"} />
        <Table.Column<Film> dataIndex="title" title={"Title"} />
        <Table.Column<Film> dataIndex="director" title={"Director"} />
        <Table.Column<Film> dataIndex="duration" title={"Duration"} />
        <Table.Column<Film> dataIndex="release_year" title={"Release Year"} />
        <Table.Column<Film> dataIndex="genre" title={"Genre"} />
        <Table.Column<Film> dataIndex="language" title={"Language"} />
        <Table.Column<Film> dataIndex="country" title={"Country"} />
        <Table.Column<Film> dataIndex="synopsis" title={"Synopsis"} />
        <Table.Column<Film>
          title={"Actions"}
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
