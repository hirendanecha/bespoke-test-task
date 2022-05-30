import { MenuOutlined } from "@ant-design/icons";
import React, { FC, ReactNode } from "react";
import {
  ExtraText,
  SemiHeaderLeftWrapper,
  TitleText,
  IconWrapper,
  SemiHeaderTextWrapper,
} from "./styles";

export type SemiHeaderLeftProps = {
  children?: ReactNode;
  icon?: ReactNode | JSX.Element;
  text: string | undefined;
  extraText?: string;
};

const SemiHeaderLeft: FC<SemiHeaderLeftProps> = (props) => {
  return (
    <SemiHeaderLeftWrapper>
      <SemiHeaderTextWrapper>
        <IconWrapper>
          {props.hasOwnProperty("icon") ? props.icon : <MenuOutlined />}
        </IconWrapper>
        <TitleText>{props.text}</TitleText>
      </SemiHeaderTextWrapper>

      {props.hasOwnProperty("extraText") && props?.extraText && (
        <>
          <span className="extraText_dash">-</span>
          <ExtraText>{props.extraText}</ExtraText>
        </>
      )}
    </SemiHeaderLeftWrapper>
  );
};

export default SemiHeaderLeft;
