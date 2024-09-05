const express = require('express');
const router = express.Router();
const Hostel = require('../models/hostel');
const authenticate = require('../middleware/auth');
const multer = require('multer');
const path = require('path');
router.use(authenticate);

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory to store uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename file to include timestamp
    }
});
const upload = multer({ storage: storage });

// Default route for /hostels
router.get('/', (req, res) => {
    res.redirect('/hostels/show');
});

// Show all hostels
router.get('/show', async (req, res) => {
    try {
        const hostels = await Hostel.find().lean();
        res.render('hostels/showHostels', { hostels });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Show form to add a new hostel
router.get('/add', (req, res) => {
    res.render('hostels/addHostel');
});

// Add a new hostel
router.post('/add', upload.single('attachments'), async (req, res) => {
    try {
        const hostel = new Hostel({
            ...req.body,
            attachments: req.file ? req.file.path : undefined // Save file path in attachments
        });
        await hostel.save();
        res.redirect('/hostels/show');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Show form to edit a hostel
router.get('/edit/:id', async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id).lean();
        res.render('hostels/editHostel', { hostel });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Edit a hostel
router.post('/edit/:id', upload.single('attachments'), async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id);
        const updateData = {
            ...req.body,
            attachments: req.file ? req.file.path : hostel.attachments // Retain old file if no new file is uploaded
        };
        await Hostel.findByIdAndUpdate(req.params.id, updateData);
        res.redirect('/hostels/show');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Delete a hostel
router.get('/delete/:id', async (req, res) => {
    try {
        await Hostel.findByIdAndDelete(req.params.id);
        res.redirect('/hostels/show');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Show hostel home page with select option
router.get('/hostelhome', async (req, res) => {
    try {
        const hostels = await Hostel.find().lean(); // Fetch all hostels
        res.render('hostels/hostelhome', { hostels }); // Pass hostels to the view
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
