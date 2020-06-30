// manual merge multiple stats in a cumulated stat
const mergeStats = (a, b) => {
  const stats = {
    count: a.count + b.count,
    duration: a.duration * a.count + b.duration * b.count,
    status: Object.keys(a.status).reduce(
      (all, key) => ({
        ...all,
        [key]: {
          count: a.status[key].count + b.status[key].count,
          label: a.status[key].label,
        },
      }),
      {},
    ),
    monthly: {},
    processing: {},
  };
  stats.duration /= stats.count;

  Object.keys(a.monthly).forEach((key) => {
    if (!stats.monthly[key]) {
      stats.monthly[key] = {
        count: 0,
        duration: 0,
        status: Object.keys(a.status).reduce(
          (all, st) => ({
            ...all,
            [st]: {
              count: 0,
              label: a.monthly[key].status[st].label,
            },
          }),
          {},
        ),
      };
    }
    stats.monthly[key].count += a.monthly[key].count;
    stats.monthly[key].duration += a.monthly[key].duration * a.monthly[key].count;
    Object.keys(stats.monthly[key].status).forEach((st) => {
      stats.monthly[key].status[st].count += a.monthly[key].status[st].count;
    });
  });
  Object.keys(b.monthly).forEach((key) => {
    if (!stats.monthly[key]) {
      stats.monthly[key] = {
        count: 0,
        duration: 0,
        status: Object.keys(a.status).reduce(
          (all, st) => ({
            ...all,
            [st]: {
              count: 0,
              label: b.monthly[key].status[st].label,
            },
          }),
          {},
        ),
      };
    }
    stats.monthly[key].count += b.monthly[key].count;
    stats.monthly[key].duration += b.monthly[key].duration * b.monthly[key].count;
    Object.keys(stats.monthly[key].status).forEach((st) => {
      stats.monthly[key].status[st].count += b.monthly[key].status[st].count;
    });
  });
  Object.keys(stats.monthly).forEach((key) => {
    stats.monthly[key].duration /= stats.monthly[key].count;
  });

  return stats;
};

export default mergeStats;
