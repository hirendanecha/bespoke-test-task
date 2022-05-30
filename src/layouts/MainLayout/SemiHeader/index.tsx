import React, { FC, ReactNode } from "react";
import SemiHeaderLeft, { SemiHeaderLeftProps } from "./SemiHeaderLeft";
import SemiHeaderRight from "./SemiHeaderRight";
import { SemiHeaderWrapper } from "./styles";

type SemiHeaderProps = {
  children?: ReactNode;
  left?: SemiHeaderLeftProps;
  current?: string;
};

const SemiHeader: FC<SemiHeaderProps> = (props) => {
  return (
    <SemiHeaderWrapper>
      <SemiHeaderLeft
        text={props.left?.text}
        {...(props.left?.extraText ? { extraText: props.left?.extraText } : {})}
      />
      <SemiHeaderRight current={props.current} />
    </SemiHeaderWrapper>
  );
};

export default SemiHeader;
