const starEles = document.querySelectorAll(".fa-star")
const emojiEles=document.querySelectorAll(".fa-regular")
starEles.forEach((starEle, index) => {
    starEle.addEventListener("click", () => {
    
        starEles.forEach((ele, i) => {
            if (i <= index)
                ele.classList.add("active")
            else
                ele.classList.remove("active")
        });

        //
        emojiEles.forEach((emoji) => {
            
                emoji.style.transform=`translateX(-${index*48}px)`
        })
    })
})