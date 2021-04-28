import {
  format as formatDate,
} from 'date-fns';

function formatStockDate(date: Date): string {
  return formatDate(date, 'YYYY-MM-DD');
}

export {
  formatStockDate,
}