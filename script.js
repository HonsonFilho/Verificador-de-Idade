
function verify(){
var todaydate = new Date
var today = todaydate.getFullYear()
var birthday = window.document.getElementById('idinputbirth')
var age = today - birthday.value
var txt = window.document.getElementById('idparagrafo')
var img = window.document.getElementById('resultadosimagem')
var genero = window.document.getElementsByName('input')
var iden = ''
if ( genero[0].checked){
    if (age<10){
        txt.innerHTML=(`Você é um menininho de ${age} anos`)
        img.src="assets/criancah.jpg"
    }else if (age>=10 && age<20){
        txt.innerHTML=(`Você é um jovem de ${age} anos`)
        img.src="assets/jovemh.jpg"
    }else if (age>=20 && age<50){
        txt.innerHTML=(`Você é um adulto de ${age} anos`)
        img.src="assets/adultoh.jpg"
    }else if (age>=50){
        txt.innerHTML=(`Você é um idoso de ${age} anos`)
        img.src="assets/idoso.jpg"
    }
    
}else if (genero[1].checked){
    if (age<10){
    txt.innerHTML=(`Você é uma menininha de ${age} anos`)
    img.src="assets/criancam.jpg"
}else if (age>=10 && age<20){
    txt.innerHTML=(`Você é uma jovem de ${age} anos`)
    img.src="assets/jovemm.jpg"
}else if (age>=20 && age<50){
    txt.innerHTML=(`Você é uma adulta de ${age} anos`)
    img.src="assets/adultom.jpg"
}else if (age>=50){
    txt.innerHTML=(`Você é uma idosa de ${age} anos`)
    img.src="assets/idosa.jpg"
}

}else if (genero[2].checked){
    if (age<10){
        txt.innerHTML=(`Você é umx menininhe de ${age} anos`)
        img.src="assets/criancanb.jpg"
    }else if (age>=10 && age<20){
        txt.innerHTML=(`Você é umx jovem de ${age} anos`)
        img.src="assets/jovemnb.jpg"
    }else if (age>=20 && age<50){
        txt.innerHTML=(`Você é umx adulte de ${age} anos`)
        img.src="assets/adultonb.jpg"
    }else if (age>=50){
        txt.innerHTML=(`Você é umx idose de ${age} anos`)
        img.src="assets/idose.jpg"
    }

}



}