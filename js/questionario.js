const btnStart = document.querySelector('#bto-start');
const intro = document.querySelector('.step-01');
const contentChange = document.querySelector('.content-change');

const steps = document.querySelectorAll('.step');
const inputsIntro = document.querySelectorAll('.step-01 input[type="radio"]');
const groups = document.querySelectorAll('.group');
const btnNext = document.querySelectorAll('.next');

for (let i = 0; i < steps.length; i++) {

    for (let j = 0; j < btnNext.length; j++) {
        btnNext[j].addEventListener('click', e => {
            e.preventDefault();
            let type;

            // $this.parentNode.parentNode.parentNode.classList.remove('is--active');
            // $this.parentNode.parentNode.parentNode.nextElementSibling.classList.add('is--active');

            for (let i = 0; i < inputsIntro.length; i++) {

                if (inputsIntro[i].checked === true) {
                    type = inputsIntro[i].value;

                    for (let x = 0; x < groups.length; x++) {
                        if (groups[x].dataset.type == type) {
                            steps[0].classList.remove('is--active');

                            groups[x].querySelectorAll('.step')[0].classList.add('is--active');
                            groups[x].classList.add('is--active');

                        }
                    }
                }
            }
        });
    };
}

function submitForm() {
    var respConsumidor = [];
    var divConsumidor = document.querySelectorAll('div.group[data-type="consumidor"] .step input');
    for (var i = 0; i < divConsumidor.length; i++) {
        if (divConsumidor[i].checked == true) {
            respConsumidor.push(divConsumidor[i].value);
            console.log(respConsumidor);
        }
    }

    var consumidor = {
        'Pergunta_Consumidor1': respConsumidor[0],
        'Pergunta_Consumidor2': respConsumidor[1],
        'Pergunta_Consumidor3': respConsumidor[2],
        'Pergunta_Consumidor4': respConsumidor[3],
    }

    var btnConsumidor = document.querySelector('button.consumidor');
    btnConsumidor.addEventListener('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: '//landfy.smartcampaign.com.br/landfy/e001677c-b4a7-11e9-b8b4-0e7eae3ca056',
            type: 'GET',
            data: JSON.stringify(consumidor),
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    })

    var respPintor = [];
    var divPintor = document.querySelectorAll('div.group[data-type="pintor"] .step input');
    for (var i = 0; i < divPintor.length; i++) {
        if (divPintor[i].checked == true) {
            respPintor = respPintor.push(divPintor[i].value);
        }
    }

    var pintor = {
        'Pergunta_Pintor1': respPintor[0],
        'Pergunta_Pintor2': respPintor[1],
        'Pergunta_Pintor3': respPintor[2],
        'Pergunta_Pintor4': respPintor[3]
    }

    var btnPintor = document.querySelector('button.pintor');
    btnPintor.addEventListener('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: '//landfy.smartcampaign.com.br/landfy/e001677c-b4a7-11e9-b8b4-0e7eae3ca056',
            type: 'GET',
            data: JSON.stringify(pintor),
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    })


    var respArquiteto = [];
    var divArquiteto = document.querySelectorAll('div.group[data-type="arquiteto"] .step input');
    for (var i = 0; i < divArquiteto.length; i++) {
        if (divArquiteto[i].checked == true) {
            respArquiteto.push(divArquiteto[i].value);
        }
    }

    var arquiteto = {
        'Pergunta_Pintor1': respArquiteto[0],
        'Pergunta_Pintor2': respArquiteto[1],
        'Pergunta_Pintor3': respArquiteto[2],
    }

    var btnArquiteto = document.querySelector('button.arquiteto');
    btnArquiteto.addEventListener('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: '//landfy.smartcampaign.com.br/landfy/e001677c-b4a7-11e9-b8b4-0e7eae3ca056',
            type: 'GET',
            data: JSON.stringify(arquiteto),
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    })
}
submitForm();



btnStart.addEventListener('click', () => {
    contentChange.classList.add('is--inactive');
    intro.classList.add('is--active');
});
