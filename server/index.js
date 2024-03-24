const express=require("express")
const mongoose =require('mongoose')
const cors=require("cors")
const VeterinaryModel=require('./models/Veterinary')
const PetdetailsModel=require('./models/Pet_details')
const PetdetailsModel1=require('./models/cat_board')
const PetdetailsModel2=require('./models/bird_board')
const AdminModel=require('./models/Adminn')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/Veterinary");


app.post("/login",(req,res)=>{
    const{username,password}=req.body;
    VeterinaryModel.findOne({username:username})
    .then(users=>{
        if(users){
        if(users.password===password){
            res.json("success")
        }else{
            res.json("The password is incorrect")
        }
    }else{
        res.json("no records Existed")
    }
    })
})

app.post("/admin",(req,res)=>{
    const{username,password}=req.body;
    AdminModel.findOne({username:username})
    .then(adminns=>{
        if(adminns){
        if(adminns.password===password){
            res.json("success")
        }else{
            res.json("The password is incorrect")
        }
    }else{
        res.json("no records Existed")
    }
    })
})

app.post('/register',(req,res)=>{
    VeterinaryModel.create(req.body)
    .then(veterinary=>res.json(veterinary))
    .catch(err=>res.json(err))
})

app.post('/petdetails',(req,res)=>{
  PetdetailsModel.create(req.body)
 .then(veterinary=>res.json(veterinary))
 .catch(err=>res.json(err)) 
}) 

app.post('/cat_board',(req,res)=>{
    PetdetailsModel1.create(req.body)
   .then(veterinary=>res.json(veterinary))
   .catch(err=>res.json(err)) 
})

app.post('/bird_board',(req,res)=>{
    PetdetailsModel2.create(req.body)
   .then(veterinary=>res.json(veterinary))
   .catch(err=>res.json(err)) 
})

app.get('/admin1',(req,res)=>{
    PetdetailsModel.find()
    .then(pet_details=>res.json(pet_details))
    .catch(err=>res.json(err))
})
app.delete('/admin1/:id', async (req, res) => {
  const appointmentId = req.params.id;

  try {
    const deletedAppointment = await PetdetailsModel.findByIdAndDelete(appointmentId);

    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/admin2',(req,res)=>{
  PetdetailsModel1.find()
  .then(pet_details=>res.json(pet_details))
  .catch(err=>res.json(err))
})

app.delete('/admin2/:id', async (req, res) => {
  const appointmentId = req.params.id;

  try {
    const deletedAppointment = await PetdetailsModel1.findByIdAndDelete(appointmentId);

    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/admin3',(req,res)=>{
  PetdetailsModel2.find()
  .then(pet_details=>res.json(pet_details))
  .catch(err=>res.json(err))
})

app.delete('/admin3/:id', async (req, res) => {
  const appointmentId = req.params.id;

  try {
    const deletedAppointment = await PetdetailsModel2.findByIdAndDelete(appointmentId);

    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const db = mongoose.connection; 
app.get('/checkLimit', async (req, res) => {
    try {
      const collection = db.collection('dog_boardings');
      const documentCount = await collection.countDocuments();

      const limit = 8; 
      if (documentCount < limit) {
        res.status(200).json({ isLimitFull: false });
      } else {
        res.status(200).json({ isLimitFull: true });
      }
    } catch (error) {
      console.error('Error checking limit', error);
      res.status(500).json({ status: 'Error checking limit' });
    }
  });

  app.get('/checkLimit1', async (req, res) => {
    try {
      const collection = db.collection('cat_boardings');
      const documentCount = await collection.countDocuments();

      const limit = 10; 
      if (documentCount < limit) {
        res.status(200).json({ isLimitFull: false });
      } else {
        res.status(200).json({ isLimitFull: true });
      }
    } catch (error) {
      console.error('Error checking limit', error);
      res.status(500).json({ status: 'Error checking limit' });
    }
  });

  app.get('/checkLimit2', async (req, res) => {
    try {
      const collection = db.collection('bird_boardings');
      const documentCount = await collection.countDocuments();

      const limit = 2;
      if (documentCount < limit) {
        res.status(200).json({ isLimitFull: false });
      } else {
        res.status(200).json({ isLimitFull: true });
      }
    } catch (error) {
      console.error('Error checking limit', error);
      res.status(500).json({ status: 'Error checking limit' });
    }
  });


  app.get('/view1', async (req, res) => {
    try {
      const payments = await PetdetailsModel.find({}, {
        _id: 0, 
        from_date: 0, 
        to_date: 0, 
        No_of_days: 0,
        appointment_no: 0 
      });
  
      const totalAmount = payments.reduce((total, payment) => total + payment.Amount, 0);
  
      res.json({ payments, totalAmount });
    } catch (error) {
      console.error('Error fetching payments', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  app.get('/view2', async (req, res) => {
    try {
      const payments = await PetdetailsModel1.find({}, {
        _id: 0, 
        from_date: 0, 
        to_date: 0, 
        No_of_days: 0,
        appointment_no: 0 
      });
  
      const totalAmount = payments.reduce((total, payment) => total + payment.Amount, 0);
  
      res.json({ payments, totalAmount });
    } catch (error) {
      console.error('Error fetching payments', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/view3', async (req, res) => {
    try {
      const payments = await PetdetailsModel2.find({}, {
        _id: 0, 
        from_date: 0, 
        to_date: 0, 
        No_of_days: 0,
        appointment_no: 0 
      });
  
      const totalAmount = payments.reduce((total, payment) => total + payment.Amount, 0);
  
      res.json({ payments, totalAmount });
    } catch (error) {
      console.error('Error fetching payments', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  

app.listen(3001,()=>{
    console.log("server is running")
})