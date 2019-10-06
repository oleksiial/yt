import React from 'react';
import useYoutubePlayer from './hooks/useYoutubePlayer';

const Youtube = ({ data: { videoId, token }, onSuccess }) => {
  const onStateChange = async event => {
    if (event.data === 0) {
      // 0 - end state
      const dataRaw = await fetch('http://localhost:3001/success', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ token })
      });
      const data = await dataRaw.json();
      if (data.bonusToken) {
        onSuccess(data.bonusToken);
      }
    }
  };

  useYoutubePlayer({ videoId, onStateChange });

  return (
    <div>
      <div id="player" />
    </div>
  );
};

export default Youtube;
