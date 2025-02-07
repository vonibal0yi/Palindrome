const input= document.getElementById("input") //gives the whole tag
const h=document.getElementById("h")
//lets make a way to get whats inside the 




function reverseString(str){
    return str.split("").reverse().join("")
}

 function check(){
    const value = input.value
    const reverse = reverseString(value)

    if (value === reverse){
       h.innerHTML="Palindrome";
        h.style.color="green"
    }else{
         h.innerHTML="Not a Palindrome";
        h.style.color="red"
    }
    
input.value=""
}
