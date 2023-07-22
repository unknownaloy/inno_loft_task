import ReactPlayer from "react-player/youtube";

function VideoSection() {
	return (
		<div className="flex flex-col items-center justify-center space-y-[20px] rounded-[6px] bg-white p-[20px] drop-shadow-md">
			<p className="self-start text-[16px] font-semibold">Video</p>
			<ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
		</div>
	);
}

export default VideoSection;
