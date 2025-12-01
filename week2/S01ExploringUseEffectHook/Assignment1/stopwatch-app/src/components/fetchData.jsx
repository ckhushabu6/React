async function getdata(url){
let res = await fetch(url)
let data = await res.json();
 return data;
}




function App() {
  let [error, setError] = useState("");
  let [lodding, setLoding] = useState("");
  let [posts, setPosts]=useState([]);
                                                                                                           
   function fetchDataFromApi(){
    try{
    setLoding(true);
    async function fetchData(){
      let data = getdata(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      setData(data);
      setLoding(false);


    }
  }
  catch(error){
    setError(true);
    setLoding(false);
  }

  }

  useEffect(()=>{
    fetchDataFromApi()
  },[]);

  if(error){
    return <h1>invalid input...</h1>
  }
  if(lodding){
    return<h1>💫Lodding...</h1>
  }
}
