import { components } from "react-select";
import Image from "next/image";

export const CustomOption: React.FC<any> = ({ data, ...props }) => (
  <components.Option {...props}>
    <div className="flex items-center gap-4 h-[30px]">
      <Image
        src={data.iconUrl}
        alt={data.chainName || data.name}
        height={30}
        width={data.isImageTall ? 20 : 30}
      />
      {data.chainName || data.symbol || data.name}
    </div>
  </components.Option>
);
export const CustomSingleValue: React.FC<any> = ({ data, ...props }) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-4 h-[30px]">
      <Image
        src={data.iconUrl}
        alt={data.chainName || data.name}
        width={data.isImageTall ? 20 : 30}
        height={30}
      />
      {data.chainName || data.symbol || data.name}
    </div>
  </components.SingleValue>
);
