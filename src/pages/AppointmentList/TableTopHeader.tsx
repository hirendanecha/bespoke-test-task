import React from "react";
import { DatePicker, Input, Col, Row } from "antd";
import { InputDateWrapper, PrimaryButton, TopHeaderWrapper } from "./styles";

const TableTopHeader = () => {
  const onSearch = (value: string) => console.log(value);
  return (
    <TopHeaderWrapper>
      <Col span={21}>
        <InputDateWrapper>
          <Input.Search
            size="large"
            placeholder="Search"
            allowClear
            onSearch={onSearch}
          />

          <DatePicker />
        </InputDateWrapper>
      </Col>

      <Col span={3}>
        <Row justify="center">
          <PrimaryButton size="large" type="primary">
            Search
          </PrimaryButton>
        </Row>
      </Col>
    </TopHeaderWrapper>
  );
};

export default TableTopHeader;
