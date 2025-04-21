const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "Buy Cake";
const BUY_ICECREAM = "Buy Icecream";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux action"
    };
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: "Second redux action"
    };
}

const initialCakeState = {
    Numofcake: 10, // Cake state
};

const initialIceCreamState = {
    NumofIcecream: 10, // Ice Cream state
};

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                Numofcake: state.Numofcake - 1, // Decrease cake count
            };
        default:
            return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                NumofIcecream: state.NumofIcecream - 1, // Decrease ice cream count
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial value: ", store.getState()); // Log initial state

const unsubscribe = store.subscribe(() => console.log("Updated value: ", store.getState())); // Log updated state after each dispatch

// Dispatch actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

// Unsubscribe from store updates
unsubscribe();
