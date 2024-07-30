"use client";
import { useState } from "react";
import Image from "next/image";

const Warning: React.FC = () => {
  let isPermanentlyClosed = true;

  if (typeof window !== "undefined") {
    isPermanentlyClosed = localStorage.getItem("warning-is-closed") === "true";
  }

  const [isClosed, setIsClosed] = useState(isPermanentlyClosed);

  const onClose = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("warning-is-closed", "true");
    }
    setIsClosed(true);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div role="alert" className="alert alert-warning rounded-none shadow-lg">
      <Image src="/warning-icon.svg" alt="Warning" width={24} height={24} />
      <span>
        This bridge is now connected to a test network. Any transactions that
        take place are not using real tokens.
      </span>
      <button className="btn btn-sm" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Warning;
