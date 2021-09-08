import React from 'react';
interface Props {
  cell_id: string;
  className: string;
}

export const formatCellHour = (cell_id: string) => {
  const format = `${parseInt(cell_id.substr(4)) < 9 ? '0' : ''}${
    parseInt(cell_id.substr(4)) + 1
  }:00`;
  return format;
};

const CellHour: React.FC<Props> = ({ cell_id, className }) => {
  return (
    <>
      {cell_id.substr(0, 2) === 'd0' && cell_id.substr(4) !== '23' && (
        <div className={className}>{formatCellHour(cell_id)}</div>
      )}
    </>
  );
};

export default CellHour;
