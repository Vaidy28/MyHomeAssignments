

function fetchDataFromDatabase(){
return new Promise((resolve,reject)=>{
    console.log("Fetching data from database...")
    const data = false
    setTimeout(()=> {
       if(data==true){
        resolve("Data fetched successfully!")
       }    
       else {
        reject("Data not found!")
       }
    },3000)
    })
}
fetchDataFromDatabase().then(result=>console.log(result)).catch(error=>console.log(error))