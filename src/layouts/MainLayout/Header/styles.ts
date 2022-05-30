import { Card, Input } from "antd";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  height: 90px;
  padding: 0 27px;
`;
export const SearchBar = styled(Input.Search)`
  .ant-input-group-addon {
    display: none;
  }

  .ant-input-wrapper {
    max-width: 50%;
  }

  .ant-input {
    color: #b3b3b3;
    font-size: 16px;
  }

  .ant-input-prefix {
    margin-right: 10px;
  }

  svg {
    color: #b3b3b3;
  }
`;

export const UserAction = styled(Card.Meta)`
  align-items: center;
  border-bottom: none !important;

  .ant-card-meta-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #2d405a;
    margin-bottom: 0 !important;
  }

  .ant-card-meta-description {
    font-size: 12px;
    color: #8a98ac;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
`;
