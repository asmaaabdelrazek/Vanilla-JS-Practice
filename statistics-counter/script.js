const counterEls = document.querySelectorAll(".counter");

counterEls.forEach(ele => {
    let current = +ele.textContent;
    const max = +ele.dataset.target;
    const incrementVal = Math.ceil(max / 20);
   
    updateCounter()
    function updateCounter() {
        if (current < max)
        { 
            current += incrementVal;
            ele.textContent = current.toLocaleString();
            setTimeout(updateCounter,80)
        }
        else
            ele.textContent = max.toLocaleString();
    }
})


