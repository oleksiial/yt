const { query } = require('./index');

exports.createVideo = async (videoId, duration) => {
  const res = await query('INSERT INTO public.videos(id, duration) VALUES($1, $2) RETURNING id', [
    videoId,
    duration
  ]);
  return res.rows[0];
};

exports.getVideoByToken = async token => {
  const res = await query(
    'SELECT v.id, v.duration, v.n_bonuses, t.created_at FROM videos v JOIN tokens t ON t.video_id = v.id WHERE t.id = $1',
    [token]
  );
  return res.rows[0];
};

exports.updateVideo = async (videoId, nBonuses) => {
  const res = await query('UPDATE videos SET n_bonuses = $1 WHERE id = $2', [nBonuses, videoId]);
  return res.rows[0];
};

exports.getRandomVideo = async () => {
  const res = await query('SELECT id FROM videos ORDER BY RANDOM() LIMIT 1');
  return res.rows[0];
};
