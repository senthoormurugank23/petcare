import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login1 from './Login1'
import Login2 from './Login2'
import About from './About'
import Admin from './Admin'
import Admin1 from './Admin1'
import Admin2 from './Admin2'
import Admin3 from './Admin3'
import Adminhome from './Adminhome'
import DogBoarding from './DogBoarding'
import CatBoarding from './CatBoarding'
import BirdBoarding from './BirdBoarding'
import Boarding from './Boarding'
import Avail from './Avail'
import Avail1 from './Avail1'
import Avail2 from './Avail2'
import Success from './Success'
import Footer from './Footer'
import Header from './header'
import Amain from './Amain'
import Amain1 from './Amain1'
import Amain2 from './Amain2'
import View1 from './View1'
import View2 from './View2'
import View3 from './View3'


function App() {
  return(
    <div>
  <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/login1' element={<Login1 />}></Route>
      <Route path='/login2' element={<Login2 />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/boarding' element={<Boarding />}></Route>
      <Route path='/dogboarding/:username' element={<DogBoarding />}></Route>
      <Route path='/catboarding/:username' element={<CatBoarding />}></Route>
      <Route path='/birdboarding/:username' element={<BirdBoarding />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/admin' element={<Admin />}></Route>
      <Route path='/admin1' element={<Admin1 />}></Route>
      <Route path='/admin2' element={<Admin2 />}></Route>
      <Route path='/admin3' element={<Admin3 />}></Route>
      <Route path='/adminhome' element={<Adminhome />}></Route>
      <Route path='/dog' element={<DogBoarding />}></Route>
      <Route path='/checkLimit' element={<Avail />}></Route>
      <Route path='/checkLimit1' element={<Avail1 />}></Route>
      <Route path='/checkLimit2' element={<Avail2 />}></Route>
      <Route path="/success/:appointmentNo/:from_date" element={<Success />} />
      <Route path="/footer" element={<Footer />} ></Route>
      <Route path="/header" element={<Header />} ></Route>
      <Route path="/amain" element={<Amain />} ></Route>
      <Route path="/amain1" element={<Amain1 />} ></Route>
      <Route path="/amain2" element={<Amain2 />} ></Route>
      <Route path="/view1" element={<View1 />} ></Route>
      <Route path="/view2" element={<View2 />} ></Route>
      <Route path="/view3" element={<View3 />} ></Route>


    </Routes>
    </BrowserRouter>
  
    </div>
  )
}

export default App
