// import { createSelector } from 'reselect';

// // export const todoListSelector = state => {
// //     const todoRemaining = state.todoList.filter((todo) => {
// //         return todo.name.includes(state.filters.search);
// //     });
// //     return todoRemaining;
// // };

// export const searchTextSelector = state => (state.filters.search);

// export const todoListSelector = state => state.todoList;

// export const filterStatusSelector = state => state.filters.status;

// export const filterPrioritySelector = state => state.filters.priority;

// export const todoRemainningSelector = createSelector(
//     todoListSelector,
//     searchTextSelector,
//     filterStatusSelector,
//     filterPrioritySelector,
//     (todoList, searchText, status, priority) => {
//         return todoList
//             .filter((todo) => {
//                 return todo.name.includes(searchText);
//             })
//             .filter(todo => {
//                 return priority.length ? priority.includes(todo.priority) : true;
//             })
//             .filter(todo => {
//                 if (status === 'All') return true;
//                 if (status === 'Completed') return todo.completed;
//                 if (status === 'Todo') return !todo.completed;
//             })
