// Implement a Stock Portfolio module following these requirements step-by-step.
// First, the general user story is: "As a beginner investor, I want to perform basic stock transactions so that I can keep track of my portfolio." Then, the team decided to take this story to implement in their current dev iteration. They discussed this story with the product manager and agreed with the following scope which you will see in increments:
//2.1 A stock portfolio is represented by a collection of stock ticker symbols and their corresponding number of shares owned by the portfolio. A portfolio is always created with an empty number of shares (and no ticker symbols in it).
// Run the TDD (Red-Green-Refactor) cycle before moving to the next item.
//A stock symbol or ticker is a unique series of letters assigned to a security for trading purposes.





//Red Phase: write a test that informs implementation of the feature
//Green Phase: implement the code to make your tests pass
//Refactor: make the functions less complicated



// test('Valid Initial Portfolio', () => {
//   const sp = new myFunctions.StockPortfolio();
//    const validation  = myFunctions.Valid_Portfolio(sp)
//   expect(validation).toBe(true);
// })


const myFunctions = require('./stock.js');

test('Are there no shares owned', ()=>
{
  var sp = new myFunctions.StockPortfolio()
  const empty = myFunctions.Stock_empty(sp);
  expect(empty).toBe(true);
})

test('Unique ticker symbols' , () =>
{

  var sp = new myFunctions.StockPortfolio()
  myFunctions.addShares(sp,"TESLA" , 20);
  myFunctions.addShares(sp,"META" , 15);
  unique_stocks = myFunctions.Unique_stocks(sp) 
  expect(unique_stocks).toBe(2)

})

test ('Verify a Purchase' , ()=> 
{

  var sp = new myFunctions.StockPortfolio()
  myFunctions.addShares(sp,"TESLA" , 15);
  myFunctions.addShares(sp,"META" , 20);
  total_shares = myFunctions.purchase_shares( sp ,"META" , 20)
  expect(total_shares).toBe(40) 

})

test ('Verify a Sale', ()=>
{
  var sp = new myFunctions.StockPortfolio()
  myFunctions.addShares(sp,"TESLA" , 15);
  myFunctions.addShares(sp,"META" , 20);
  total_shares = myFunctions.sell_shares(sp , "TESLA" , 5)
  expect(total_shares).toBe(10)

})

test('Get shares for a given symbol',()=>
{
  var sp = new myFunctions.StockPortfolio()
  myFunctions.addShares(sp,"TESLA" , 10);
  myFunctions.addShares(sp,"META" , 20);
  myFunctions.addShares(sp,"NETFLIX" , 20);
  myFunctions.addShares(sp,"CITI" , 30);
  myFunctions.addShares(sp,"AMAZON" , 40);
  shares = myFunctions.getShares(sp , "AMAZON")
  expect(shares).toBe(40)
  
})


test('Portfolio should only contain owned symbols',()=> 
{
  var sp = new myFunctions.StockPortfolio()
  myFunctions.addShares(sp,"TESLA" , 10);
  myFunctions.addShares(sp,"META" , 20);
  valid_add = myFunctions.addShares(sp,"NETFLIX" , 5)
  expect(valid_add).toBe(true)
})

test('Portfolio should only contain owned symbols',()=> 
{
  var sp = new myFunctions.StockPortfolio()
  myFunctions.addShares(sp,"TESLA" , 10);
  myFunctions.addShares(sp,"META" , 20);
  valid_add = myFunctions.addShares(sp,"NETFLIX" , 0)
  expect(valid_add).toBe(false)
})

test('Portfolio should only contain owned symbols',()=> 
{
  var sp = new myFunctions.StockPortfolio()
  myFunctions.addShares(sp,"TESLA" , 10);
  myFunctions.addShares(sp,"META" , 20);
  valid_add = myFunctions.addShares(sp,"META" , 5)
  expect(valid_add).toBe(false)
})

test ('Verify a Sale', ()=>
{
  var sp = new myFunctions.StockPortfolio()
  myFunctions.addShares(sp,"TESLA" , 15);
  myFunctions.addShares(sp,"META" , 20);
 
  //expect(myFunctions.sell_shares(sp,"META" , 30)).toThrow("ShareSaleException")
  try {
    myFunctions.sell_shares(sp,"META" , 30);    
} catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe("ShareSaleException");
}

})




