function DetailsSection() {
	return (
		<div className="flex flex-col items-center justify-center space-y-[20px] rounded-[6px] bg-white p-[20px] drop-shadow-md">
			<p className="self-start text-[16px] font-semibold">Offer Details</p>
			{/*<ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />*/}

			<div className="grid w-full grid-cols-2 gap-[16px]">
				<p>Sprint 1</p>
				<p>Sprint 2</p>
			</div>
		</div>
	);
}

export default DetailsSection;
