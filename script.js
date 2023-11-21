const person = [
    {
        id: 1,
        names: 'Susan Smith',
        job: 'web developer',
        img: '/person-1_rfzshl.jpg',
        content: 
        `I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before 
        they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, 
        cold-pressed four dollar toast everyday carry`
    },
    {
        id: 2,
        names: 'Anna Johnson',
        job: 'web designer',
        img: '/person-2_np9x5l.jpg',
        content: 
        `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub
         deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.`
    },
    {
        id: 3,
        names: 'Peter Jones',
        job: 'intern',
        img: '/person-3_ipa0mj.jpg',
        content: 
        `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie 
        waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.`
    },
    {
        id: 4,
        names: 'Bill Anderson',
        job: 'The boss',
        img: '/person-4_t9nxjt.jpg',
        content: 
        `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo 
        actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.`
    },
];

const img = document.getElementById('person-image');
const names = document.getElementById('names');
const job = document.getElementById('job');
const content = document.getElementById('content');
// console.log(person[1].job)

const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');



let index = 0;
window.addEventListener('DOMContentLoaded', function () {
    showPerson();
})

function showPerson() {
    const item = person[index];
    img.src = item.img;
    names.textContent = item.names;
    job.textContent = item.job;
    content.textContent = item.content;
}


nextBtn.addEventListener("click", function () {
    index++;
    if (index > person.length - 1) {
        index = 0;
    }
    showPerson();
})


prevBtn.addEventListener("click", function () {
    index--;
    if (index < 0) {
        index = person.length - 1;
    }
    showPerson();
})

// // ... When the page dome is fully loaded.
// window.addEventListener('DOMContentLoaded', function () {
//     console.log('bake')
// })