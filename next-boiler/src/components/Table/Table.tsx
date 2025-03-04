import React from "react";
import { TableProps } from "./Table.types";
import { IconButton } from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  PhotoLibrary as PhotoIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";

const Table: React.FC<TableProps> = ({
  columns = [],
  data = [],
  showIcons = { edit: false, delete: false, photos: false, download: false },
  actions = [],
  emptyMessage = "No data found",
}) => {
  return (
    <div className="flex flex-col cursor-default max-md:overflow-x-auto w-full scrollbar-webkit">
      <div className=" overflow-x-auto scrollbar-webkit">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border border-dark-300 rounded-lg divide-y divide-dark-200">
            <div className="overflow-hidden rounded-lg">
              <div className="relative max-h-[55vh] max-md:overflow-y-auto scrollbar-webkit">
                <table className="min-w-full divide-y divide-dark-300 text-sm sm:text-base">
                  <thead className="bg-surface-200 text-bodyRegular18 text-black-400 sticky top-0 z-10 shadow-sm shadow-dark-200">
                    <tr>
                      {columns.map((column) => (
                        <th
                          key={column.key}
                          className={`px-4 sm:px-6 py-3 text-center ${
                            column.className || ""
                          }`}
                        >
                          {column.label}
                        </th>
                      ))}
                      {(showIcons.edit ||
                        showIcons.delete ||
                        showIcons.photos ||
                        showIcons.download) && (
                        <th className="px-4 sm:px-6 py-3 text-center">
                          Actions
                        </th>
                      )}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-dark-200 bg-surface-100">
                    {data.length > 0 ? (
                      data.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          {columns.map((column) => (
                            <td
                              key={column.key}
                              className="px-4 sm:px-6 py-3 whitespace-nowrap text-gray-800 text-center"
                            >
                              {row[column.key] ?? "-"}
                            </td>
                          ))}
                          {(showIcons.edit ||
                            showIcons.delete ||
                            showIcons.photos ||
                            showIcons.download) && (
                            <td className="px-4 sm:px-6 py-2 whitespace-nowrap text-gray-800 text-center flex flex-wrap gap-2 justify-center">
                              {showIcons.edit && (
                                <IconButton color="primary" size="small">
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              )}
                              {showIcons.delete && (
                                <IconButton color="primary" size="small">
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              )}
                              {showIcons.photos && (
                                <IconButton color="primary" size="small">
                                  <PhotoIcon fontSize="small" />
                                </IconButton>
                              )}
                              {showIcons.download && (
                                <IconButton color="primary" size="small">
                                  <DownloadIcon fontSize="small" />
                                </IconButton>
                              )}
                            </td>
                          )}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={columns.length + 1}
                          className="text-center w-full py-4 text-dark-300"
                        >
                          {emptyMessage}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
