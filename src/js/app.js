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

const regularrPurchasesPercent = 0.01;

const increatPurchasesPercent = 0.05;

const spesialPurchasesPercent = 0.3;

cashbacklimit = 3000;


let predrictCashback = 0;

for(const purchase of purchases) { 
    
    console.log(purchase.amound);
    console.log(purchase.category);
    
    if(purchase.category == REGULAR_CATEGORY)  {
        predrictCashback += purchase.amound * regularPurchasesPercent
    }

    if(purchase.category == INCREASED_CATEGORI) {
        predrictCashback += purchase.amound * increasedPurchasesPersent;
    } 
    if (purchase.category == SPECIAL_CATEGORI) {
       predictCashback  += purchase.amound * specialPurchasesPercent;
    }

}; 

//Это первый способ 
let cashback;

if(predrictCashback > 3000){
    cashback = 3000;
} else if(predrictCashback <= 3000){
    cashback = predrictCashback
}

/*
// 2 способ
let cashback = predrictCashback;

if(cashback > 3000){
    cashback = 3000;
}
*/
console.log( predrictCashback);
console.log( cashback)
