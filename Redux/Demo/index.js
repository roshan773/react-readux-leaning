const redux = require("redux")
const {createStore} = redux;

const BUY_CAKE = "buy cake"

function buyCake(){
    return{
        type: BUY_CAKE,
        info: "First redux action"
    }
}

// reducer

const initialstate = {
    Numofcake : 10,
}

const reducer = (state = initialstate, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            Numofcake: state.Numofcake - 1,
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log("updated State", store.getState())
const unsubscribe = store.subscribe(() => console.log("updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()