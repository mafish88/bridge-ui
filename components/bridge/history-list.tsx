import { useState } from "react";
import Image from "next/image";
import Table, { TableColumn } from "../ui/table";
import { sort } from "../../utils/sort";
import { DateTime } from "luxon";
import { Transfer } from "@/types/transfer";
import { utils } from "ethers";

interface HistoryListProps {
  isFetching: boolean;
  transfers: Transfer[];
  nativeCurrency: string;
}
export const HistoryList = ({
  isFetching,
  transfers,
  nativeCurrency,
}: HistoryListProps) => {
  const [sortDescriptor, setSortDescriptor] = useState<{
    column: keyof Transfer;
    direction: "ascending" | "descending";
  }>({ column: "timestamp", direction: "descending" });

  const columns: TableColumn[] = [
    { key: "type", title: "Type", allowsSorting: false },
    { key: "token", title: "Token", allowsSorting: false },
    { key: "amount", title: "Amount", allowsSorting: true },
    { key: "fee", title: "Fee", allowsSorting: true },
    { key: "timestamp", title: "Date", allowsSorting: true },
  ];

  if (isFetching) {
    return (
      <div className="flex items-center justify-center h-40">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const sortedData = sort(transfers, sortDescriptor);

  const tableData = sortedData.map((item) => ({
    type: item.type,
    token: item.coin ? (
      <div className="flex items-center gap-4 h-[30px]">
        <Image
          src={item.coin.iconUrl || ""}
          alt={item.coin.name || ""}
          width={item.coin.isImageTall ? 20 : 30}
          height={30}
        />
        {item.coin.symbol || item.coin.name}
      </div>
    ) : null,
    amount: item.amount
      ? utils.formatUnits(item.amount, item.coin?.decimals || 18).slice(0, 8)
      : "0",
    fee: item.fee
      ? `${utils.formatUnits(item.fee)} ${nativeCurrency}`
      : `0 ${nativeCurrency}`,
    timestamp: DateTime.fromSeconds(item.timestamp).toLocaleString(
      DateTime.DATETIME_MED
    ),
  }));

  const handleSortChange = (
    column: keyof Transfer,
    direction: "ascending" | "descending"
  ) => {
    setSortDescriptor({ column, direction });
  };

  return (
    <div className="flex flex-col gap-3">
      <Table
        columns={columns}
        data={tableData}
        onSortChange={(key, direction) =>
          handleSortChange(key as keyof Transfer, direction)
        }
      />
    </div>
  );
};
