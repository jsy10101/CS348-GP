const fs = require('fs')
accountID = []
trans = []
balance = []

async function getBal(){
  const filePath = 'Anoushka.json';
    
     const jsonString = await fs.promises.readFile( filePath, 'utf8')

    const data =  JSON.parse(jsonString);

  //  console.log(data.length);
  
   for(let i in data) {
     balance[i] = data[i].balance.substring(1);
   }
  //  console.log(balance);
}
async function getAccountID(){
  const filePath = 'accountID.json';
    
     const jsonString = await fs.promises.readFile( filePath, 'utf8')

    const data =  JSON.parse(jsonString);

  //  console.log(data.length);
  
   for(let i in data) {
    //  console.log(data[i]);
     accountID.push(data[i])
   }
  //  console.log(balance);
}


async function hello() {

  await getBal();
  await getAccountID();
  console.log(balance.length);
  console.log(accountID.length);
  
  
  for ( let i = 0; i < 1000; ++i) {
    var acc1 = Math.floor(Math.random() * 205);
    var acc2 = Math.floor(Math.random() * 205);
    while( acc1 == acc2) {
      acc2 = Math.floor(Math.random() * 205);
    }

    var obj = {
      senderID: accountID[acc1],
      receiverID : accountID[acc2],
      amount : balance[i]
    }

    trans.push(obj);

  if( i == 999 ) {
    console.log(trans.length);
  //  setTimeout(() => {
  //    console.log(accounts.length);

 const data = JSON.stringify(trans);

 fs.writeFile('trans.json', data,  err=> { 
 if(err) { 
 throw err; 
 } 
 });
   
//   }


}
}
}

hello();