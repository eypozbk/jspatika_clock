let fullName = prompt("adınızı giriniz!");
document.querySelector("#myName").innerHTML = fullName


function showTime() {
    
    let a = new Date();
    let hours = a.getHours();
    let minute = a.getMinutes();
    let second = a.getSeconds(); 
    let day = a.getDay();
    
    switch(day){
        case 1:
            day = "pazartesi" ;
            break;
        case 2:
            day = "salı" ;
            break;
        case 3:
            day = "çarşamba" ;
            break;
        case 4:
            day = "perşembe" ;
            break;
        case 5:
            day = "cuma" ;
            break;
        case 6:
            day = "cumartesi" ;
            break;   
        case 7:
            day = "pazar" ;
            break;
        }

    document.querySelector(".clock").innerHTML = hours + ":" + minute +":" + second + ":" + day
setTimeout(showTime, 1000); 
};


showTime();










