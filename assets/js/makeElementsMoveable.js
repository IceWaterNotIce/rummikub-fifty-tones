/**
 *  @description Allows elements with the class 'moveable' to be moved by mouse
 */

function autoAlign(element) {
    // Get all elements with the 'moveable' class
    let moveableElements = document.getElementsByClassName('moveable');
    // Set alignment distance
    let alignDistance = element.offsetWidth * 1.5;
    // Get the center point of the currently moved element
    let elementCenterX = element.offsetLeft + element.offsetWidth / 2;
    let elementCenterY = element.offsetTop + element.offsetHeight / 2;

    let closestElement = moveableElements[0];
    let minDistance = 999999;
    let closestElementDirection = 0;

    for (let i = 0; i < moveableElements.length; i++) {
        if (moveableElements[i] !== element) {
            let otherElement = moveableElements[i];
            // Get the center point of the other element
            let otherElementCenterX = otherElement.offsetLeft + otherElement.offsetWidth / 2;
            let otherElementCenterY = otherElement.offsetTop + otherElement.offsetHeight / 2;
            // Get the distance between the two center points
            let distanceX = otherElementCenterX - elementCenterX;
            let distanceY = otherElementCenterY - elementCenterY;
            let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
            // Find the closest element
            if (distance < minDistance) {
                minDistance = distance;
                closestElement = otherElement;
                // Record the direction of the closest element
                if (distanceX > 0) {
                    closestElementDirection = 1;
                } else {
                    closestElementDirection = -1;
                }
            }
        }
    }

    // console.log("Distance to the closest element: %s", minDistance);
    
    // Align to the center point of the closest element
    if (minDistance < alignDistance / 2) { 
        element.style.top = closestElement.offsetTop + 'px';
        element.style.left = closestElement.offsetLeft + 'px'; 
    }
    // Align to the left or right edge of the closest element
    else if (minDistance < alignDistance) {
        element.style.top = closestElement.offsetTop + 'px';
        if (closestElementDirection > 0) { 
            element.style.left = closestElement.offsetLeft - element.offsetWidth + 'px'; 
        } else { 
            element.style.left = closestElement.offsetLeft + closestElement.offsetWidth + 'px'; 
        }
    }
}

export function makeElementsMoveable() {

    const moveableElements = document.getElementsByClassName('moveable');
    console.log("List of moveable elements:", moveableElements);

    for (let i = 0; i < moveableElements.length; i++) {
        moveableElements[i].onmousedown = function (e) {
            let x = e.clientX - this.offsetLeft;
            let y = e.clientY - this.offsetTop;
            let element = this;
            // console.log("element: %s, x: %s, y: %s", element, x, y);
            document.onmousemove = function (e) {
                let l = e.clientX - x;
                let t = e.clientY - y;
                element.style.left = l + 'px';
                element.style.top = t + 'px';
                // console.log("l: %s, t: %s", l, t);
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
                // Automatically align with other elements with the 'moveable' class
                autoAlign(element);
            }
        }
    }
}
