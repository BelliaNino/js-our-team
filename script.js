const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

//il nodo della row per stampare il markup in pagina
const rowEl = document.querySelector('section.cards .row')

//nod form per aggiungere una nuova card
const formEl = document.getElementById('newMember')

const nameEl = document.getElementById('newName')
const roleEl = document.getElementById('newRole')
const emailEl = document.getElementById('newEmail')
const imgEl = document.getElementById('formFile')


//form per inserire una nuova card
formEl.addEventListener(`submit`, function(e){
  e.preventDefault()

  console.log(nameEl.value, roleEl.value, emailEl.value, imgEl.value);
  
  const name = nameEl.value
  const role = roleEl.value
  const email = emailEl.value
  const img = imgEl.value
  
  const newCard = {
    name, role ,email, img
  }

  console.log(newCard);

  teamMembers.push(newCard)

  printCard()


})





//apro un ciclo for per estrapolare gli oggetti all'interno della array
//importo il markup provato precedentemente nel file html
//faccio una variabile per dividere i singoli elementi dell'object 
//sostituisco gli elementi con gli elementi dell'oject

function printCard(){

//apro una stringa vuota per richiamare il markup
let cardMember = ``


for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i]

  const { name, role, email, img } = member 
  console.log(member);
  const markup = `
  <div class="col-12 col-md-6 col-lg-4">
  <div class="card mx-auto" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${role}</p>
        <p><a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          href="#">
          ${email}
        </a></p>
      </div>
  </div>
</div>`

console.log(markup);

//unisco il markup alla stringa vuota 
cardMember += markup

}

console.log(cardMember);

rowEl.innerHTML = cardMember
}

printCard()
