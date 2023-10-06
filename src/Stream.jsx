import  { useEffect } from 'react';
import OvenPlayer from 'ovenplayer';


function Stream() {
  useEffect(() => {
    // Initialize OvenPlayer
    const player = OvenPlayer.create('player_id', {
      sources: [
        {
          label: 'label_for_webrtc',
          type: 'webrtc',
          file: 'ws://13.38.173.241:3333/app/1',
        },
      ],
    });
    

  }, []);

  return (
    <div>
      {/* OvenPlayer will be initialized inside this element. */}
      <div id="player_id"></div>

      {/* Load OvenPlayer via CDN */}
      <script src="https://cdn.jsdelivr.net/npm/ovenplayer/dist/ovenplayer.js"></script>
    </div>
  );
}

export default Stream;