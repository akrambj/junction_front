import { useEffect } from "react";
import OvenPlayer from "ovenplayer";

function Stream({ uavNumber }) {
  useEffect(() => {
    const player = OvenPlayer.create("player_id", {
      sources: [
        {
          label: "label_for_webrtc",
          type: "webrtc",
          file: `ws://13.38.173.241:3333/app/${uavNumber}`,
        },
      ],
    });
  }, []);

  return (
    <div>
      <div id="player_id"></div>

      <script src="https://cdn.jsdelivr.net/npm/ovenplayer/dist/ovenplayer.js"></script>
    </div>
  );
}

export default Stream;
