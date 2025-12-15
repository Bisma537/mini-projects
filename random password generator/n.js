//random password generator
function generatepassword(length,includelowercase,includeuppercase,includesymbol,includenumbers){
    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const symbol="!@#$*&_-";
    let allowedchars="";
    let password="";
    allowedchars +=  includelowercase? lowercase:"";
    allowedchars +=  includeuppercase? uppercase:"";
    allowedchars +=  includenumbers? numbers:"";
    allowedchars +=  includesymbol? symbol:"";
    if (passwordlength <=0){
        console.log("password length must atleast 1 ");
    }
    if (allowedchars.length ===0){
        console.log("atleast one character should be there ");
    }
    for(let i=0; i<length; i++){
        const randomindex=Math.floor(Math.random()*allowedchars.length);
        password += allowedchars[randomindex]
    }
    return password;
}
const passwordlength=12;
const includelowercase=true;
const includeuppercase=true;
const includesymbol=true;
const includenumbers=true;

const password=generatepassword(passwordlength,
                                includelowercase,
                                includeuppercase,
                                includesymbol,
                                includenumbers);
console.log(`generate password:${password}`);                                
