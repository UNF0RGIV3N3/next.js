import ReactPlayer from 'react-player'

export default function Twitch() {
    return (
        <ReactPlayer
            url={"https://www.twitch.tv/pow3rtv"}
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
