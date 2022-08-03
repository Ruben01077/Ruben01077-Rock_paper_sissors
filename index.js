let rock_user1 = document.getElementById('rock-user1')
let paper_user1 = document.getElementById('paper-user1')
let scissor_user1 = document.getElementById('scissor-user1')

let rock_user2 = document.getElementById('rock-user2')
let paper_user2 = document.getElementById('paper-user2')
let scissor_user2 = document.getElementById('scissor-user2')


let user_1_pic = document.getElementById('user-1-pic')
let user_2_pic = document.getElementById('user-2-pic')

let startButton = document.getElementById('startButton')




function user1selection() {


    rock_user1.addEventListener('click', function () {


        user_1_pic.src = 'assets/hand-pictures/rock-user.jpg'


    })



    paper_user1.addEventListener('click', function () {


        user_1_pic.src = 'assets/hand-pictures/paper-user.jpg'



    })


    scissor_user1.addEventListener('click', function () {


        user_1_pic.src = 'assets/hand-pictures/scissors-user.jpg'



    })





}


function user2selection() {

    rock_user2.addEventListener('click', function () {


        user_2_pic.src = 'assets/hand-pictures/rock-comp.jpg'



    })



    paper_user2.addEventListener('click', function () {


        user_2_pic.src = 'assets/hand-pictures/paper-comp.jpg'




    })


    scissor_user2.addEventListener('click', function () {


        user_2_pic.src = 'assets/hand-pictures/scissors-comp.jpg'




    })



}








user1selection()
user2selection()




