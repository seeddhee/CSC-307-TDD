function StockPortfolio() 
{

    this.list_of_stocks = []
    
}

// function Valid_Portfolio(Portfolio)
// {
    
//     return Portfolio.shares == 0 && Portfolio.ticker_symbols == ""
// }


function addShares (Portfolio , ticker_symbols , shares)
{   
    for (i=0 ; i < Portfolio.list_of_stocks.length; i++)
    {
        if(Portfolio.list_of_stocks[i].ticker_symbols == ticker_symbols  ){
            return false
        }
    }
    if (shares == 0)
    {
        return false
    }

    else
    {
    Portfolio.list_of_stocks.push({ticker_symbols , shares})
    }
    
    return true
}



function Stock_empty(Portfolio)
{
    return Portfolio.list_of_stocks.length == 0
}


function Unique_stocks(Portfolio){
    return Portfolio.list_of_stocks.length
}


function purchase_shares(Portfolio , tc , new_shares)
{   var fs = 0
    for (i=0 ; i < Portfolio.list_of_stocks.length; i++)
    {
 
        if(Portfolio.list_of_stocks[i].ticker_symbols == tc )
        {
            fs = Portfolio.list_of_stocks[i].shares + new_shares
            Portfolio.list_of_stocks[i].shares += new_shares 
        }   
    }

    return fs
}

function sell_shares(Portfolio , tc , new_shares)
{   var fs = 0

    


    for (i=0 ; i < Portfolio.list_of_stocks.length; i++)
    {
 
        if(Portfolio.list_of_stocks[i].ticker_symbols == tc )
        {   
            if(new_shares> Portfolio.list_of_stocks[i].shares){
            throw new Error ("ShareSaleException");

            }

            else
            {
                fs = Portfolio.list_of_stocks[i].shares - new_shares
            Portfolio.list_of_stocks[i].shares -= new_shares }
        }   
    }

    return fs
}


function getShares(Portfolio , tc)
{   var fs = 0
    for (i=0 ; i < Portfolio.list_of_stocks.length; i++)
    {
 
        if(Portfolio.list_of_stocks[i].ticker_symbols == tc )
        {
           return Portfolio.list_of_stocks[i].shares
        }   
    }


}






exports.StockPortfolio = StockPortfolio;
exports.Stock_empty = Stock_empty;
exports.addShares = addShares;
exports.Unique_stocks = Unique_stocks;
exports.purchase_shares = purchase_shares;
exports.sell_shares = sell_shares;
exports.getShares = getShares