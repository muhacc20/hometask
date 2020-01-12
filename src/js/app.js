console.log ('worked')



const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special';

const purchases =[
    {
        amound: 1000,
        category: REGULAR_CATEGORY,
    },
    {
        amound: 10000,
        category:INCREASED_CATEGORY,   
    }, 
    {
        amound: 1000,
        category:REGULAR_CATEGORY,
    },  
    {
        amound: 1000,
        category: SPECIAL_CATEGORY,
    }
];

//let cashback = 0

const regularPurchasesPercent = 0.01;

const increasedPurchasesPercent = 0.05;

const specialPurchasesPercent = 0.3;

cashbacklimit = 3000;


let predictCashback = 0;

for(const purchase of purchases) { 
    
    console.log(purchase.amound);
    console.log(purchase.category);
    
    if(purchase.category == REGULAR_CATEGORY)  {
        predictCashback += purchase.amound * regularPurchasesPercent;
    }

    if(purchase.category == INCREASED_CATEGORY) {
        predictCashback += purchase.amound * increasedPurchasesPercent;
    } 
    if (purchase.category == SPECIAL_CATEGORY) {
       predictCashback  += purchase.amound * specialPurchasesPercent;
    }

}; 

//Это первый способ 



let cashback;

if(predictCashback > 3000){
    cashback = 3000;
} else if(predictCashback <= 3000){
    cashback = predictCashback
}

/*
// 2 способ
let cashback = predrictCashback;

if(cashback > 3000){
    cashback = 3000;
}
*/
console.log( predictCashback);
console.log( cashback)
