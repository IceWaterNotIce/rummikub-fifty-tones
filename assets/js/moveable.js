/**
 *  @description let element which has class 'moveable' can be moved by mouse
 */

function autoAlign(that) {
    let moveable = document.getElementsByClassName('moveable');
    for (let i = 0; i < moveable.length; i++) {
        if (moveable[i] !== that) {
            let other = moveable[i];
            let othercenterX = other.offsetLeft + other.offsetWidth / 2;
            let othercenterY = other.offsetTop + other.offsetHeight / 2;
            let thatcenterX = that.offsetLeft + that.offsetWidth / 2;
            let thatcenterY = that.offsetTop + that.offsetHeight / 2;
            let distanceX = othercenterX - thatcenterX;
            let distanceY = othercenterY - thatcenterY;
            let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            console.log("distance:%s", distance);
            let aligndistance = that.offsetWidth * 1.5;
            if (distance < aligndistance) {
                if (distanceX > 0) {
                    that.style.left = other.offsetLeft - that.offsetWidth + 'px';
                    that.style.top = other.offsetTop + 'px';
                }
                else {
                    that.style.left = other.offsetLeft + other.offsetWidth + 'px';
                    that.style.top = other.offsetTop + 'px';
                }
            }
        }
    }
}

function moveable() {

    const moveable = document.getElementsByClassName('moveable');
    console.log("可被移動的元素列表：", moveable);

    for (let i = 0; i < moveable.length; i++) {
        moveable[i].onmousedown = function (e) {
            let x = e.clientX - this.offsetLeft;
            let y = e.clientY - this.offsetTop;
            let that = this;
            // console.log("that:%s, x:%s, y:%s", that, x, y);
            document.onmousemove = function (e) {
                let l = e.clientX - x;
                let t = e.clientY - y;
                that.style.left = l + 'px';
                that.style.top = t + 'px';
                // console.log("l:%s, t:%s", l, t);
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
                // 自動對齊至其他有 moveable class 的元素
                autoAlign(that);
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', moveable);