var xhr = new XMLHttpRequest()

let api = 'http://127.0.0.1:3000';

let searchUsers = document.getElementById('search');

xhr.open(
    'GET',
    'http://127.0.0.1:3000/',
    true
);
xhr.send();
    
xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) {
    return
    }

    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);

        let user = data.map( (d, index) => {
            return (
                `<div class="user_card col-12 col-xl-4 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${d.name}
                            </h5>
                            
                            <div class="user_info">
                                <div class="user_info_item">
                                    <a href="tel:${d.phone.replace(/[^0-9]/g, '')}">
                                        ${d.phone}
                                    </a>
                                </div>
                                <div class="user_info_item">
                                    <a href="mailto:${d.email}">
                                        ${d.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="#modal_${index}" class="user_card_link"></a>
                    </div>

                    <div class="modal_sheet" id="modal_${index}">
                        <div class="modal_box">
                            <div class="modal_close">X</div>
                            <h5 class="card-title">
                                ${d.name}
                            </h5>

                            <div class="modal_box_info">
                                <div class="modal_box_info_item w-40">
                                    Телефон: 
                                </div>

                                <div class="modal_box_info_item w-60">
                                    ${d.phone}
                                </div>
                            </div>

                            <div class="modal_box_info">
                                <div class="modal_box_info_item w-40">
                                    Почта: 
                                </div>

                                <div class="modal_box_info_item w-60">
                                    ${d.email}
                                </div>
                            </div>

                            <div class="modal_box_info">
                                <div class="modal_box_info_item w-40">
                                    Дата приема: 
                                </div>

                                <div class="modal_box_info_item w-60">
                                    ${d.hire_date}
                                </div>
                            </div>

                            <div class="modal_box_info">
                                <div class="modal_box_info_item w-40">
                                    Должность: 
                                </div>

                                <div class="modal_box_info_item w-60">
                                    ${d.position_name}
                                </div>
                            </div>

                            <div class="modal_box_info">
                                <div class="modal_box_info_item w-40">
                                    Подразделение: 
                                </div>

                                <div class="modal_box_info_item w-60">
                                    ${d.department}
                                </div>
                            </div>
                        </div>

                        <div class="overlay"></div>
                    </div>
                </div>`
            )
        }).join('');

        document.querySelector('.users_row').innerHTML += user;
    } else {
        console.log('result', JSON.parse(xhr.responseText))
    }
}

let modal = document.querySelectorAll('.user_card');

for (let i = 0; i < modal.length; i++) {
    console.log(`id modal ${modal[i]}`);
    document.getElementById(`modal_${modal}`).magnificPopup({
        type: 'inline',
        midClick: true
    });
}