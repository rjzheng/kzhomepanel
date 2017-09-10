/* Actions */
// Import Actions
// import { ADD_TASK, REMOVE_TASK } from 'actions';
// Initial state params
const GLOBAL_STATE = { tasks: [] };

export var globalReducer = (state=GLOBAL_STATE, action) => {
	switch(action.type) {
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
