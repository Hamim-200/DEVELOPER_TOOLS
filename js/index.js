const cardData = [
    { icon: 'fa-image', title: 'Images', link: 'image.html' },
    { icon: 'fa-video', title: 'Videos', link: 'video.html' },
    { icon: 'fa-icons', title: 'Icons', link: 'icon.html' },
    { icon: 'fa-palette', title: 'Color Palettes', link: 'color.html' },
    { icon: 'fa-brands fa-stack-overflow', title: 'Animation', link: 'animation.html' },
    { icon: 'fa-shapes', title: 'Wave/Blob/Shape', link: 'shape.html' },
    { icon: 'fa-brands fa-amilia', title: 'AI Tools', link: 'ai.html' },
    { icon: 'fa-regular fa-pen-nib', title: 'Code Editors', link: 'code_editors.html' },
    { icon: 'fa-folder-open', title: 'Learning Resources', link: 'learning_resources.html' },
    { icon: 'fa-gears', title: 'VS code extention', link: 'vs_extention.html' },
    { icon: 'fa-tools', title: 'Tools', link: 'tools.html' },
];

const container = document.getElementById('cards-container');
cardData.forEach(card => {
    container.innerHTML += `
        <div class="cart">
            <i class="fa-solid ${card.icon} cart-icon"></i>
            <h3>${card.title}</h3>
            <a class="btn"  href="${card.link}">FIND HERE<i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
    `;
});