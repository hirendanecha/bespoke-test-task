import { Button } from "antd";
import styled from "styled-components";

export const TopHeaderWrapper = styled.div`
  display: flex;
  padding: 30px 27px;

  .ant-btn {
    border: none;
    border-top: 1px solid rgb(217, 217, 217);
    border-bottom: 1px solid rgb(217, 217, 217);
    border-right: 1px solid rgb(217, 217, 217);
  }

  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border: none;
    border-top: 1px solid rgb(217, 217, 217);
    border-bottom: 1px solid rgb(217, 217, 217);
    border-left: 1px solid rgb(217, 217, 217);
  }

  .ant-input-affix-wrapper:focus {
    border: none;
    border-top: 1px solid rgb(217, 217, 217);
    border-bottom: 1px solid rgb(217, 217, 217);
    border-left: 1px solid rgb(217, 217, 217);
    box-shadow: none;
  }
`;

export const InputDateWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const PrimaryButton = styled(Button)`
  &.ant-btn-primary {
    background: #24dd85;
    border: #24dd85;
    margin: 0 5px;
    border-radius: 4px;
    width: 100%;
    max-width: 130px;
  }
`;
