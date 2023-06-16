import { Method } from '@prisma/client';

const setPoints = (method: Method) => {
  let points = 0;
  if (
    method === 'Watched_Data' ||
    method === 'Watched_Daily_Species1' ||
    method === 'Watched_Daily_Species2' ||
    method === 'Watched_Daily_Species3' ||
    method === 'Watched_Daily_Species4' ||
    method === 'Participation'
  ) {
    points = 1;
  } else if (method === 'Quiz') {
    points = 2;
  } else if (method === 'Watched_Video') {
    points = 3;
  } else if (
    method === 'Joined_Campaign1' ||
    method === 'Joined_Campaign2' ||
    method === 'Joined_Campaign3' ||
    method === 'Draw_Degree2'
  ) {
    points = 5;
  } else if (method === 'Draw_Degree1') {
    points = 15;
  }

  return points;
};

export { setPoints };
