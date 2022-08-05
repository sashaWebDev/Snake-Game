let btn = document.querySelector('button')
let title = document.querySelector('.userName')
let wrapper = document.querySelector('.area-wrapper')
let area = document.querySelector('#area')
let move = 0;
let result = ''

btn.addEventListener('click', function(event){
    event.preventDefault()
    let box = document.querySelector('.box')
    let name = document.querySelector('.name').value 
    let surname = document.querySelector('.surname').value
    box.style.display = "none"
    wrapper.style.display = "block"
    title.textContent = "Привіт, " + name +' '+ surname

    area.addEventListener('click', e => {
        if(e.target.className === 'boxing'){
           move % 2 === 0 ? e.target.innerHTML = "X" : e.target.innerHTML = "0"
           move++;
           check();

        } 
    })
})

const check = () => {
    const boxes = document.querySelectorAll('.boxing')
    let arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0; i < arr.length; i++){
        if(
            boxes[arr[i][0]].innerHTML == "X" 
         && boxes[arr[i][1]].innerHTML == "X"
         && boxes[arr[i][2]].innerHTML == "X"
        ){
            result = "хрестики"
            prepeaResult(result)    
        } else if(
            
                boxes[arr[i][0]].innerHTML == "0" 
             && boxes[arr[i][1]].innerHTML == "0"
             && boxes[arr[i][2]].innerHTML == "0"
        ){
            result = "Нулики"
            prepeaResult(result)    
        } 
    }
}

let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];

for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
}

close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};

let modalTxt = document.querySelector('.modal_txt')
let modalWinwowWrapper = document.querySelector('.modal-window-wrapper')

const prepeaResult = winner => {
   modalTxt.innerHTML = `Перемогли ${winner} !`
   modalWinwowWrapper.style.display = "flex"
   close_modal.onclick = function(){
    window.location.reload()
   }
}


