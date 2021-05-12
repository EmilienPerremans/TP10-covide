function initialiserPage(){
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:82/recupererVilles',true);
    xhr.onload = function (){
        let villes = JSON.parse(xhr.responseText);
        for(let i in villes){
            document.getElementById("listeVilles").innerHTML += "<li>" + villes[i].codeP + " " + villes[i].ville + "</li>";
        }
    }
    xhr.send();
    return false;
}

function ajouterVille(formulaireVille){
    let code = formulaireVille.codePostal.value;
    let ville = formulaireVille.nomVille.value;

    let xhr = new XMLHttpRequest();
     xhr.open('get','http://localhost:82/enregistrerVille?codepostal='+code+'&nomville='+ville,true);

    xhr.onload = function(){        if (xhr.readyState == 4){            console.log("ok");        }else{            console.log("0");        }     }
     xhr.send();
    return false
    window.location.reload(false);
}
