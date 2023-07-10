import SearchBar from "./SearchBar";

function Navbar() {
	return (
		<div className="fixed flex h-[55px] w-screen items-center bg-white px-[240px] py-[14px] drop-shadow-lg">
			<div className="mr-[30px] w-[280px]">
				<img
					src="https://img.innoloft.com/logo.svg"
					className="h-[26.29px] text-white "
				/>
			</div>
			<SearchBar />
		</div>
	);
}

export default Navbar;
