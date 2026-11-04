document.getElementById("form").addEventListener("submit",function(event){

 event.preventDefault()

   let Patient=document.getElementById("patientName").value
   let  age=document.getElementById("Age").value
   let phone= document.getElementById("patientphonenumber").value
   let doctor=document.getElementById("Doctors").value
let fee= Number(document.getElementById("Consultation").value)
let days= Number(document.getElementById( "ConsultationDays").value)
let length=Number.length

console.log(Patient)

document.getElementById("displayname").innerHTML=("PatientName:"+Patient)
document.getElementById("displayage").innerHTML=("Age:"+age)
document.getElementById("displayphn").innerHTML=("Phonenumber:"+phone)
document.getElementById("displaydoc").innerHTML=("DoctorsName:"+doctor)
document.getElementById("displayfee").innerHTML=("Consultationfee:"+fee)
document.getElementById("displayday").innerHTML=("Numberofconsultationdays:"+days)

if(Patient==""){
    document.getElementById("displayname").innerHTML="patient name should not be empty"
}
if(age<=0){
    document.getElementById("displayage").innerHTML=""
}
    if( length !=10){
        document.getElementById("error").innerHTML="Enter 10 Digit"
        let totalconsulatationfee = fee*days
     document.getElementById("displayst").innerHTML = ("Total Consultation Fee :"+totalconsulatationfee)

    let discount=0
    if(age<18){
        discount=5
    }
     if(age>18 && age<59){
            document.getElementById("discountl").innerHTML = ("NO discount")
 
    }
     if(age>60){
        discount=15
    }
    let addis=(9000*discount)/100
    document.getElementById("discount").innerHTML = ("Age discount"+discount+"% :"+addis)

    let sercharge=0
    if(fee>1000){
        sercharge=200
    document.getElementById("ser").innerHTML = ("Service Charge :"+sercharge)

    }else{
    document.getElementById("ser").innerHTML = ""
    }
    let aditi=0
     if(days>5){
        aditi=300
    document.getElementById("aditional").innerHTML = ("Additional Discount :"+aditi)

    }else{
     document.getElementById("aditional").innerHTML = ""
    }
    let finalpay=(tcf-addis-aditi)+sercharge
    document.getElementById("finalpay").innerHTML = ("Final Payable Amount :"+finalpay)

    localStorage.setItem("name",name)
    localStorage.setItem("number" +number)  


document.getElementById("forml").addEventListener("submit",function(event){
    event.preventDefault()
    let Customer = localStorage.getItem("name","number")
    document.getElementById("lsname").innerHTML = Customer
})
document.getElementById("rem").addEventListener("click",function(event){
    event.preventDefault()
    localStorage.removeItem("Customer")
    localStorage.removeItem("number")
     localStorage.removeItem("Isname").innerHTML=""
      localStorage.removeItem("Isnamel").innerHTML=""
      if(name>60){
document.getElementById("great").innerHTML = ("Senior Citizen Benefit Applied")
}else{
document.getElementById("great").innerHTML = ("Juniour Citizen Benefit Applied")
}
if(finalpay>5000){
 document.getElementById("greatl").innerHTML = ("High Consultation Expense")   
}else{
 document.getElementById("greatl").innerHTML = ("Medium Consultation Expense")   
}

    


})
    }

  








})