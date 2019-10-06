const { query } = require('./index');

exports.createToken = async videoId => {
  const res = await query('INSERT INTO public.tokens(video_id) VALUES($1) RETURNING id', [videoId]);
  return res.rows[0];
};
