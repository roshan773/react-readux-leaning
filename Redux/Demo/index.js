const BUY_CAKE = "Buy Cake"

function Buycake(){
    return {
        type: BUY_CAKE,
        info: "First Redux action"
    }
}

console.log(Buycake)

// reducer
// (previousState, action) => newState


const initialstate = {
    NumofCake: 10,
}

const reducer = (state=initialstate, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            NumofCake: state.NumofCake - 1
        }
        default: return state
    }
}