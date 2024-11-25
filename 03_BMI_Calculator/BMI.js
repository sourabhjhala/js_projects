const form = document.querySelector(".form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

   const height = parseInt(document.getElementById("height").value)
  const weight =  parseInt(document.getElementById("weight").value)
  const result = document.getElementById("result")
  const bmiGuide = document.getElementById("bmi-guide")

   if(height === ""||height < 0||isNaN(height)){

    result.innerHTML = `Please Enter Vaild Height`
   }
   else if(weight === ""||weight < 0||isNaN(weight)){
    result.innerHTML = `Please Enter Vaild Weight`

   }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    result.innerHTML = `<span> BMI => ${bmi}</span>`
    

    if(bmi > 24.9){
        bmiGuide.innerHTML = `You Are Overweight ${bmi}`
    }else if(bmi < 18.6){
        bmiGuide.innerHTML = `You Are Underweight ${bmi}`
    }else if(bmi <= 24.9 || bmi >=18.6){
        bmiGuide.innerHTML = `You Are Normal Weight ${bmi}`
    }
   }


    
})