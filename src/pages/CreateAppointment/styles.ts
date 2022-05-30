import { Button } from "antd";
import styled from "styled-components";

export const MainCreateAppointmentWrapper = styled.div`
  min-height: calc(100vh - 84px);
  background-color: #fafbfd;
`;

export const TabsWrapper = styled.div`
  padding: 20px 10px;
  .ant-tabs-card {
    .ant-tabs-content {
      margin-top: -16px;
      > .ant-tabs-tabpane {
        padding: 16px;
        background: #fafbfd;
      }
    }
    .ant-tabs-tab,
    [data-theme="compact"] .ant-tabs-tab {
      padding: 16px;
      background: #fafbfd;
      border-color: #fafbfd;
    }
    .ant-tabs-tab-active,
    [data-theme="compact"] .ant-tabs-tab-active {
      background: #fafbfd;
      border-color: #fafbfd;
    }
    [data-theme="compact"] .ant-tabs-content {
      margin-top: -8px;
    }
    [data-theme="dark"] .ant-tabs-tab {
      background: transparent;
      border-color: transparent;
    }
    [data-theme="dark"] .ant-tabs-content > .ant-tabs-tabpane {
      background: #141414;
    }
    [data-theme="dark"] .ant-tabs-tab-active {
      background: #141414;
      border-color: #141414;
    }
  }

  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: 1px solid #d4d4d4;
  }

  .ant-tabs-nav {
    padding-top: 47px;
    background-color: #fafbfd;
  }

  .ant-tabs-nav-list {
    transform: translate(15px, 0px) !important;
  }

  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
    margin-left: 0px;
  }

  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    border: none;

    border-bottom: 1px solid #d4d4d4;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;

    color: #2684ff;
    font-size: 16px;
  }

  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active {
    border-left: 1px solid #d4d4d4;
    border-right: 1px solid #d4d4d4;
    border-top: 1px solid #d4d4d4;

    border-bottom: 1px solid transparent;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #2a2a2a;
  }
`;

export const PrimaryButton = styled(Button)`
  &.ant-btn-primary {
    background: #23cffd;
    border: #23cffd;
    border-radius: 4px;
    height: 42px;
    font-weight: 600;
  }
`;

export const CancelButton = styled(Button)`
  border: 1px solid #b3b3b3;
  border-radius: 4px;
  height: 42px;
  color: #b3b3b3;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 18px;
`;

export const FormLabel = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #2a2a2a;
  letter-spacing: 0.01em;
`;
export const FormLabelDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #aaaaaa;
  margin-bottom: 15px;
  max-width: 300px;
`;

export const CreateAppointmentFormWrapper = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 80px;
`;

export const TableWrapper = styled.div`
  display: inline-block;
  width: 100%;
  padding: 0 27px;
`;
