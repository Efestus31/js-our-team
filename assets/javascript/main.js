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

//selezioniamo gli elementi nella DOM
const teamEl = document.getElementById('team');


let definitiveMarkup = '';
//Elaborazione dati
for (let i = 0; i < teamMembers.length; i++) {

    const member = teamMembers[i]

    const markup = generate_team_member_card(member)

definitiveMarkup += markup;

}


function generate_team_member_card(member) {

    const {name, role, email, img} = member

    return `
    <div class="col">
            <div class="card mt-5" style="width: 22rem;">
                <img src="${img}" class="card-img-top" alt="Team Member picture">
                <div class="card-body">
                    <div class="text-section">
                        <h5 class="card-title fw-bold">${name}</h5>
                        <p class="card-text fs-6">${role}</p>
                        <a href="">${email}</a>
                    </div>
                 </div>
            </div>
     </div>
    `
}

teamEl.innerHTML = definitiveMarkup
