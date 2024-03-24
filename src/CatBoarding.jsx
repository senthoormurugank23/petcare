import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function CatBoarding() {
   
    const[username,setusername]=useState()
    const[pet_name,setpet_name]=useState()
    const[pet_type,setpet_type]=useState("Cat")
    const[pet_gender,setpet_gender]=useState()  
    const[pet_age,setpet_age]=useState()
    const[from_date,setfrom_date]=useState()
    const[to_date,setto_date]=useState()
    const[No_of_days,setNo_of_days]=useState()
    const[Amount,setAmount]=useState()
    const[Meal,setmeal_plan]=useState()
    const[Breed,setBreed]=useState()
    const [appointmentno, setAppointmentNo] = useState(null);

      const navigate=useNavigate()
      const { username: paramUsername } = useParams();
     useEffect(() => {
    setusername(paramUsername);
  }, [paramUsername]);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
  const [minDate, setMinDate] = useState(tomorrowFormatted);
  const tomorrow1 = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted1 = tomorrow.toISOString().split('T')[0];
  const [maxDate, setMaxDate] = useState(tomorrowFormatted1);

      const handleSubmit = (e) => {
        e.preventDefault();
        if (username !== paramUsername) {
          alert("Invalid username");
          return;
        }
        if (Amount === "" ||
        !username ||
        !pet_name ||
        !pet_gender ||
        !pet_age ||
        !from_date ||
        !to_date ||
        !No_of_days ||
        !Meal ||
        !Breed) {
          alert("Please fill all the required credentiala");
        } else {
          var options = {
            key: "rzp_test_9DzJY5Kv3cqvYL",
            key_secret: "ackGLzyaG0qJNWxq3itnC6ap",
            amount: Amount * 100,
            currency: "INR",
            name: "PETCARE HUB",
            description: "Payment",
            handler: function (response) {
              alert(response.razorpay_payment_id);
                  axios.post('http://localhost:3001/cat_board', {
                username, pet_name, pet_type,Breed, pet_gender, pet_age, from_date, to_date, No_of_days, Meal, Amount
              })
                .then((result) => {
                  console.log(result);
                  alert('Your appointment Booked Successfully');
                  setAppointmentNo(result.data.appointment_no);
                  navigate(`/success/${result.data.appointment_no}/${from_date}`);
                })
                .catch((err) => console.log(err));
            },
            notes: {
              address: "Razorpay Corporate office"
            },
            theme: {
              color: "#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
        }
      }
      const calculate = () => {
        if (from_date && to_date) {
          const fromDate = new Date(from_date);
          const toDate = new Date(to_date);
          const timeDifference = Math.abs(toDate.getTime() - fromDate.getTime());
          const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
          setNo_of_days(daysDifference);
          setAmount(daysDifference * 300 + Meal * daysDifference);
        } else {
          alert("Please select both 'From-Date' and 'To-Date'");
        }
      };

      const [openPanel, setOpenPanel] = useState(null);      
      const handleToggle = (panelId) => {
        setOpenPanel((prevPanel) => (prevPanel === panelId ? null : panelId));
      };
  return (
    <div> 
<div className='d-flex justify-content-center align-items-center bg-secondary '>
        <div  className='bg-dark p-4 rounded-5 w-75'>
        <h1 className='bg-emphasis text-light mb-5'>Welcome to Cat Boarding</h1>
        <div className='mb-3'>
          <label htmlFor='username' className='text-light mb-1'><strong>Username</strong></label>
          <input
            type="text"
            placeholder='Enter name'
            name="username"
            autoComplete='off'
            className='form-control rounded-0'
            required
            onChange={(e)=>setusername(e.target.value)}/>
        </div>
        <div className='mb-3 '>
          <label htmlFor='petname' className='text-light mb-1'><strong>Pet-Name</strong></label>
          <input
            type="text"
            placeholder='Enter Pet name'
            name="pet_name"
            autoComplete='off'
            className='form-control rounded-0'
            required
            onChange={(e)=>setpet_name(e.target.value)}/>
        </div>    
        <div className='mb-3'>
          <label htmlFor='Breed' className='text-light mb-1'><strong>Cat Breed</strong></label><br/>
            <select name="Breed" className='rounded-0 w-50 rounded-4'  onChange={(e)=>setBreed(e.target.value)}>
            <option value="" disabled selected>Select Cat Breed</option>
  <option value="Persian">Persian</option>
  <option value="Maine Coon">Maine Coon</option>
  <option value="Siamese">Siamese</option>
  <option value="Bengal">Bengal</option>
  <option value="Ragdoll">Ragdoll</option>
  <option value="Sphynx">Sphynx</option>
  <option value="Abyssinian">Abyssinian</option>
  <option value="Scottish Fold">Scottish Fold</option>
  <option value="Burmese">Burmese</option>
  <option value="British Shorthair">British Shorthair</option>
  <option value="Norwegian Forest Cat">Norwegian Forest Cat</option>
  <option value="Oriental Shorthair">Oriental Shorthair</option>
  <option value="Russian Blue">Russian Blue</option>
  <option value="Devon Rex">Devon Rex</option>
  <option value="American Shorthair">American Shorthair</option>
  <option value="Turkish Angora">Turkish Angora</option>
  <option value="Himalayan">Himalayan</option>
  <option value="Cornish Rex">Cornish Rex</option>
  <option value="Manx">Manx</option>
  <option value="Balinese">Balinese</option>
  <option value="Other">Other</option>
           </select>
           </div>
        <div className="mb-3">
        <label htmlFor='pet-gender' className='text-light mb-1'><strong>Pet-Gender</strong></label>
        <div class="form-check">
  <input class="form-check-input" type="radio" value="Male" name="pet-gender" id="flexRadioDefault1"    onChange={(e)=>setpet_gender(e.target.value)}/>
  <label class="form-check-label text-light mb1" for="pet-gender">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" value="Female" name="pet-gender" id="flexRadioDefault2" onChange={(e)=>setpet_gender(e.target.value)} />
  <label class="form-check-label text-light mb1" for="pet-gender">
    Female
  </label>
</div>
       </div>
        <div className='mb-3'>
          <label htmlFor='age' className='text-light mb-1'><strong>Pet-Age</strong></label>
          <input
            type="number"
            placeholder='Age in months'
            name="pet_age"
            autoComplete='off'
            min="1"
            className='form-control rounded-0'
            required
            onChange={(e)=>setpet_age(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='from_date' className='text-light mb-1'><strong>From-Date</strong></label>
          <input
            type="date"
            placeholder='Enter From-Date'
            name="from_date"
            autoComplete='off'
            className='form-control rounded-0'
            required
            min={minDate}
            onChange={(e)=>setfrom_date(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='to-date' className='text-light mb-1'><strong>To-Date</strong></label>
          <input
            type="date"
            placeholder='Enter To-Date'
            name="to_date"
            autoComplete='off'
            className='form-control rounded-0'
            required
            min={maxDate}
            onChange={(e)=>setto_date(e.target.value)}/>
        </div>
        <div className="mb-3">
  <label htmlFor="No_of_days" className="text-light mb-1">
    <strong>Number-of-Days (Per day Rs 300)</strong>
  </label>
  <span className="ml-2 text-info">(Automatically calculated)</span>
  <input
    type="number"
    placeholder="Number of days"
    name="No_of_days"
    autoComplete="off"
    min="1"
    max="10"
    className="form-control rounded-0"
    value={No_of_days} 
    readOnly/>
</div>
        <label htmlFor='age' className='text-light mb-1'><strong>View Meal plans</strong></label>
<div className="accordion" >
<div className="accordion-item">
<h2 className="accordion-header" id="headingOne">
  <button
    className={`accordion-button  ${openPanel === 'panel1' ? 'active' : ''}`}
    type="button"
    onClick={() => handleToggle('panel1')} >
    Meal Plan 1 (Rs 200 per day)
  </button>
</h2>
<div
  id="collapseOne"
  className={`accordion-collapse collapse ${openPanel === 'panel1' ? 'show' : ''}`}
  aria-labelledby="headingOne"
  data-bs-parent="#accordionExample">
  <div className="accordion-body">
    <strong><table class="table">
<thead>
<tr>

<th scope="col">Morning</th>
<th scope="col">Afternoon</th>
<th scope="col">Night</th>
</tr>
</thead>
<tbody>
<tr>

<td> high-quality dry cat food(drools)</td>
<td>wet cat food (providing a mix of protein and moisture)</td>
<td>milk</td>
</tr>


</tbody>
</table></strong>
  </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingTwo">
  <button
    className={`accordion-button ${openPanel === 'panel2' ? 'active' : ''}`}
    type="button"
    onClick={() => handleToggle('panel2')}>
    Meal Plan 2 (Rs 250 per day)
  </button>
</h2>
<div
  id="collapseTwo"
  className={`accordion-collapse collapse ${openPanel === 'panel2' ? 'show' : ''}`}
  aria-labelledby="headingTwo"
  data-bs-parent="#accordionExample">
  <div className="accordion-body">
    <strong>
    <table class="table">
<thead>
<tr>
<th scope="col">Morning</th>
<th scope="col">Afternoon</th>
<th scope="col">Night</th>
</tr>
</thead>
<tbody>
<tr>
<td>high-quality dry cat food(Active)</td>
<td>wet cat food (providing a mix of protein and moisture)</td>
<td>(Active) Chunks in gravy</td>
</tr> </tbody>
</table> </strong> 
  </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
  <button
    className={`accordion-button ${openPanel === 'panel3' ? 'active' : ''}`}
    type="button"
    onClick={() => handleToggle('panel3')}>
    Meal Plan 3 (Rs 300 per day)
  </button>
</h2>
<div
  id="collapseTwo"
  className={`accordion-collapse collapse ${openPanel === 'panel3' ? 'show' : ''}`}
  aria-labelledby="headingTwo"
  data-bs-parent="#accordionExample">
  <div className="accordion-body">
    <strong>
    <table class="table">
<thead>
<tr>
<th scope="col">Morning</th>
<th scope="col">Afternoon</th>
<th scope="col">Night</th>
</tr>
</thead>
<tbody>
<tr>
<td>high-quality dry cat food(Purepet)</td>
<td>Boiled fish</td>
<td>(purepet) Chunks in gravy</td>
</tr>
</tbody>
</table> </strong> 
  </div>
</div>
</div>
</div>


<div className='mb-3'>
  <label htmlFor='meal_plan' className='text-light mb-1'><strong>Meal Plan</strong></label><br/>
    <select name="meal_plan" className='rounded-0 w-50 rounded-4'  onChange={(e)=>setmeal_plan(e.target.value)}>
    <option value="" disabled selected>Select Meal Plan</option>
    <option value="200">Meal Plan 1</option>
    <option value="250">Meal Plan 2</option>
    <option value="300">Meal Plan 3</option>
   </select>
   </div>
        <div>
          <button className='btn btn-outline-warning mb-2' onClick={()=>calculate()}>Calculate</button>
          <h3 className='text-light text-center text-xl-start' onChange={(e)=>setAmount(e.target.Amount)} >Total: {Amount || ""}</h3>
        </div>
       
        <button onClick={(e)=>handleSubmit(e)} className='btn btn-success w-100 rounded-5 mb-3'>Submit</button>
        <Link to='/boarding' className='btn btn-default border w-100 bg-light rounded-5 mb-3 '>Back</Link>
        <Link to='/' className='btn btn-default border w-100 bg-light rounded-5 mb-3'>Logout</Link>
        </div>  
    </div>
 </div>
  )
}
export default CatBoarding