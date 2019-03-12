// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    SuitorName: "Shelly",
    SuitorID: 55,
    SuitorQ1: 5,
    SuitorQ2: 5,
    SuitorQ3: 3,
    SuitorQ4: 3,
    SuitorQ5: 3,
    
    
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
