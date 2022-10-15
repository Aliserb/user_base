let api = 'http://127.0.0.1:3000?term=';

let search = document.getElementById('search');

async function getResponse() {
    let response = await fetch(api);
    let data = await response.json();

    let usersRow = document.querySelector('.users_row');

    let key;

    for(key in data) {
        usersRow.innerHTML += `
            <div class="user_card col-12 col-xl-4 col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${data[key].name}
                        </h5>
                        
                        <div class="user_info">
                            <div class="user_info_item">
                                <a href="tel:${data[key].phone.replace(/[^0-9]/g, '')}">
                                    ${data[key].phone}
                                </a>
                            </div>
                            <div class="user_info_item">
                                <a href="mailto:${data[key].email}">
                                    ${data[key].email}
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="#modal_${key}" class="user_card_link open-popup-link"></a>
                </div>

                <div class="modal_sheet white-popup mfp-hide" id="modal_${key}">
                    <div class="modal_box">
                        <h5 class="card-title">
                            ${data[key].name}
                        </h5>

                        <div class="modal_box_info">
                            <div class="modal_box_info_item w-40">
                                Телефон: 
                            </div>

                            <div class="modal_box_info_item w-60">
                                ${data[key].phone}
                            </div>
                        </div>

                        <div class="modal_box_info">
                            <div class="modal_box_info_item w-40">
                                Почта: 
                            </div>

                            <div class="modal_box_info_item w-60">
                                ${data[key].email}
                            </div>
                        </div>

                        <div class="modal_box_info">
                            <div class="modal_box_info_item w-40">
                                Дата приема: 
                            </div>

                            <div class="modal_box_info_item w-60">
                                ${data[key].hire_date}
                            </div>
                        </div>

                        <div class="modal_box_info">
                            <div class="modal_box_info_item w-40">
                                Должность: 
                            </div>

                            <div class="modal_box_info_item w-60">
                                ${data[key].position_name}
                            </div>
                        </div>

                        <div class="modal_box_info">
                            <div class="modal_box_info_item w-40">
                                Подразделение: 
                            </div>

                            <div class="modal_box_info_item w-60">
                                ${data[key].department}
                            </div>
                        </div>
                    </div>

                    <div class="overlay"></div>
                </div>
            </div>
        `;
    }
}

search.oninput = () => {
    api = 'http://127.0.0.1:3000?term=' + search.value;

    let usersRow = document.querySelector('.users_row');
    usersRow.innerHTML = '';

    // console.log(search.value);
    // console.log('api: ' + api);
    getResponse();
}

getResponse();

$('body').on('click', '.open-popup-link', function(){
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
});