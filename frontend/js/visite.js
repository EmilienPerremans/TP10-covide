function montrerVisite(){
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:82/afficherVisite', true);
    xhr.onload = function () {
        let visite = JSON.parse(xhr.responseText);
        for (let i in visite) {
            document.getElementById('tbodyNombreMaladesParVille').innerHTML += "<th>" + visite[i].codeP +"</th>" + "<th>" + visite[i].ville + "</th>" + "<th>" + visite[i].resultA + "</th>";
        }
    }
    xhr.send();
    return false;
}

function affiche(){
    let xhr2 = new XMLHttpRequest();
    xhr2.open('get','http://localhost:82/afficherVisiteBis',true);
    xhr2.onload = function () {
        let bis = JSON.parse(xhr2.responseText);
        for (let a in bis) {
            document.getElementById('nombreMalades').innerHTML += "<p>" + bis[a].resul + "</p>";
        }
    }
    xhr2.send();
    return;
}


function personnes(){
    let x = new XMLHttpRequest();
    x.open('get','http://localhost:82/recupererPersonnes', true);
    x.onload = function (){
        let personnes = JSON.parse(x.responseText);
        for(let i in personnes){
            document.getElementById('personneVisiteVille').innerHTML += "<option value='" + personnes[i].id +"'>" + personnes[i].prenom + " " + personnes[i].nom + "</option>";
        }
    }
    x.send();
    return false;
}


function villes(){
    let b = new XMLHttpRequest();
    b.open('get','http://localhost:82/recupererVilles',true);
    b.onload = function (){
        let villes = JSON.parse(b.responseText);
        for(let j in villes){
            document.getElementById('villeVisitee').innerHTML += "<option>" + villes[j].codeP + "</option>";
        }
    }
    b.send();
    return false;
}

function ajouterVisiteVille(formulaireVisite) {
    let idNAN = formulaireVisite.personneVisiteVille.value;
    id = Number(idNAN);
    console.log(id);

    let ville = formulaireVisite.villeVisitee.value;
    villes = Number(ville);
    console.log(villes)

    let dateVisite = formulaireVisite.dateVisite.value;
    console.log(dateVisite)

    let t = new XMLHttpRequest();
    t.open('get', 'http://localhost:82/AjouterVisite?idD='+id+'&codeP='+villes+'&dateT='+dateVisite, true);

    t.onload = function(){
        if (t.readyState == 4){console.log("ok");}
        else{console.log("0");}
    }
    t.send();
    return false;
}
