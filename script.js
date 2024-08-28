// MARKUP side
// 1.recupero l'elemento dal Dom
const gridIndex = document.getElementById('gridTeam');

//2.raccolta dati
//creo la matrice
const team = [
    {fullName: 'Wayne Barnett' , job: 'Founder & CEO' , imgMember: 'wayne-barnett-founder-ceo.jpg'},
    {fullName: 'Angela Caroll' , job: 'Chief Editor' , imgMember: 'angela-caroll-chief-editor.jpg'},
    {fullName: 'Walter Gordon' , job: 'Office Manager' , imgMember: 'walter-gordon-office-manager.jpg'},
    {fullName: 'Angela Lopez' , job: 'Social Media Manager' , imgMember: 'angela-lopez-social-media-manager.jpg'},
    {fullName: 'Scott Estrada' , job: 'Developer' , imgMember: 'scott-estrada-developer.jpg'},
    {fullName: 'Barbara Ramos' , job: 'Graphic Designer' , imgMember: 'barbara-ramos-graphic-designer.jpg'},
]
console.table(team)    
// 3.lavorazione dati
// giro dentro all'array team
let listItems = '';
for(member of team){
    listItems += `
    <li>
        <img src="img/${member.imgMember}" alt="${member.fullName}">
        <div class="side-card">
            <h3>${member.fullName}</h3>
            <p>${member.job}</p>
        </div>
    </li>
    `
}
console.log(listItems)

    
// 4.generazione output
gridIndex.innerHTML = listItems;