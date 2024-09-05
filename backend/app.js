const express = require('express');
const mongoose = require('mongoose');
const connectDb =require("./db/config");
const roomsRouter = require('./routes/rooms');
const hostelsRouter = require('./routes/hostels');
const tenantRoutes = require("./routes/tenant");
const managementUserRouter = require('./routes/managementUserRouter');
const tenantReportRouter = require('./routes/tenantReport');
const unitsRouter = require('./routes/unitsRouter');
const bookingsRouter = require('./routes/bookings');
const servicesRouter = require('./routes/servicesRouter');
const expenseHeadsRouter = require('./routes/expenseHeadsRouter');
const hrmRouter = require('./routes/hrmRouter');
const hostelExpensesRouter = require("./routes/expenses");
const expenseItemRouter = require('./routes/expenseItemRouter');
const path = require('path');
const { engine } = require('express-handlebars');
const bedsRoute = require('./routes/beds');
const authRoutes = require('./routes/auth');
const multer = require('multer');
const hbsHelpers = require('./hbsHelpers');
const authenticate = require('./middleware/auth'); // Import the auth middleware
const cookieParser = require('cookie-parser');

const app = express();
// im going to change fork

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


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files
app.use(cookieParser()); // To parse cookies

// Middleware to prevent caching
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

// Set up Handlebars
app.engine('hbs', engine({ 
    extname: '.hbs', 
    defaultLayout: 'main',
    helpers: hbsHelpers, // Register custom helpers
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/auth', authRoutes);
app.use('/hostels', authenticate, hostelsRouter); // Protect hostels route
app.use('/rooms', authenticate, roomsRouter); // Protect rooms route
app.use('/beds', bedsRoute);
app.use('/tenants', tenantRoutes);
app.use('/bookings', authenticate, bookingsRouter);
app.use('/services', servicesRouter);
app.use('/expenses', hostelExpensesRouter);
app.use('/expenseHeads', expenseHeadsRouter);
app.use('/expense-items', expenseItemRouter);
app.use('/tenant-report', tenantReportRouter);
app.use('/units', unitsRouter);
app.use('/hrm', hrmRouter);
app.use('/managementUsers', managementUserRouter);

app.get("/hostelHome", authenticate, (req, res) => {
    res.render("hostelHome");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
