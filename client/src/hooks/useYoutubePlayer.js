import { useState, useEffect } from 'react';

const useYoutubePlayer = ({ videoId, onStateChange }) => {
  const [yt, setYt] = useState(undefined);

  useEffect(() => {
    window['onYouTubeIframeAPIReady'] = () => {
      console.log('onYouTubeIframeAPIReady');
      setYt(
        // eslint-disable-next-line no-undef
        new YT.Player('player', {
          height: '390',
          width: '640',
          videoId,
          events: {
            onStateChange
          },
          playerVars: {
            // controls: 0,
            disablekb: 1
          }
        })
      );
    };
  }, [onStateChange, videoId]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return yt;
};

export default useYoutubePlayer;
