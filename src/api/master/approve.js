import { master } from './master';

export const getVender = () => {
  return master.get('/master/venders/getApproveList');
};
