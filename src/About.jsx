import React from "react";

export default function About() {
  return (
    <div className="container-fluid bg-dark text-light">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col">
          <div className="my-4">
            <h2 className="display-5 fw-bold px-md-3 py-1">About Us</h2>
            <p className="fs-5">
              We believe in providing compassionate and comprehensive care for your furry family members. As a leading veterinary clinic and boarding service, we are dedicated to ensuring the health and happiness of your pets.
              <br />
            </p>
            <br />
            <div className="treat p-1">
              <h3 className="display-6 fw-bold px-md-3 pt-3">Our Mission</h3>
              <p className="fs-5">
                Our mission is simple: to enhance the well-being of pets and strengthen the bond between animals and their owners. We strive to achieve this by offering high-quality veterinary services and top-notch boarding facilities.
              </p>
            </div>
            <br />
            <h3 className="display-6 fw-bold px-md-3 pt-3">Our Services</h3>
            <p className="fs-5">
              Our experienced and caring team of veterinarians is committed to delivering personalized care to each pet. From routine check-ups and vaccinations to advanced diagnostics and surgeries, we cover a wide range of veterinary services to keep your pets in optimal health.
              We understand that a trip to the vet can be stressful for both pets and their owners. That's why we've created a welcoming and comfortable environment at our clinic. Our team is here to answer your questions, address your concerns, and provide the best possible care for your beloved companions.
            </p>
          </div>
          <br />

          <div className="treat p-1">
            <h2 className="display-6 fw-bold px-md-3 pt-3">Boarding Services</h2>
            <p className="fs-5">
              When life takes you away from home, trust PetCareHub for exceptional boarding services. Our spacious and secure facilities are designed to make your pets feel at home. Whether it's a short stay or an extended vacation, our dedicated staff ensures that your pets receive the attention, care, and love they deserve.
              <br />
              Comfortable and clean accommodations <br />
              Regular exercise and playtime <br />
              Specialized care for pets with medical needs <br />
              Nutritious meals tailored to individual dietary requirements <br />
            </p>
          </div>
          <br />
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="text-center">
        <a className="btn btn-outline-info mt-3" href="./home">Home</a>
      </div>
    </div>
  );
}
