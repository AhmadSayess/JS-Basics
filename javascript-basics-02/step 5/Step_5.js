
let htmlImages = document.querySelectorAll("img");

let localImg = ["./images/image1_2.jpg","./images/image2_2.jpg","./images/image3_2.jpg","./images/image4_2.jpg","./images/image5_2.jpg"]

htmlImages.forEach((e, i) => {
    e.addEventListener("mouseover",function(e){
        e.target.src = localImg[i]
        
    })
})
