document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.drag-scroll');
    if (ele!=null) {
        const eleImg = document.querySelectorAll(".drag-scroll img");
        eleImg.forEach((img) => {
            img.setAttribute('draggable', 'false')
        })
        let pos = { top: 0, left: 0, x: 0, y: 0 };
        const mouseDownHandler = function (e) {
            pos = {
                left: ele.scrollLeft,
                top: ele.scrollTop,
                x: e.clientX,
                y: e.clientY,
            };
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };
        const mouseMoveHandler = function (e) {
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;
            ele.scrollTop = pos.top - dy;
            ele.scrollLeft = pos.left - dx;
        };
        const mouseUpHandler = function () {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };
        ele.addEventListener('mousedown', mouseDownHandler);
    }
});    


// if (activePage == 'Projects') {
//     consolee.log("Entered if")
//     const fofsdoc = document.querySelector("#fofs-doc");
//     const scrollable = document.querySelector("#fofs-doc .horizontal-scroll");
//     // scrollable.setAttribute("tabindex", 0);

//     // const shiftdown = new KeyboardEvent('keydown', {
//     //     isTrusted: true,
//     //     bubbles: true,
//     //     cancelable: true,
//     //     code: "ShiftLeft",
//     //     composed: true,
//     //     key: "Shift",
//     //     keyCode: 16,
//     //     location: 1,
//     //     repeat: true,
//     //     returnValue: true,
//     //     shiftKey: true
//     // });
//     // const shiftup = new KeyboardEvent('keyup', {
//     //     isTrusted: true,
//     //     bubbles: true,
//     //     cancelable: true,
//     //     code: "ShiftLeft",
//     //     composed: true,
//     //     key: "Shift",
//     //     keyCode: 16,
//     //     location: 1,
//     //     repeat: true,
//     //     returnValue: true,
//     //     shiftKey: true
//     // });

//     // Element.prototype._addEventListener = Element.prototype.addEventListener;
//     // Element.prototype.addEventListener = function () {
//     //     let args = [...arguments]
//     //     let temp = args[1];
//     //     args[1] = function () {
//     //         let args2 = [...arguments];
//     //         args2[0] = Object.assign({}, args2[0])
//     //         args2[0].isTrusted = true;
//     //         return temp(...args2);
//     //     }
//     //     return this._addEventListener(...args);
//     // }
//     fofsdoc.addEventListener('mouseenter', (e) => {
//         console.log("Detected mouse enter", e)
//         scrollable.addEventListener('mousemove', (e) => {
//             if(e.x > scrollable.clientWidth/2){
//                 console.log("Right")
//                 scrollable.offset -= 100;
//                 e.preventDefault();
//             }
//             console.log(e);
//         })

//     });
//     fofsdoc.addEventListener('mouseleave', (e) => {
//         console.log("Detected mouse leave", e)
//     });

//     // var speed = 0;
//     // var scroll = 0;
//     // var container = $('.carousel-frame');
//     // var container_w = container.width();
//     // var max_scroll = container[0].scrollWidth - container.outerWidth();
//     // var prev_frame = new Date().getTime();
//     // container.on('mousemove', function(e) {
//     //     var mouse_x = e.pageX - container.offset().left;
//     //     var mouseperc = 100 * mouse_x / container_w;
//     //     speed = mouseperc - 50;
//     // }).on ( 'mouseleave', function() {
//     //     speed = 0;
//     // });
    
//     // function updatescroll() {
//     //     var cur_frame = new Date().getTime();
//     //     var time_elapsed = cur_frame - prev_frame;
//     //     prev_frame = cur_frame;
//     //         if (speed !== 0) {
//     //             scroll += speed * time_elapsed / 50;
//     //         if (scroll < 0) scroll = 0;
//     //         if (scroll > max_scroll) scroll = max_scroll;
//     //             $('.carousel-frame').scrollLeft(scroll);
//     //     }
//     //     $("#speed").html('Speed: ' + speed);
//     //     $("#scroll").html('Scroll: ' + scroll);
//     //     window.requestAnimationFrame(updatescroll);
//     // }
//     // window.requestAnimationFrame(updatescroll);

//     const sagipDoc = document.querySelector("#sagip-doc")
//     const row1 = document.querySelector("#row1");
//     const row1pics = document.querySelectorAll("#row1 img");
//     const row2 = document.querySelector("#row2");
//     const row2pics = document.querySelectorAll("#row2 img")

//     const row1array = [];

//     var index = 0;
//     var scrolled = 0;
//     var index2 = 0;
//     var scrolled2 = 0;

//     sagipDoc.addEventListener('wheel', function(e) {
//         row1.scrollLeft -= (e.wheelDelta);
//         row2.scrollLeft += (e.wheelDelta);
//         e.preventDefault();

//         if ((row1.clientWidth > row1.scrollWidth - 300)||(row1.scrollLeft + row1.clientWidth > row1.scrollWidth - 300)){
//             scrolled+=e.deltaY;
//             if (scrolled%300==0){
//                 // console.log("scrolled is in if")
//                 row1.appendChild(row1pics[index])
//                 index += 1;
//                 if (index==8){
//                     index=0;
//                 }
//                 console.log(index)
//             } 
//         }
//         if ((row2.clientWidth < row2.scrollWidth - 300)||(row2.scrollLeft + row2.clientWidth < row2.scrollWidth - 300)){
//             scrolled2+=e.deltaY;
//             if (scrolled2%300==0){
//                 // console.log("scrolled is in if")
//                 row2.appendChild(row2pics[index2])
//                 index2 += 1;
//                 if (index2==6){
//                     index2=0;
//                 }
//                 console.log(index2)
//             } 
//         }
//     })
// }