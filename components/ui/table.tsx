import React from "react";
import { ChevronUpIcon, ChevronDownIcon, HorizontalLineIcon } from "./icons";

export interface TableColumn {
  key: string;
  title: string;
  allowsSorting?: boolean;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  onSortChange?: (key: string, direction: "ascending" | "descending") => void;
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  selectedKey?: string | null;
  uniqueKey?: string;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  onSortChange,
  topContent,
  bottomContent,
}) => {
  const [sortState, setSortState] = React.useState({
    key: "",
    direction: "ascending" as "ascending" | "descending" | null,
  });

  const handleSortChange = (column: TableColumn) => {
    if (!column.allowsSorting) return;

    const newDirection =
      sortState.key === column.key && sortState.direction === "ascending"
        ? "descending"
        : "ascending";

    setSortState({ key: column.key, direction: newDirection });
    if (onSortChange) {
      onSortChange(column.key, newDirection);
    }
  };

  const renderSortIcon = (column: TableColumn) => {
    if (sortState.key !== column.key || !column.allowsSorting) {
      return null;
    }
    return sortState.direction === "ascending" ? (
      <ChevronUpIcon className="h-4 w-4 inline" />
    ) : (
      <ChevronDownIcon className="h-4 w-4 inline" />
    );
  };

  return (
    <div className="overflow-x-auto flex flex-col h-full flex-grow">
      <div className="mb-4">{topContent}</div>
      <div className="flex-grow">
        <table className="w-full table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.key}
                  onClick={
                    column.allowsSorting
                      ? () => handleSortChange(column)
                      : undefined
                  }
                  className={`text-left px-3 py-3 ${
                    column.allowsSorting ? "cursor-pointer" : ""
                  } ${index === 0 ? "rounded-tl-lg rounded-bl-lg" : ""} ${
                    index === columns.length - 1
                      ? "rounded-tr-lg rounded-br-lg"
                      : ""
                  }`}
                >
                  <div className="flex justify-start items-center gap-2">
                    <span className="uppercase text-sm">{column.title}</span>
                    <span>
                      {column.allowsSorting
                        ? // Render sort icon or an invisible placeholder
                          renderSortIcon(column) || (
                            <HorizontalLineIcon className="h-4 w-4 inline" />
                          )
                        : null}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  {columns.map((column, colIndex) => (
                    <td
                      key={`${column.key}-${index}`}
                      className={`px-3 py-3 ${
                        colIndex === 0 ? "rounded-tl-lg rounded-bl-lg" : ""
                      } ${
                        colIndex === columns.length - 1
                          ? "rounded-tr-lg rounded-br-lg"
                          : ""
                      }`}
                    >
                      {item[column.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-4 justify-end">{bottomContent}</div>
    </div>
  );
};

export default Table;
