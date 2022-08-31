const typeLabels = document.querySelectorAll('.type-label')
setTimeout(labelAuto,2000)

function labelAuto(){
    for (let typeLabel of typeLabels)
    {
        typeLabel.style.display = 'None'
    }
    setTimeout(function()
        {
            for (let typeLabel of typeLabels)
            {
                typeLabel.style.display = 'initial'
                
            }
            setTimeout(labelAuto,1000)
        },1000)
}