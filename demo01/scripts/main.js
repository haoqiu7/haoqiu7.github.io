/* let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world !'; */

/* let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('我最喜欢巧克力冰激淋了。');
} else {
    alert('但是巧克力才是我的最爱呀……');
} */

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

/* document.querySelector('html').onclick = function () {
    alert('点击了一下鼠标');
}
// 刚刚我们传递给 onclick 的函数被称为匿名函数，因为它没有名字。匿名函数还有另一种我们称之为箭头函数的写法，箭头函数使用() => 代替 function ()：

document.querySelector('html').addEventListener('click', () => {
    alert('别戳我，我怕疼。');
}); */

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/头像8.jpg') {
        myImage.setAttribute('src', 'images/头像7小.jpg');
    } else {
        myImage.setAttribute('src', 'images/头像8.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    // localStorage API，它可以将数据存储在浏览器中供后续获取
    localStorage.setItem('name', myName);
    myHeading.textContent = '你好鸭，，' + myName + ' !';
}
//为按钮设置 onclick 事件处理器
myButton.onclick = function () {
    setUserName();
}
// 初始化代码，初次加载页面时进行构造工作：检测 'name' 数据是否存在。若不存在，调用 setUserName() 创建。若存在（即用户上次访问时设置过）
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你好鸭，' + storedName + ' !';
}
