const string = `
/*
 * 首先是黄色的皮肤
 */

.skin {
    position: relative;
    background-color: #ffe600;
    min-height: 50vh;
}

.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.skin *::before,
.skin *::after {
    box-sizing: border-box;
}

/*
 * 然后画皮卡丘的鼻子
 */

.nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 140px;
    margin-left: -10px;
    z-index: 3;
}

.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -13.6px;
    left: -10px;
    border-radius: 50%;
    background-color: black;
}

/*
 * 给鼻子加一个小动画
 */

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(6deg);
    }
    66% {
        transform: rotate(-6deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}

/*
 * 接下来，画皮卡丘的两个眼睛
 */
.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: '';
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

/*
 * 然后画皮卡丘的嘴唇
 */
.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up .lip.left {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 0 50px;
    border-top: transparent;
    border-right: transparent;
    position: absolute;
    transform: rotate(-20deg) translateX(-53px);
    left: 50%;
    margin-left: -50px;
}

.mouth .up .lip.right {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 50px 0;
    border-top: transparent;
    border-left: transparent;
    position: absolute;
    transform: rotate(20deg) translateX(53px);
    left: 50.5%;
    top: 0.5px;
    margin-left: -50px;
}

.mouth .up {
    position: relative;
    top: -30px;
    z-index: 1;
}

.mouth .up .lip {
    background-color: #ffe600;
}

/*
 * 皮卡丘的舌头
 */

.mouth .down {
    height: 160px;
    position: absolute;
    top: 0;
    width: 100%;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}

/*
 * 画上颜色
 */

.mouth .down .yuan2 {
    background-color: #ff485f;
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -170px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
/*
 * 然后是皮卡丘的两个脸颊
 */
.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
}

.face.left {
    transform: translateX(-160px);
    background-color: #ff0000;
    border-radius: 50%;
}

.face.right {
    transform: translateX(160px);
    background-color: #ff0000;
    border-radius: 50%;
}

.hidden {
    width: 18px;
    height: 18px;
    background-color: #ffe600;
    position: relative;
    left: 50%;
    top: 150px;
    z-index: 2;
    margin-left: -9px;
}
/*
 * 好了，这只皮卡丘送给你
 */
`
let time = 30
let n = 1
const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)


const player = {
    run: () => {
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        demo.innerText = string.substr(0, n)
        demo2.innerHTML = string.substr(0, n)
        demo.scrollTop = demo.scrollHeight
    },
    play: () => {
        return setInterval(player.run, time)
    },
    pause: () => {
        window.clearInterval(id)
    },
    slow: () => {
        player.pause()
        time = 30
        id = player.play()
    },
    normal: () => {
        player.pause()
        time = 10
        id = player.play()
    },
    fast: () => {
        player.pause()
        time = 0
        id = player.play()
    }
}

let id = player.play()




btnPause.onclick = () => {
    player.pause()
}

btnPlay.onclick = () => {
    player.pause()
    id = player.play()
}

btnSlow.onclick = player.slow

btnNormal.onclick = player.normal

btnFast.onclick = player.fast