import React from 'react';
import slide1 from './assets/slide23.jpg';
import slide2 from './assets/slide18.jpg';
import slide5 from './assets/slide27.jpg';
import slide15 from './assets/slide22.jpg';

function Home() {
  const containerStyle = {
    backgroundImage: `url(${slide15})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '56px', 
    backgroundAttachment: 'fixed', 
  };

  return (
    <>
   
    <div style={containerStyle}>
      <div className="treat row p-2 md-5 pb-5 m-md-5 m-2 ">
        <div className="col-md-7 text-center col-12">
          <h2 className="display-4 fw-bold p-3 text-light">Veterinary And PetcareHub</h2>
          <p className="p-3 fs-5 fw-normal text-light">
            A Veterinary and Pet Care Hub serves as a comprehensive resource and support center for pet owners, offering a range of services and information to ensure the well-being of furry companions. This hub typically includes a veterinary clinic providing medical care, preventive services, and specialized treatments for pets. Additionally, it may offer boarding services, providing a safe and comfortable environment for pets when their owners are away.
          </p>
          <br />
        </div>
        <div className="col-md-5 col-12">
          <img className="border img-fluid border-dark w-100" alt="" src={slide1} />
        </div>
      </div>


      <div className="treat row p-1 m-md-5 m-2 ">
        <div className="col-12 col-md-7">
          <h2 className="display-6 text-center text-light fw-bold px-3 py-1 mt-3">Our Boarding Facilities</h2>
          <p className="p-3 fs-5 fw-normal text-light">
            Comfortable Accommodations: Pet care boarding facilities offer comfortable living spaces for animals, providing cozy bedding, appropriate temperature control, and a secure environment.<br />
            Nutritious Meals: Facilities typically provide balanced and nutritious meals, taking into consideration the dietary needs and preferences of individual pets. Some may even accommodate special diets.<br />
            Exercise and Play Areas: To keep pets physically active and mentally stimulated, boarding facilities often have designated exercise and play areas. This allows pets to socialize with other animals and expend energy in a controlled environment.<br />
          </p>
        </div>
        <div className="col-md-5 col-12">
          <img className="border img-fluid border-dark w-100" alt="" src={slide2} />
        </div>
      </div>

      <div className="treat row p-2 md-5 pb-5 m-md-5 m-2 ">
        <div className="col-12 col-md-7">
          <h2 className="display-6 text-center fw-bold px-3 py-1 mt-3 text-light">Pet Experts: The Heart and Soul of Pet Care Hub</h2>
          <p className="p-3 fs-5 fw-normal text-light">
            Our team consists of compassionate individuals who have a genuine love for animals. Each pet caretaker at PetCare Hub is carefully selected for their empathy, patience, and dedication to making a positive difference in the lives of pets.<br />
            PetCare Hub takes pride in having a team of professionally trained pet caretakers with expertise in various aspects of animal care. From basic needs to specialized care, our team is well-equipped to handle a wide array of situations, ensuring that your pets receive the best care possible.
          </p>
        </div>
        <div className="col-md-5 col-12">
          <img className="border img-fluid border-dark w-100" alt="" src={slide5} />
        </div>
      </div>

      
    </div></>
  );
}

export default Home;
