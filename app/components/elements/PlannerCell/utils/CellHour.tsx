import React from 'react';
import { formatCellHour } from './formatCellHour';

interface Props {
  cell_id: string;
  className: string;
}

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
