function greetfunction(){
    const inputname = document.getElementById("inputname").value ;

    if (!isNaN(inputname)){
        document.getElementById("result").textContent=`enter valid name`;
      

    }else if (inputname.trim() !== ''){
        document.getElementById("result").textContent=`welcome ${inputname} ${" ! "}`;

    }else  {
        document.getElementById("result").textContent=`enter valid name`;

}
}