// Selecting Corner Menu Wrapper Element
const cornerMenuWrapper = document.getElementById('corner-menu-wrapper')

// Pop out / Hiding Menu Items when Corner Menu button is clicked
cornerMenuWrapper.querySelector('#corner-menu-btn').addEventListener('click', e=>{
    // prevent default
    e.preventDefault()

    if(cornerMenuWrapper.classList.contains('show')){
        // Hide the Menu Items
        cornerMenuWrapper.classList.remove('show')
        // Update Menu Button Icon
        cornerMenuWrapper.querySelector('#corner-menu-btn').innerHTML = `<span class="material-symbols-outlined">menu</span>`
    }else{
        // Show the Menu Items
        cornerMenuWrapper.classList.add('show')
        // Update Menu Button Icon
        cornerMenuWrapper.querySelector('#corner-menu-btn').innerHTML = `<span class="material-symbols-outlined">close</span>`
    }
})