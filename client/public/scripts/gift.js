const renderGift = async () => {

    const requestedName = decodeURIComponent(window.location.pathname.split('/').pop())

    const response = await fetch('/gifts')
    const data = await response.json()

    const giftContent = document.getElementById('gift-content')

    let gift = data.find(gift => gift.name === requestedName)

    if (gift) {
        document.getElementById('image').src = `/${gift.image}`
        document.getElementById('name').textContent = gift.name
        document.getElementById('description').textContent = gift.description
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience
        document.getElementById('color').textContent = 'Color: ' + gift.color
        document.title = `Listicle - ${gift.name}`
        
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        giftContent.appendChild(message)
        
    }

}

renderGift()
