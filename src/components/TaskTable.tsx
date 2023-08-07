import React from "react";
import { TableRowItem } from "./TableRowItem";

export const TaskTable: React.FC<{
  items: TaskModel[];
  deleteItems: Function;
}> = (props) => {
  return (
    <div className="overflow-hidden">
    <table className="min-w-full text-left text-sm font-medium">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
        <th scope="col" className="px-6 py-4">
            #
          </th>
          <th scope="col" className="px-6 py-4">
            Name
          </th>
          <th scope="col" className="px-6 py-4">
            Description
          </th>
          <th scope="col" className="px-6 py-4">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
      
        {
            props.items.map(item => (
                <TableRowItem 
                    key = {item.rowNumber}
                    rowNumber={item.rowNumber}
                    rowNames={item.rowNames}
                    rowDescription={item.rowDescription}
                    rowStats={item.rowStats}
                    deleteItems={props.deleteItems}
                />
            ))
        }
        
      </tbody>
    </table>
    </div>
  );
};
