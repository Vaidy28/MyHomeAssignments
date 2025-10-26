

let browser='Chrome'
function checkBrowserVersion(timeout,cb){
    console.log("Waiting for 2 seconds....")
    setTimeout(() => {
        cb(browser); 
    },2000 );
    //cb(334)
}

function b(browser){
    console.log(browser + ' ' + 'Browser Version is:')
    console.log("334.27.56")
}

checkBrowserVersion(2000,b)

