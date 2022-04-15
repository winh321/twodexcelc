let tex = document.getElementById("text")
let filename = localStorage.getItem("2dexcel_name")
var d =[]
var state = JSON.parse(localStorage.getItem(filename))
if(state == null){
d = [] 

}else{
d=state
} 
tex.value = data()
function data(){
    var str = ""
    for(i=0;i<d.length;i++){
        var name = d[i].name
        var no = d[i].no
        var amount = d[i].amount
        var type = d[i].type
        if(name.trim() == "unknown"){
            str +=`
`+(i+1)+"#"+no+"/"+st(type)+"="+amount
        }else{
            str += `
`+(i+1)+"#"+name+"/"+no +"/"+st(type)+"="+amount
        }
   
    }
    str = `
`+str.trim()
    return str
}

function st(str){
    var as = ""
    var a = str.trim()
    if(a == "ဒဲ့"){
        as = "၁"   
    }else if(a == "အာ"){
        as = "၂"        
    }else if(a == "ထိပ်"){
        as = "၃"        
    }else if(a == "ပိတ်"){
        as = "၄"        
    }else if(a == "ပါတ်"){
        as = "၅"        
    }else if(a == "ပူး"){
        as = "၆"        
    }else if(a == "ဘရိတ်"){
        as = "၇"        
    }else if(a == "ပါဝါ"){
        as = "၈"        
    }else if(a == "မကပ်"){
        as = "၉"        
    }else if(a == "စုံကပ်"){
        as = "၁၀"        
    }else if(a == "နက္ခက်"){
        as = "၁၁"        
    }else if(a == "စုံစုံ"){
        as = "၁၂"        
    }else if(a == "မမ"){
        as = "၁၃"        
    }else if(a == "စုံမ"){
        as = "၁၄"        
    }else if(a == "မစုံ"){
        as = "၁၅"        
    }else if(a == "ညီကို"){
        as = "၁၆"        
    }else if(a == "ခွေ"){
        as = "၁၇"        
    }else if(a == "ပူးခွေ"){
        as = "၁၈"        
    }
    return as
}

function coop(){
var data = text.value
alert(data)
}

