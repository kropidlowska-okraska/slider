/**
 * Created by Jacek on 2015-12-16.
 */


function init() {

    var buttonPrev = document.getElementById("prevPicture");
    var buttonNext = document.getElementById("nextPicture");
    var listEl = document.querySelectorAll("li");

    //console.log(buttonPrev);
    //console.log(buttonNext);
    //console.log(listEl);

    var ImgNumber = 0;

    listEl[0].classList.add("visible");


    buttonNext.addEventListener("click", function () {

        listEl[ImgNumber].classList.remove("visible");
        ImgNumber++;

        if (ImgNumber >= listEl.length) {
            ImgNumber = 0;
        }
        listEl[ImgNumber].classList.add("visible");

    });

    buttonPrev.addEventListener("click", function () {

        //console.log(ImgNumber);
        listEl[ImgNumber].classList.remove("visible");

        ImgNumber--;

        if (ImgNumber < 0) {
            ImgNumber = listEl.length-1;
        }

        listEl[ImgNumber].classList.add("visible");

    });

}



document.addEventListener("DOMContentLoaded", init);
