import { createStore } from 'redux'


//first param is payload, that is the input from store.dispatch. We need to object destructure the parameter payload to access the input from store.dispatch. 
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    //we dont need this condition anymore because it is fulfilled in the paremeter from the destructuring and default value.
    //incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy: 1 

    //We use this instead but it can be simplified even further
    //incrementBy: incrementBy

    incrementBy


})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count = 100 } = {}) => ({
    type: 'SET',
    count
})


//REDUCER FUNCTION
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
        default:
            return state
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


//actions -An object that gets sent to the store

//increment, decrement, reset

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
store.dispatch(incrementCount({ incrementBy: 5 }))
// store.dispatch({
//     type: 'INCREMENT'
// })

store.dispatch(incrementCount())

// store.dispatch({
//     type: 'RESET'
// })

store.dispatch(resetCount())

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })


store.dispatch(decrementCount({ decrementBy: 10 }))

// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(setCount({ count: 101 }))