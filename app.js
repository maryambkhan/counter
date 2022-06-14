let count = 0;
const value = document.getElementById('value');
const btnDec = document.getElementById('dec');
const btnRes = document.getElementById('reset');
const btnInc = document.getElementById('inc');
//decrease
function setCountD(e){
  const styles = e.currentTarget;
    count--;
  if(count < 0){
    value.style.color = "red";
  }
  value.textContent = count;
};
btnDec.addEventListener("click",setCountD);
//increase
function setCountI(e){
  const styles = e.currentTarget;
    count++;
  if(count > 0){
    value.style.color = "green";
  }
  value.textContent = count;
};
btnInc.addEventListener("click",setCountI);
//reset
function setCountR(e){
  const styles = e.currentTarget;
    count = 0;
  if(count === 0){
    value.style.color = "#222";
  }
  value.textContent = count;
};
btnRes.addEventListener("click",setCountR);

