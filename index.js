function loaded()
{
    AffichageTableau();
    count();
    moyenne();
    maxNote();
};

var notes = [9, 16, 17.5,14,13,9,19,4,6,2,12,7];


function AffichageTableau(){
    for (var i=0;i<notes.length;i++){
        var note = notes[i];

        document.getElementById('notes').innerHTML += '  </tr><td>'+note+'</td></tr>';
    }
}
function count(){
    var k=0;
for(var i=0;i<notes.length;i++){
    if(notes[i]>=10){
    k++;

    }
}
    
document.getElementById('count').innerHTML = 'le nombre des Notes supérieur a 10 sont ='+k+'';


}
function moyenne(){
    var moy=0;
    var s=0;
    for (var i=0; i<notes.length;i++){
        s= s+notes[i];
       
    }
    moy= s/i;
    document.getElementById('moy').innerHTML = 'la moyenne des Etudiants  est ='+moy+'';
}
function maxNote(){
    var max=0;
    for(var i=0;i<notes.length;i++){
        if(notes[i]>max){
            max=notes[i];
        }
    }
    document.getElementById('max').innerHTML = 'la Notes maximal des etudiants  est ='+max+'';
}