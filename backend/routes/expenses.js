const express = require('express');
const multer = require('multer');
const router = express.Router();
const HostelExpense = require('../models/HostelExpense');
const Hostel = require('../models/hostel'); // Assuming you have a Hostel model

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// Show all expenses
router.get('/', async (req, res) => {
  const expenses = await HostelExpense.find().populate('hostel');
  res.render('expenses/showExpenses', { expenses });
});

// Add new expense (GET)
router.get('/add', async (req, res) => {
  const hostels = await Hostel.find(); // Fetching all hostels to select from
  res.render('expenses/addExpense', { hostels });
});

// Add new expense (POST)
router.post('/add', upload.single('attachment'), async (req, res) => {
  const { hostel, date, expenseHead, expenseTitle, qty, unit, unitPrice, amount, paymentStatus, paymentMethod, remarks } = req.body;

  const total = qty * unitPrice;

  const newExpense = new HostelExpense({
    hostel,
    date,
    expenseHead,
    expenseTitle,
    qty,
    unit,
    unitPrice,
    amount,
    total,
    paymentStatus,
    paymentMethod: paymentStatus === 'Paid' ? paymentMethod : undefined,
    remarks,
    attachments: req.file ? req.file.filename : undefined
  });

  await newExpense.save();
  res.redirect('/expenses');
});

// Edit expense (GET)
router.get('/edit/:id', async (req, res) => {
  const expense = await HostelExpense.findById(req.params.id).populate('hostel');
  const hostels = await Hostel.find(); // Fetching all hostels to select from
  res.render('expenses/editExpense', { expense, hostels });
});

// Update expense (POST)
router.post('/edit/:id', upload.single('attachment'), async (req, res) => {
  const { hostel, date, expenseHead, expenseTitle, qty, unit, unitPrice, amount, paymentStatus, paymentMethod, remarks } = req.body;

  const total = qty * unitPrice;

  const updatedExpense = {
    hostel,
    date,
    expenseHead,
    expenseTitle,
    qty,
    unit,
    unitPrice,
    amount,
    total,
    paymentStatus,
    paymentMethod: paymentStatus === 'Paid' ? paymentMethod : undefined,
    remarks,
  };

  if (req.file) {
    updatedExpense.attachments = req.file.filename;
  }

  await HostelExpense.findByIdAndUpdate(req.params.id, updatedExpense);
  res.redirect('/expenses');
});

// Delete expense
router.post('/delete/:id', async (req, res) => {
  await HostelExpense.findByIdAndDelete(req.params.id);
  res.redirect('/expenses');
});

module.exports = router;
