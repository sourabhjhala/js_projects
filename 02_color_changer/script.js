

const colorChngBtn =  document.querySelectorAll(".color-chng");
const text = document.querySelector("h1");



// color change fucntion //
colorChng();
function colorChng(){
    colorChngBtn.forEach((btn)=>{

        btn.addEventListener("click",function(e){
            let btnName = e.target.id
            
            if(btnName === "blue"){
                document.body.style.backgroundColor = "blue";
            }else if(btnName === "yellow"){
                document.body.style.backgroundColor = "yellow";
                
            }else if(btnName === "red"){
                document.body.style.backgroundColor = "red";

            }else{
                document.body.style.backgroundColor = "green";

            }
        })
    })
}