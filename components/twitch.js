import ReactPlayer from "react-player/lazy";

export default function Twitch() {
    return (
        <ReactPlayer
            url={"https://www.twitch.tv/multiplayerit"}
            playing
            muted
            config={{
                twitch: {
                    options: {
                        parent: "ifood.vercel.app"
                    }
                }
            }}
        />
    )
}
