document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('resources-container');
    
    // Determine page type from title
    const isImagePage = document.title.includes("Image");
    const isVideoPage = document.title.includes("Video");
    const isIconPage = document.title.includes("Icon");
    const isCodeEditorPage = document.title.includes("Code Editor");
    const isAiToolPage = document.title.includes("AI Tool");
    const isShapePage = document.title.includes("Shape");
    const isAnimationPage = document.title.includes("Animation");
    const isLearningResourcesPage = document.title.includes("Learning Resources");
    const isVsCodeextentionPage = document.title.includes("VS Code Extention");
    const isColorPage = document.title.includes("Color");
    
    // Filter resources
    const filteredResources = resources.filter(resource => 
        isImagePage ? resource.type === 'image' : 
        isVideoPage ? resource.type === 'video' : 
        isIconPage ? resource.type === 'icon' : 
        isAiToolPage? resource.type === 'ai' : 
        isCodeEditorPage ? resource.type === 'CodeEditor' : 
        isShapePage ? resource.type === 'shape' : 
        isAnimationPage ? resource.type === 'animation' : 
        isLearningResourcesPage ? resource.type === 'LearningResources' : 
        isVsCodeextentionPage ? resource.type === 'VsCodeExtention' : 
        isColorPage ? resource.type === 'color' : 
        false
    );

    // Add resources to container
    filteredResources.forEach(resource => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.innerHTML = `
            <img src="${resource.image}" alt="${resource.alt}" class="item-image">
            <div class="content">
                <h2>${resource.title}</h2>
                <p>${resource.description}</p>
            </div>
            <button>
                <a href="${resource.link}" target="_blank">GO</a>
            </button>
        `;
        container.appendChild(item);
    });
});