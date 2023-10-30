(function () {
    const next = document.getElementById('next')
    const prev = document.getElementById('prev')


    const steps = document.querySelectorAll(".step")

    const dividers = document.querySelectorAll('.divider')

    const startStep = 1
    const endStep = 4

    let counter = startStep

    function hasPrev() {
        if (counter > startStep) {
            return true
        }
        return false
    }

    function hasNext() {
        if (counter < endStep) {
            return true
        }
        return false
    }

    function setState(items,attribute,position,action) {
        items.forEach((item)=>{
            if (item.getAttribute(attribute) == position) {
                action(item)
            }
        })
    }

    



    next.addEventListener('click',()=>{
        if (hasNext()) {
            next.classList.remove("end-btn")

            // set the divider
            setState(dividers,"divider",counter,(divider)=>{
                divider.classList.add("active-divider")
            })

            // set the step
            setState(steps,"step",++counter,(step)=>{
                step.classList.add("active-step")
            })

            if (!hasNext()) {
                next.classList.add("end-btn")
            }
            if(hasPrev()) prev.classList.remove("end-btn")
        }
    })

    prev.addEventListener('click',()=>{
        if(hasPrev()) {
            prev.classList.remove("end-btn")

            // set the step
            setState(steps,"step",counter,(step)=>{
                step.classList.remove("active-step")
            })

            // set the divider
            setState(dividers,"divider",--counter,(divider)=>{
                divider.classList.remove("active-divider")
            })

            if(!hasPrev()) {
                prev.classList.add("end-btn")
            }
            if(hasNext()) next.classList.remove("end-btn")
        }
    })
})()