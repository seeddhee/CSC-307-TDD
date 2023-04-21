//Red Phase: write a test that informs implementation of the feature
//Green Phase: implement the code to make your tests pass
//Refactor: make the functions less complicated
beforeEach(() => {
   sp = new myFunctions.StockPortfolio();
});


const myFunctions = require('./stock.js');



//Passing anything while initialization is going to generate an error as the constructor takes not parameters
test('Valid Initial Portfolio', () => {
  var sp = new myFunctions.StockPortfolio(0,"TCT");
  try {
    myFunctions.StockPortfolio("TCT");    
} catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe("validation is not defined");
}

})

test('Are there no shares owned', ()=>
{
  const empty = myFunctions.Stock_empty(sp);
  expect(empty).toBe(true);
})


test('Are there no shares owned =>2', ()=>
{
   myFunctions.addShares(sp,"TESLA" , 20);
  const empty = myFunctions.Stock_empty(sp);
  expect(empty).toBe(false);

})

test('Unique ticker symbols' , () =>
{
  myFunctions.addShares(sp,"TESLA" , 20);
  myFunctions.addShares(sp,"META" , 15);
  unique_stocks = myFunctions.Unique_stocks(sp) 
  expect(unique_stocks).toBe(2)

})

test ('Verify a Purchase' , ()=> 
{
  myFunctions.addShares(sp,"TESLA" , 15);
  myFunctions.addShares(sp,"META" , 20);
  total_shares = myFunctions.purchase_shares( sp ,"META" , 20)
  expect(total_shares).toBe(40) 

})

test ('Verify a Sale', ()=>
{
  myFunctions.addShares(sp,"TESLA" , 15);
  myFunctions.addShares(sp,"META" , 20);
  total_shares = myFunctions.sell_shares(sp , "TESLA" , 5)
  expect(total_shares).toBe(10)

})

test('Get shares for a given symbol',()=>
{
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
  myFunctions.addShares(sp,"TESLA" , 10);
  myFunctions.addShares(sp,"META" , 20);
  valid_add = myFunctions.addShares(sp,"NETFLIX" , 5)
  expect(valid_add).toBe(true)
})

test('Portfolio should only contain owned symbols',()=> 
{
  myFunctions.addShares(sp,"TESLA" , 10);
  myFunctions.addShares(sp,"META" , 20);
  valid_add = myFunctions.addShares(sp,"NETFLIX" , 0)
  expect(valid_add).toBe(false)
})

test('Portfolio should only contain owned symbols => Duplicate Ticker Symbol',()=> 
{
  myFunctions.addShares(sp,"TESLA" , 10);
  myFunctions.addShares(sp,"META" , 20);
  valid_add = myFunctions.addShares(sp,"META" , 5)
  expect(valid_add).toBe(false)
})

test ('Verify a Sale', ()=>
{
  myFunctions.addShares(sp,"TESLA" , 15);
  myFunctions.addShares(sp,"META" , 20);
 
  try {
    myFunctions.sell_shares(sp,"META" , 30);    
} catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe("ShareSaleException");
}

})




