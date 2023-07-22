import { NavLink } from "react-router-dom";

function SideNav() {
	return (
		<div className="mr-[31px] flex w-[280px] flex-col space-y-[8px]">
			<NavLink
				to="/"
				className={navData =>
					`${
						navData.isActive ? "font-bold text-primary underline" : "text-dark"
					}`
				}>
				HOME
			</NavLink>
			<NavLink
				to="product"
				className={navData =>
					`${
						navData.isActive ? "font-bold text-primary underline" : "text-dark"
					} hover:text-primary`
				}>
				PRODUCT
			</NavLink>
		</div>
	);
}

export default SideNav;
