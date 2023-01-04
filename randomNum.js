var randNum = Math.floor(Math.random()*101);
var sumclick = 1;
function getNum(){
    const Guess_Num = document.getElementById('getNum').value;
    if (Guess_Num == randNum){
        alert("ถูกต้องค่าที่ถูกคือ : "+ randNum +" คุณทายไปทั้งหมด : "+ sumclick);
    }else if (Guess_Num > randNum){
        sumclick++;
        alert("มากกว่า");
    }else{
        sumclick++;
        alert("น้อยกว่า");
    }
}