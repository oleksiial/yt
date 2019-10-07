const { query } = require('./index');

exports.createToken = async videoId => {
  const res = await query('INSERT INTO public.tokens(video_id) VALUES($1) RETURNING id', [videoId]);
  return res.rows[0];
};

exports.deleteToken = async id => {
  await query('DELETE FROM public.tokens WHERE id = $1', [id]);
  return true;
};
