const toastBox = document.querySelector(".toast-notify");
let successMsg = ` <i class="ri-checkbox-circle-fill"></i> SuccessFully Submitted`;
let errorMsg = ` <i class="ri-close-circle-fill"></i> Please fix the error!`;
let invalidMsg = `<i class="ri-error-warning-fill"></i> This msg is invalid`;

function showNotification(msg) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes("error")) {
        toast.classList.add("error");
    }

    if (msg.includes("invalid")) {
        toast.classList.add("invalid");
    }

    setTimeout(() => toast.remove(), 5000);
};


const btnBox = document.querySelector(".btn-box");

btnBox.addEventListener("click",(e)=>{
    console.log(e);
    const toastBtnClr = e.target.innerText 
        if(toastBtnClr === "Error"){
            btnBox.children[0].classList.add("error")
        }else if(toastBtnClr === "Success"){
            btnBox.children[1].classList.add("success")

        }else{
            btnBox.children[2].classList.add("invalid")

        }

        setTimeout(() => {
            for(let i =0; i< 3 ; i++){

                btnBox.children[i].classList.remove("error","success","invalid");
            }
        }, 5000);
},false)