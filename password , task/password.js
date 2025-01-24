const password = document.getElementById("password")
const msg = document.getElementById("msg")

// password.addEventListener("input",()=>{
//   let length = password.value.length

//   if(length >= 5 && length<8){
//     msg.innerHTML = "weak Password"
//     msg.style.color = "Red"
//   }else if(length >= 9 && length<11){
//     msg.innerHTML = "Good"
//     msg.style.color = "Blue"
//   }else if(length >= 12){
//     msg.innerHTML = "Strong Password"
//     msg.style.color = "Green"
//   }
// })


// password.addEventListener("input",()=>{
//   let length = password.value.length

//   if(length <= 6 || length>10){
//     msg.innerHTML = "Limit your password in between 6 to 10"
//     msg.style.color = "Red"
//   }
//   else{
//     msg.innerHTML = "all good"
//     msg.style.color = "green"
//   }
// })

password.addEventListener("input", () => {
    const passwordValue = password.value;
    const length = password.value.length;
    
    if (length <= 6 || length > 10) {
      msg.innerHTML = "Limit your password to between 6 and 10 characters";
      msg.style.color = "Red";
    } else if (!/[A-Z]/.test(passwordValue)) {
      msg.innerHTML = "Password must include at least one uppercase letter";
      msg.style.color = "Red";
    } else if (!/[a-z]/.test(passwordValue)) {
      msg.innerHTML = "Password must include at least one lowercase letter";
      msg.style.color = "Red";
    } else if (!/[0-9]/.test(passwordValue)) {
      msg.innerHTML = "Password must include at least one number";
      msg.style.color = "Red";
    } else if (!/[^a-zA-Z0-9]/.test(passwordValue)) {
      msg.innerHTML = "Password must include at least one special character";
      msg.style.color = "Red";
    } else {
      msg.innerHTML = "All good";
      msg.style.color = "Green";
    }

    if(length===1){
        if(/[^a-zA-Z0-9]/.test(passwordValue)===true){
            msg.innerHTML = "Starting letter shon't be a special character";
            msg.style.color = "red";
        }
    }
  });
  