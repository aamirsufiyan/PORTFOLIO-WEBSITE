const { log } = require("console")

function sendmail()
{
    let params={
        name: document.getElementById("name").value ,
        email: document.getElementById("mail").value ,
        message: document.getElementById("msg").value
    }


const serviceid="service_mjfbbpf"
const templateid="template_glwxmui"

emailjs.send(serviceid,templateid,params)
.then(
    res =>{
        document.getElementById("name").value=""
        document.getElementById("mail").value=""
        document.getElementById("msg").value=""
        console.log(res)
        alert("Message sent.")
    }
)
.catch(error=>console.log(error))
}

function toggleIcon() {
  document.getElementById("icon1").classList.toggle("hidden");
  document.getElementById("icon2").classList.toggle("hidden");
  
}
