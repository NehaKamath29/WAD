const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const verifyToken = require('./middleware/Auth');

const Hotel = require('./models/Hotel');
const Customer = require('./models/Customer');
const Booking = require('./models/Booking');

// Create Express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://root:1234@cluster0.k2f5vsu.mongodb.net/HotelManagementDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Route to get a list of hotels
app.get('/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.send(hotels);
  } catch (error) {
    console.error('Error retrieving hotels:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Route to get information about a particular hotel
app.get('/hotel/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.json(hotel);
  } catch (error) {
    console.error('Error retrieving hotel:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Dummy route to create hotels
app.post('/createHotel', async (req, res) => {
  const hotel = new Hotel({
    hotel_name: 'Mariott',
    hotel_adress: 'USA',

  });

  try {
    await hotel.save();    
  } catch (e) {
    throw e;
  }
});

// Route for user registration (signup)
app.post('/signup', async (req, res) => {
  try {
    if (!req.body) {
      throw new Error();
    }
    const user = new Customer({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    });
    await user.save();
    // Generate a JWT token
    const token = jwt.sign({ userId: 'newUser._id' }, 'jwt1234');

    // Return the token to the client
    res.json({ token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Route for user login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Customer.findOne({username});
    if (!user) {
      throw new Error('Invalid username');
    }

    if (password != user.password) {
      throw new Error('Invalid Password');
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id.toString() }, 'jwt1234');

    // Return the token to the client
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error });
  }
});

// Route to get user profile
app.get('/profile', verifyToken, (req, res) => {
  // Access user information from req.user
  const userId = req.user.userId;

  // Fetch user profile from the database
  // ...

  res.json({ userId, profile: 'User profile information' });
});

// Route to create a booking
app.post('/createBooking', verifyToken, async (req, res) => {
  // Access user and hotelk information from req.user
  // req.user is created in the middleware
  const userId = req.user;
  console.log(userId);
  const hotelId = req.body.hotelId;

  // Perform booking creation logic
  const booking = new Booking({
    guest: userId,
    hotel: hotelId
  });
  await booking.save();

  res.json({ message: 'Booking created successfully' });
});

app.get('/getBookings', async (req, res) => {
  const bookings = await Booking.find().populate('guest').populate('hotel').exec();
  
  res.json(bookings);
});

app.use(express.static("public"));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
