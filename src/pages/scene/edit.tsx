import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker } from "antd";

export const SceneEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});
  const sceneData = queryResult?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item label={"Description"} name="description" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Budget"} name="budget" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Minutes"} name="minutes" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Location"} name="location" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Date Shot"} name="date_shot" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label={"Actors Involved"} name="actors_involved" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Film ID"} name="film_id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
