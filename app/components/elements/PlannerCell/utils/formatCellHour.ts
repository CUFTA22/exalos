export const formatCellHour = (cell_id: string) => {
  const format = `${parseInt(cell_id.substr(4)) < 9 ? '0' : ''}${
    parseInt(cell_id.substr(4)) + 1
  }:00`;
  return format;
};
