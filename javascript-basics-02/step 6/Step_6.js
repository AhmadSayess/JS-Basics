let htmlImages = document.querySelectorAll("img");

let localImg = ["./images/image1","./images/image2","./images/image3","./images/image4","./images/image5"]

htmlImages.forEach((e, i) => {
    e.addEventListener("mouseover",function(e){
        e.target.src = localImg[i]+"_2.jpg";

    });
    e.addEventListener("mouseout",function(e){
        e.target.src = localImg[i]+".jpg";


    });
})
