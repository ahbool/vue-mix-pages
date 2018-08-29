
export const evenOrOdd = state => {
    return state.count % 2 === 0
        ? '双数...'
        : '单数...'
}

export const doneTodos = state => {
    return state.todos.filter(todo => todo.done)
}

export const doneTodosCount = (state, getters) => {
    return getters.doneTodos.length
}
