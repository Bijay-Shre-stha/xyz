import {
  BlockChainIcon,
  DataScienceIcon,
  InteractiveTechnologyIcon,
  OpenInnovationIcon,
} from "@/assets/icons";
import React from "react";
import { JsxElement } from "typescript";

type Props = {
  icon: string;
};

type Icons = {
  [key: string]: React.ReactElement;
};

const TrackIcon = ({ icon }: Props): React.ReactElement => {
  const icons: Icons = {
    "data-science": <DataScienceIcon />,
    blockchain: <BlockChainIcon />,
    "interactive-technology": <InteractiveTechnologyIcon />,
    "open-innovation": <OpenInnovationIcon />,
  };

  return icons[icon] ?? <></>;
};

export default TrackIcon;
