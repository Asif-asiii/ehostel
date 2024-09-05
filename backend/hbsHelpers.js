const moment = require('moment');

module.exports = {
    // Helper to check if two values are equal
    eq: function (a, b) {
        return a == b;
    },

    // Custom helper for ifEquals logic
    ifEquals: function (a, b, options) {
        if (a === b) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    // Format date using moment.js
    formatDate: function (date, format = 'DD/MM/YYYY') {
        if (!date) return ''; // Handle empty or null dates
        
        // Ensure format is a string
        if (typeof format !== 'string') {
            format = 'DD/MM/YYYY'; // Default format
        }
        
        // Return formatted date
        return moment(date).format(format);
    },

    // Add two numbers
    add: function (a, b) {
        return a + b;
    },

    // Calculate total booking cost (sum of security and monthly rent)
    calculateTotalBookingCost: function (bookings) {
        let total = 0;
        for (let i = 0; i < bookings.length; i++) {
            total += bookings[i].security + bookings[i].monthlyRent;
        }
        return total;
    },

    // Calculate total service cost
    calculateTotalServiceCost: function (services) {
        let total = 0;
        for (let i = 0; i < services.length; i++) {
            total += services[i].servicePrice;
        }
        return total;
    }
};