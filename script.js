var foto = document.body.querySelector("img")
foto.addEventListener('click', Clicar)

var audio = document.body.querySelector('audio')

var b1 = document.body.querySelector('button#um')
b1.addEventListener('click', Button1)

var b2 = document.body.querySelector('button#dois')
b2.addEventListener('click', Button2)

var b3 = document.body.querySelector('button#tres')
b3.addEventListener('click', Button3)

var b4 = document.body.querySelector('button#quatro')
b4.addEventListener('click', Button4)

var b5 = document.body.querySelector('button#cinco')
b5.addEventListener('click', Button5)

var pontos = 0
var c = 1
var p = document.body.querySelector('p#pontos')
var txt = document.body.querySelector('p#txt')

function Clicar(){
    pontos = pontos + c
    p.innerHTML = `${pontos} pontos!!`
}

function Button1(){
    if (pontos < 10){
        alert('[ERRO] você não tem pontos o suficientes')
    } else {
        pontos = pontos - 10
        c = c + 5
        p.innerHTML = `${pontos} pontos!!`
        foto.src = "assets/Espresso.jpg"
        audio.src = "audios/Espresso.mp3"
        audio.play()
        txt.innerHTML = "Tocando agora: Espresso!"
    }
}

function Button2(){
    if (pontos < 50){
        alert('[ERRO] você não tem pontos o suficientes')
    } else {
        pontos = pontos - 50
        c = c + 10
        p.innerHTML = `${pontos} pontos!!`
        foto.src = "assets/Manchild.jpg"
        audio.src = "audios/Manchild.mp3"
        audio.play()
        txt.innerHTML = "Tocando agora: Manchild!"
    }
}

function Button3(){
    if (pontos < 100){
        alert('[ERRO] você não tem pontos o suficientes')
    } else {
        pontos = pontos - 100
        p.innerHTML = `${pontos} pontos!!`
        foto.src = "assets/Please.jpg"
        audio.src = "audios/Tears.mp3"
        audio.play()
        txt.innerHTML = "Tocando agora: Tears!"
        setInterval(function (){
            var soma = 1
            pontos = pontos + soma
            p.innerHTML = `${pontos} pontos!!`
        }, 1000)
    }
}

function Button4(){
    if (pontos < 1000){
        alert('[ERRO] você não tem pontos o suficientes')
    } else {
        pontos = pontos - 1000
        foto.src = "assets/Juno.jpg"
        audio.src = "audios/Juno.mp3"
        audio.play()
        p.innerHTML = `${pontos} pontos!!`
        txt.innerHTML = "Tocando agora: Juno!"
        setInterval(function (){
            var soma = 10
            pontos = pontos + soma
            p.innerHTML = `${pontos} pontos!!`
        }, 1000)
    }
}

function Button5(){
    if (pontos < 10000){
        alert('[ERRO] você não tem pontos o suficientes')
    } else {
        pontos = pontos - 10000
        p.innerHTML = `${pontos} pontos!!`
        foto.src = "assets/Tears.jpg"
        audio.src = "audios/Please.mp3"
        audio.play()
        txt.innerHTML = "Tocando agora: Please!"
        setInterval(function (){
            var soma = 100
            pontos = pontos + soma
            p.innerHTML = `${pontos} pontos!!`
        }, 1000)
    }
}