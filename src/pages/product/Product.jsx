import DetailsSection from "./sections/DetailsSection";
import MainSection from "./sections/MainSection";
import VideoSection from "./sections/VideoSection";

function Product() {
	return (
		<div className="flex flex-col space-y-[21px] w-full">
			<MainSection />
			<VideoSection />
			<DetailsSection />
		</div>
	);
}

export default Product;
