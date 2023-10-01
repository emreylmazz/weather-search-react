import axios from 'axios'
import { useEffect,useState } from 'react'
import City from './city';

function App() {
const key = "9fea6194aba25811bb09de9bb7964a96";
const [city, setCity] = useState()
const [search, setSearch] = useState("")
useEffect(() => {
  async function getApi() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
      console.log(response);
      setCity(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }
  getApi();
},[ search])

  return (
<div>
  <div>
    <input onKeyDown={(e) => setSearch(e.target.value)}
 className='px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-0 shadow outline-none  '
 type="text"
 placeholder='Placeholder' />
 {city && <City city={city}/>}
  </div>
</div>
  )
}

export default App
