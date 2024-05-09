import { Claim, useGetClaims } from "../../hooks/useGetClaims";
import Button from "../ui/button";
import { useMemo, useState } from "react";
import Table, { TableColumn } from "../ui/table";
import { sort } from "../../utils/sort";
import { DateTime } from "luxon";

export type ClaimTokensProps = {
  onBack: () => void;
  onContinue: (claim: Claim) => void;
};

export const ClaimTokens = ({ onContinue, onBack }: ClaimTokensProps) => {
  const { isLoading, claims } = useGetClaims();
  const [sortDescriptor, setSortDescriptor] = useState<{
    column: keyof Claim;
    direction: "ascending" | "descending";
  }>({ column: "timestamp", direction: "descending" });

  const columns: TableColumn[] = [
    { key: "token", title: "Token", allowsSorting: true },
    { key: "amount", title: "Amount", allowsSorting: true },
    { key: "claim", title: "Claim" },
  ];

  const sortedData = useMemo(() => {
    return sort(claims, sortDescriptor);
  }, [claims, sortDescriptor]);

  const tableData = sortedData.map((item) => ({
    ...item,
    timestamp: DateTime.fromISO(item.timestamp).toLocaleString(
      DateTime.DATE_MED
    ),
    amount: item.amount.toFixed(4),
    claim: (
      <Button color="primary" size="sm" onClick={() => onContinue(item)}>
        Claim
      </Button>
    ),
  }));

  const handleSortChange = (
    column: keyof Claim,
    direction: "ascending" | "descending"
  ) => {
    setSortDescriptor({ column, direction });
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg">Available claims</h2>
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <Table
          columns={columns}
          data={tableData}
          onSortChange={(key, direction) =>
            handleSortChange(key as keyof Claim, direction)
          }
        />
      )}
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
        <Button fullWidth onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  );
};
