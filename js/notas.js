function adicionarurgente() {
    var novanota, nota
    novanota=document.createElement("li")
    novanota.id="novanota"
    novanota.innerHTML=nota=document.getElementById("nota").value
    var div=document.getElementById("urgente")
    div.appendChild(novanota)
}

function adicionarnaourgente() {
    var novanota, nota
    novanota=document.createElement("li")
    novanota.id="novanota"
    novanota.innerHTML=nota=document.getElementById("nota").value
    var div=document.getElementById("naourgente")
    div.appendChild(novanota)
}