import React,{useState,useEffect} from 'react'
import { Link , useParams} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function DogBoarding() {
    const[username,setusername]=useState()
    const[pet_name,setpet_name]=useState()
    const[pet_type,setpet_type]=useState("Dog")
    const[pet_gender,setpet_gender]=useState()  
    const[pet_age,setpet_age]=useState()
    const[from_date,setfrom_date]=useState()
    const[to_date,setto_date]=useState()
    const[No_of_days,setNo_of_days]=useState()
    const[Meal,setmeal_plan]=useState()
    const[Amount,setAmount]=useState()
    const[Breed,setBreed]=useState()
    const [appointmentno, setAppointmentNo] = useState(null);
    const { username: paramUsername } = useParams();
    const navigate=useNavigate()

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
              axios.post('http://localhost:3001/petdetails', {
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
          setAmount(daysDifference * 600 + Meal * daysDifference);
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
        <div  className='bg-dark p-4 w-75 rounded-5'>
        <h1 className='bg-emphasis text-light mb-3'>Welcome to Dog Boarding</h1>
        <div className='mb-3'>
          <label htmlFor='username' className='text-light mb-1'><strong>Username</strong></label>
          <input
            type="text"
            placeholder='Enter name'
            name="username"
            autoComplete='off'
            className='form-control rounded-3'
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
            className='form-control rounded-3'
            required
            onChange={(e)=>setpet_name(e.target.value)}/>
        </div>        
         <div className='mb-3'>
          <label htmlFor='Breed' className='text-light mb-1'><strong>Dog Breed</strong></label><br/>
            <select name="Breed" className='rounded-0 w-50 rounded-4'  onChange={(e)=>setBreed(e.target.value)}>
            <option value="" disabled selected>Select Dog Breed</option>
  <option value="Labrador Retriever">Labrador Retriever</option>
  <option value="German Shepherd">German Shepherd</option>
  <option value="Golden Retriever">Golden Retriever</option>
  <option value="Bulldog">Bulldog</option>
  <option value="Beagle">Beagle</option>
  <option value="Poodle">Poodle</option>
  <option value="Rottweiler">Rottweiler</option>
  <option value="Siberian Husky">Siberian Husky</option>
  <option value="Dachshund">Dachshund</option>
  <option value="Boxer">Boxer</option>
  <option value="Shih Tzu">Shih Tzu</option>
  <option value="Doberman Pinscher">Doberman Pinscher</option>
  <option value="Great Dane">Great Dane</option>
  <option value="Chihuahua">Chihuahua</option>
  <option value="Australian Shepherd">Australian Shepherd</option>
  <option value="Border Collie">Border Collie</option>
  <option value="Cocker Spaniel">Cocker Spaniel</option>
  <option value="Kombai">Kombai</option>
  <option value="Kannii">Kanni</option>
  <option value="chippi paarai">chippi paarai</option>
  <option value="Pomeranian">Pomeranian</option>
  <option value="Australian Cattle Dog">Australian Cattle Dog</option>
  <option value="Other">Other</option>

           </select>
           </div>
        <div className="mb-3">
        <label htmlFor='pet-gender' className='text-light mb-1'><strong>Pet-Gender</strong></label>

        <div className="form-check">
  <input className="form-check-input" type="radio" value="Male" name="pet-gender" required onChange={(e)=>setpet_gender(e.target.value)}/>
  <label className="form-check-label text-light mb1" htmlFor="pet-gender">
    Male
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="radio" value="Female" name="pet-gender"    required onChange={(e)=>setpet_gender(e.target.value)} />
  <label className="form-check-label text-light mb1" htmlFor="pet-gender">
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
            min="1"
            autoComplete='off'
            className='form-control rounded-3'
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
            className='form-control rounded-3'
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
            className='form-control rounded-3'
            required
            min={maxDate}
            onChange={(e)=>setto_date(e.target.value)}/>
        </div>
        <div className="mb-3">
  <label htmlFor="No_of_days" className="text-light mb-1">
    <strong>Number-of-Days (Per day Rs 600)</strong>
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
    readOnly
  />
</div>
        <label htmlFor='age' className='text-light mb-1'><strong>View Meal plans</strong></label>

        <div className="accordion" >
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className={`accordion-button  ${openPanel === 'panel1' ? 'active' : ''}`}
            type="button"
            onClick={() => handleToggle('panel1')}
          >
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
      <td>dry food(pedigree)</td>
      <td>cooked chicken</td>
      <td>Rice with milk</td>
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
            Meal Plan 2 (Rs 400 per day) 
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
      <td>dry food(Drools)</td>
      <td>cooked chicken</td>
      <td>Rice with curd</td>
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
            Meal Plan 3 (Rs 600 per day)
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
     <td>dry food(Royal canin)</td>
     <td>cooked chicken and fish</td>
     <td>Rice with eggs</td>
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
            <option value="400">Meal Plan 2</option>
            <option value="600">Meal Plan 3</option>
           </select>
           </div>
           <div>
          <button className='btn btn-outline-warning mb-2 center' onClick={()=>calculate()}>Calculate</button>
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
export default DogBoarding