export default function CountApp(){
    const initialValue = {
        count : 0 
    }

    function countRedux(state= initialValue, action){
        switch(action.type){
            case 'INCREMENT':
                return { count : state.count + 1 };
            default :
                return state;
        }
    }

    const store = createStore(countRedux);
    store.dispatch({type:'INCREMENT'});
    return(
        <>
        <h1>This is my first redux app...</h1>
        </>
    )
}