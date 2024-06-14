import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const SceneShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <p>{record?.id}</p>
      <Title level={5}>Description</Title>
      <p>{record?.description}</p>
      <Title level={5}>Budget</Title>
      <p>{record?.budget}</p>
      <Title level={5}>Minutes</Title>
      <p>{record?.minutes}</p>
      <Title level={5}>Location</Title>
      <p>{record?.location}</p>
      <Title level={5}>Date Shot</Title>
      <p>{record?.date_shot}</p>
      <Title level={5}>Actors Involved</Title>
      <p>{record?.actors_involved}</p>
      <Title level={5}>Film ID</Title>
      <p>{record?.film_id}</p>
    </Show>
  );
};
