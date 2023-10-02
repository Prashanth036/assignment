import logo from './logo.svg';
import './App.css';
import Imgcomp from './components/imgComponent';


function App() {

  const [img, setImg] = useState([]);
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setImg(data.data.memes));
  }, []);




  return (
    <>
      <div style={{
        margin: '20px',
        paddingLeft: '50px',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {img.map((e, id) => {
          if (id < 10) {
            return <Imgcomp img={e.url} />
          }
        })}
      </div>
    </>
  )
}

export default App;
