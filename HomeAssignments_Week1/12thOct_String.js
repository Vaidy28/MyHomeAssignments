let org='level'
let rev=''
for(let i=org.length;i>=0;i--){
rev=rev+org.charAt(i)
}
console.log(rev)
if(org==rev){
    console.log(org +' '+ 'is Palindrome')
}
else{
    console.log(org +' '+ 'is not Palindrome')
}