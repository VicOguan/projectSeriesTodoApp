import React from 'react'

export const TableRowItem: React.FC<{
    rowNumber: number,
    rowNames: string,
    rowDescription: string,
    rowStats: string,
    deleteItems: Function
}> = (props) => {
  return (
   <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
   onClick={() => props.deleteItems(props.rowNumber)}>
    <th className="whitespace-nowrap px-6 py-4 font-semibold"
    scope='row'>{props.rowNumber}</th>
    <td className="whitespace-nowrap px-6 py-4">{props.rowNames}</td>
    <td className="whitespace-nowrap px-6 py-4">{props.rowDescription}</td>
    <td className="whitespace-nowrap px-6 py-4">{props.rowStats}</td>
   </tr>
  )
}