let filename = localStorage.getItem("2dexcel_name")
let name = document.getElementById("name")
let no = document.getElementById("digit")
let amount = document.getElementById("amount")
let type = document.getElementById("type")
var d =[]
var state = JSON.parse(localStorage.getItem(filename))
if(state == null){
d = [] 

}else{
d=state
}
var i = parseInt( localStorage.getItem("position"))
name.value =  d[i].name
no.value =  d[i].no
amount.value =  d[i].amount
type.value = "ထိုးနည်း = "+d[i].type + " နှင့် "+"စုစုပေါင်း = "+d[i].total


function get(v){
    d[i].name = name.value
    d[i].no = no.value
    d[i].amount = amount.value
    d[i].type = v
    d[i].total = get_total(v,amount.value,no.value)
    var ans = JSON.stringify(d)
    localStorage.setItem(filename,ans)
    window.location = window.location="adddata.html" 
    
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