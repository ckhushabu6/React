import { useEffect, useReducer } from "react";
export default function FetchData() {
  function reducer(state, action) {
    switch (action.type) {
      case "Fetch_Start":
        return {...state , loading : true};

      case "Fetch_Success":
        return {...state , loading : false , data : action.payload};

      case "Fetch_Error":
        return {...state , loading : false ,data : null,  error : action.payload};

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  async function fetchDataFromApi() {
    dispatch({type : "Fetch_Start"});
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
      let result = await res.json();
    dispatch({type : "Fetch_Success" , payload : result})
    } catch (error) {
        dispatch({type : "Fetch_Error" , payload : "Failed to fetch"})
    }
  }

  useEffect(() => {
     fetchDataFromApi();
  }, []);
  return (
    <>
      <h1>Fetching data from API...</h1>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}
      {state.data && (
        <div>
            {" "}
            <h3>{state.data.title}</h3>
            <p>{state.data.title}</p>
        </div>
      )}
    </>
  );
}
