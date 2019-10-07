const express = require('express');
const cors = require('cors');

const { getRandomVideo, getVideoByToken, updateVideo } = require('./db/video');
const { createToken, deleteToken } = require('./db/tokens');

const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;

app.get('/getVideo', async (req, res) => {
  const { id: videoId } = await getRandomVideo();
  const { id: token } = await createToken(videoId);
  res.json({ videoId, token });
});

app.post('/success', async (req, res) => {
  const { token } = req.body;
  const video = await getVideoByToken(token);
  const now = Math.round(new Date() / 1000);
  if (video && now - video.created_at >= video.duration) {
    await updateVideo(video.id, video.n_bonuses + 1);
    await deleteToken(token);
    res.json({ bonusToken: 'BonusToken' });
  } else {
    res.json({ error: 'not valid' });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
