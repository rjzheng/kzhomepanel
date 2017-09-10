/* Actions */
// Import Actions
// import { SWITCH_TAB } from 'actions';

// Initial state params
const GLOBAL_STATE = { tasks: []};

export var globalReducer = (state=GLOBAL_STATE, action) => {
	switch(action.type) {
		// case 'SWITCH_TAB':
		// 	return {
		//
		// 	}
		// case 'ADD_TASK':
		// return {
		// 	...state,
		// 	tasks: [...state.tasks, action.payload]
		// }
		// case 'REMOVE_TODO':
		// return {
		// 	...state,
		// 	tasks: state.tasks.filter((task) => task.id != action.payload)
		// }
		default:
			return state;
	}
};
