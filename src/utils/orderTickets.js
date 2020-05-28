import _ from 'lodash';

//метод сортировки
export const orderTickets = (arr, options, direction) => {
  return _.orderBy(arr, options, direction);
};
