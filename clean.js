'strict mode';

const budget = Object.freeze([
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
  ]);
  
  const spendingLimits = Object.freeze({ // spending limits now is immutable with the 
    jonas: 1500,
    matilda: 100,
  });

  //attempt to add a value
  spendingLimits.jay = 200
  console.log(spendingLimits); // it will not work as its freezed

  const getLimit = (limits, user) => limits?.[user] ?? 0 
  

  //Transformed into a pure function :D
  const addExpense = function (state, limits, value, description, user = 'jonas') {
    
    const cleanUser = user.toLowerCase();

    
  
    //const limit = spendingLimits[user] ? spendingLimits[user] : 0

    //const limit = spendingLimits?.[user] ?? 0 ; - optional chaining with nullish coalescing operator
  
    return value <= getLimit(limits,cleanUser) ? 
      [...state, { value: -value, description, user: cleanUser }] : state
      //returns an empty copy of state and adds new element +
      // + we add the object that we used before.
      //budget.push({ value: -value, description, user:cleanUser })

    
  };
  const newBudget1 = addExpense (budget, spendingLimits, 10, 'Pizza 🍕');
  const newBudget2 = addExpense (newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
  const newBudget3 = addExpense (newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
 
  /*
  const checkExpenses2 = function (state,limits) {
    return state.map(entry => {
      return entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} : entry;

    })
    /*
    for (const entry of budget) 
      if (entry.value < -getLimit(limits, entry.user)) 
        entry.flag = 'limit';
      */
    
  
 

//transformed the function above into arrow functions 
  const checkExpenses =  (state,limits) =>
     state.map(entry => 
       entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} : entry);


  const finalBudget = checkExpenses(newBudget3,spendingLimits);
  console.log(finalBudget);
 
  
  const logbigExpenses = function (state, bigLimit) {
    const bigExpenses = state
    .filter(entry =>entry.value <= -bigLimit)
    .map(entry => entry.description
      .slice(-2)).join('/');
    
    
    
    
    
    
    /*
    let output = '';
    for (const entry of budget) 

      output +=entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
     
    
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
    */




  };

  console.log(budget);
  logbigExpenses(finalBudget,1000);
