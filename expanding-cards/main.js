(function () {
    

    const cards = document.querySelectorAll('.card')
    
    function removeCurrentActiveCard() {
        cards.forEach(card =>{
            if(card.classList.contains('card-active')) {
                card.classList.remove('card-active')
                return
            }

        })
    }
    
    cards.forEach((card)=>{
        card.addEventListener("click",(event)=>{
            if (!card.classList.contains("card-active")) {
                removeCurrentActiveCard()
                card.classList.add('card-active')
            }
        })
        
    })

})()