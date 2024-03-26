import { useState } from "react";
import Button from "./button";
import { CheckIcon, CopyIcon } from "./icons";

type CopyBtnProps = {
  value: string | number;
};

export const CopyBtn = ({ value }: CopyBtnProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const onClick = async () => {
    if (value) {
      await navigator.clipboard.writeText(`${value}`);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <Button
      type="button"
      color="primary"
      size="sm"
      disabled={!value}
      onClick={onClick}
    >
      {isCopied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
};
