import styled from "styled-components";

export const SemiHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 27px;
  background-color: #fafbfd;
  border-bottom: 1px solid #d4d4d4;
  border-top: 1px solid #d4d4d4;
  height: 128px;
`;

export const SemiHeaderLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .extraText_dash {
    font-size: 24px;
    color: #828282;
  }
`;

export const SemiHeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const IconWrapper = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 20px;
  background-color: #00ccff;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
  }
`;

export const TitleText = styled.span`
  font-weight: bold;
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.25));
  color: #09477d;
  margin-bottom: 0px;
  font-size: 24px;
`;

export const ExtraText = styled.span`
  font-size: 24px;
  color: #999;
`;

export const BreadcrumbWrapper = styled.div`
  .ant-breadcrumb-link a {
    color: #2684ff;
    font-size: 16px;
  }

  .ant-breadcrumb li:last-child a {
    color: #2684ff;
    font-weight: 600;
    font-size: 16px;
  }

  svg {
    font-size: 16px;
  }
`;
