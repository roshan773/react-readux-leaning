const redux = require("redux")
const  {createStore}  = redux;
const combineReducers = redux.combineReducers

const BUY_CAKE = "Buy cake"
const BUY_ICECREAM = "Buy icecream"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux action"
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: "Second Redux action"
    }
}

const cakeinitialstate = {
    Numofcake: 10,
}

const Icecreaminitialstate = {
    NumofIcecream: 20,
}

const cakeReducers = (state = cakeinitialstate, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            Numofcake: state.Numofcake - 1,
        }

        default: return state
    }
}

const icecreamReducer = (state = Icecreaminitialstate, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            NumofIcecream: state.NumofIcecream - 1
        }
        default: return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducers,
    icecream: icecreamReducer
})

const store = createStore(rootReducer)
console.log("initial State", store.getState())

const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()
