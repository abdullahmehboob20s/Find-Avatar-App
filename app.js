let input = document.querySelector(".input")
let button = document.querySelector(".button")
let button123 = document.querySelector(".button123")
let image = document.querySelector(".image")
let input2 = document.querySelector(".input123")
let inherit = document.querySelector(".inherit")
let back = document.querySelector(".backbutton")

button123.addEventListener("click",()=>{
    if(input2.value === "male"){
        inherit.style.display = "none"
        button.addEventListener("click",changemale)
        
        input2.value = ""
    }
    else if(input2.value === "female"){
        inherit.style.display = "none"
        button.addEventListener("click",changefemale)
     
        input2.value = ""
    }
    else{
        alert("enter male or female")
        input2.value = ""
    }
    
})
let changemale = ()=>{
    let a = input.value
    if(!input.value){
        alert("Enter Your Name")
        return
    }
    image.src = `https://joeschmoe.io/api/v1/male/${a}`
    input.value = ""
}
let changefemale = ()=>{
    let b = input.value
    if(!input.value){
        alert("Enter Your Name")
        return
    }
    image.src = `https://joeschmoe.io/api/v1/female/${b}`
    input.value = ""
}
back.addEventListener("click",()=>{
    location.reload()
})
    

