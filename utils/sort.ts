import { Claim } from "@/hooks/useGetClaims";

export type SortDescriptor = {
  column: keyof Claim;
  direction: "ascending" | "descending";
};

export const sort = (arr: any[], sortDescriptor: SortDescriptor) => {
  return [...arr]?.sort((a, b) => {
    const key = sortDescriptor.column;
    let first = a[key];
    let second = b[key];

    if (first === null) first = -Infinity;
    if (second === null) second = -Infinity;

    let comparison = 0;
    if (typeof first === "number" && typeof second === "number") {
      comparison = first - second;
    } else {
      comparison = String(first).localeCompare(String(second));
    }
    return sortDescriptor.direction === "ascending" ? comparison : -comparison;
  });
};
