 let name = document.getElementById("name")
 let no = document.getElementById("digit")
let amount = document.getElementById("amount")
let table = document.getElementById("tab")
let total_m = document.getElementById("total")
let filename = localStorage.getItem("2dexcel_name")


var d = []
function datastart(){
    var state = JSON.parse(localStorage.getItem(filename))
    if(state == null){
        d = [] 
    
    }else{
        d=state
    }   
}

datastart()
show()

function get(c){
    var s = new Object()
    s.name = name.value
    s.no = no.value
    s.amount = amount.value
    s.type = c
    s.total = get_total(s.type,s.amount,s.no)
    
    var bol = no.value == "" && !(c == "ပူး" || c== "ပါဝါ" || c == "နက္ခက်" || c=="ညီကို" || c== "မမ" || c== "စုံစုံ" || c== "မစုံ" || c== "စုံမ")
  var bo = (c == "ပူး" || c== "ပါဝါ" || c == "နက္ခက်" || c=="ညီကို" || c== "မမ" || c== "စုံစုံ" || c== "မစုံ" || c== "စုံမ")
    if(name.value == "" && d.length == 0){
      alert("Name missing!")
  }else if(amount.value == ""){
alert("Amount Missing")
  }else if(no.value.length>7){
alert("not greater than 7 digit")
  }else if(bol){
alert("Number Missing")
  }else{
      if(name.value.trim() == ""){
          s.name = d[d.length-1].name
      }
      if(bo){
          s.no = "-"
      }

      addTo(s.name,s.no,s.amount,s.type,s.total)
  }
}

var get_total = (a,b,c) =>{
    b = parseInt(b)
    a= a.toString()
    var s = 0
    if(a == "ဒဲ့"){
        s = b
    }else if(a == "အာ"){
        s = b*2
    }else if(a == "ပါတ်"){
        s = b*19
    }else if(a == "ခွေ"){
        c=c.length
        var d = (c*c)-c
       s = b*d
    }else if(a == "ပူးခွေ"){
        c=c.length
        var d = (c*c)
       s = b*d
    }else if(a == "ညီကို"){
        s = b*20
    }else if(a == "မမ" || a == "စုံစုံ" ||a == "မစုံ" ||a == "စုံမ"){
        s = b*25
    }else{
        s = b*10
    }

    return s
}

var addTo= (name,no,amount,type,total)=>{
    datastart()
    var f = new Object()
    f.name = name
    f.no = no
    f.type = type
    f.total = total
    f.amount = amount
    d.push(f)
    var ans = JSON.stringify(d)
    localStorage.setItem(filename,ans) 
    show()
    cl()
}
function cl(){
    name.value = ""
    no.value = ""
    amount.value = ""

}

function del(){
    var b = confirm("Do you want to delete all data?")
 
     if(b){
         d=[]
         localStorage.setItem(filename,null) 
         show()   
        } 
}

function show(){
    var th = `
     <tr>
    <th>No</th>
    <th>Name</th>
    <th>Digit</th>
    <th>Amount</th>
    <th>How</th>
    <th>Total</th>
    <th>Edit</th>
    <th>Delete</th>            
</tr>`
var td= ""
for(i=0;i<d.length;i++){
td += "<tr>"+
"<td>"+(i+1)+"</td>"+
"<td>"+ d[i].name+ "</td>"+
"<td>"+d[i].no+"</td>"+
"<td>"+d[i].amount+"</td>"+
"<td>"+d[i].type+"</td>"+
"<td>"+d[i].total+"</td>"+
"<td><img src='edit.png' onclick='edit("+i+");'></td>" +
"<td><img src='delete.jpg'  onclick='de("+i+");'></td>"

}
table.innerHTML = "<table border='1px'>"+th+td+"</table>"
table.scrollTop = table.scrollHeight
total_m.value = total()
}


function de(x){
    var b = confirm("Do you want to delete?")
 
    if(b){
        d.splice(x,1)
        localStorage.setItem(filename,null) 
        show()   
       } 

}

function edit(i){
    localStorage.setItem("position",i)
    window.location = window.location="edit.html" 
}


function total(){
    var t=0
    for(i=0;i<d.length;i++){
        t += parseInt(d[i].total.toString()) }
return "Total = "+t;
}

function cop(){
    window.location = window.location="copy.html" 
}
