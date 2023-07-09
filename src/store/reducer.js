import { actions } from "./actions";

export default function reducer(state = [], action) {
	switch (action.type) {
		case actions.LOGIN:
			return [...state];

		default: return [...state];
	}
}