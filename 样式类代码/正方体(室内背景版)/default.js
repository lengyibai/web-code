/*
 * @Author: 冷弋白
 * @LastEditTime: 2020-12-16 21:44:36
 */
window.onload = function () {
    display('欢迎使用冷弋白制作的全景网页');
}
/********* 弹窗 ********/
var alert = document.querySelector('.alert');
var timer = 0;
function display(str) {
    alert.style.top = '35px';
    alert.style.opacity = '1';
    alert.innerHTML = str;
    timer = setTimeout(function () {
        alert.style.top = '-50px';
        alert.style.opacity = '0';
        console.log('执行');
    }, 4000)
}
/**********获取设置信息 **********/
var cube = document.querySelector('.cube');//获取正方体的大盒子
var ul = cube.querySelector('ul');//获取大盒子内的正方体
var li = ul.querySelectorAll('li');//获取正方体每个面
var sensitive = 1; //灵敏度调节
var x = 0;
var y = 0
var X = 0;
var Y = 0;
var room = document.querySelector('.room')
document.addEventListener('mousedown', function (e) {
    var downX = e.clientX;
    var downY = e.clientY;
    document.addEventListener('mousemove', fn);

    function fn(e) {
        var moveX = e.clientX;
        var moveY = e.clientY;
        x = moveX - downX + X;
        y = downY - moveY + Y;
        ul.style.transform = 'rotateX(' +
            y / sensitive / 2.5 + 'deg) rotateY(' + x / sensitive / 2.5 + 'deg)';
        room.style.transform = 'rotateX(' +
            y / sensitive / 2.5 + 'deg) rotateY(' + x / sensitive / 2.5 + 'deg)';
    }
    document.addEventListener('mouseup', function () {
        X = x;
        Y = y;
        document.removeEventListener('mousemove', fn)
    });
})
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
})
