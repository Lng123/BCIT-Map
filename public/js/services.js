var createDropdown = (name, id) => {
    return `
    <button class="dropdown-btn"> ${name} <i class="fa fa-caret-down"></i> </button> 
    <div id=${id} class="dropdown-container"> </div>`;
};

var createButton = (building, name, description, link, overlay) => {
    return `<button class="nav-btn" building="${building}" name="${name}" description="${description}" link="${link}" overlay="${overlay}"> ${name} </button>`;
};

var getData = async () => {
    // Server serves json data to this route
    let data = await fetch('/servicesData');
    let json = await data.json();
    return json;
};

var populateMenu = async () => {
    let data = await getData();
    document.getElementById('loading').remove();
    let campusMap = document.getElementById('campus-map');
    campusMap.setAttribute('style', 'display: block');
    

    let serviceGroups = data.serviceGroups[0]; 

    let nav = document.getElementById('sidenav');

    // If you need to create dopdowns, the way I did it was to have the dropdown options in a separate table in the database.
    // An entry in the table "serviceGroups" will correspond to a dropdown. An entry in the table "services" will correspond to a button that highlights or swaps overlays.
    // Each entry in "services" will take contain id of the dropdown that it falls under as a foreign key.

    //If you don't need to create dropdowns, then just loop through everything and modify createButton() as needed
    serviceGroups.forEach((element) => {
        nav.insertAdjacentHTML('beforeend', createDropdown(element.name, element.id));
    });

    let html = document.querySelector('html');
    let body = document.querySelector('body');
    html.style.height = '';
    body.style.height = '';

    let services = data.services[0];

    //You only need this section if you have dropdowns, if you did it the same way as I did with foreign keys, then "e.group" will be whatever your foreign key is called
    services.forEach((e) => {
        if (!e.group) {
            nav.insertAdjacentHTML(
                'beforeend',
                createButton(e.buildingNumber, e.serviceName, e.description, e.link, e.overlay)
            );
            return;
        }
        let dropdownContainer = document.getElementById(e.group);
        dropdownContainer.insertAdjacentHTML(
            'beforeend',
            createButton(e.buildingNumber, e.serviceName, e.description, e.link, e.overlay)
        );
    });

    let script = document.createElement('script');
    script.src = 'js/script.js';
    campusMap.append(script);
};

populateMenu();

document.getElementById('sidenav').addEventListener('click', (e) => {
    if (e.target.getAttribute('overlay') !== 'null') {
    }
    if (e.target.className === 'nav-btn') {
        selectService(
            e.target.getAttribute('building'),
            e.target.getAttribute('name'),
            e.target.getAttribute('description'),
            e.target.getAttribute('link'),
            e.target.getAttribute('overlay')
        );
    }
});
