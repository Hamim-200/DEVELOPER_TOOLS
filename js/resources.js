const resources = [
    // ==========COLOR==========
    {
        type: "color",
        image: "https://www.colorhunt.co/img/color-hunt.svg",
        alt: "Color Hunt",
        title: "Color Hunt",
        description: "A curated collection of beautiful color palettes perfect for designers and creatives.",
        link: "https://colorhunt.co/"
    },
    {
        type: "color",
        image: "https://imagecolorpicker.com/img/logo.png",
        alt: "Image Color Picker",
        title: "Image Color Picker",
        description: "A tool to extract and pick colors from uploaded images with hex code and RGB values.",
        link: "https://imagecolorpicker.com/en"
    },
    {
        type: "color",
        image: "https://flatuicolors.com/static/favicon.ico",
        alt: "Flat UI Colors",
        title: "Flat UI Colors",
        description: "Flat UI Colors provides trendy flat color palettes inspired by various themes.",
        link: "https://flatuicolors.com/"
    },
    // ==========ICON==========
    {
        type: "icon",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Font_Awesome_5_logo_black.svg",
        alt: "icon",
        title: "Font Awesome",
        description: "Font Awesome provides free stock icons that can be used for personal and commercial projects.",
        link: "https://fontawesome.com/"
    },
    {
        type: "icon",
        image: "https://www.flaticon.com/favicon-32x32.png",
        alt: "icon",
        title: "Flaticon",
        description: "A vast collection of free and premium icons for personal and commercial use.",
        link: "https://www.flaticon.com/"
    },
    {
        type: "icon",
        image: "https://icons.getbootstrap.com/assets/img/favicons/favicon-32x32.png",
        alt: "icon",
        title: "Bootstrap Icons",
        description: "Bootstrap Icons is a free, high-quality, open-source icon library for Bootstrap and beyond.",
        link: "https://icons.getbootstrap.com/"
    },
    {
        type: "icon",
        image: "https://www.svgrepo.com/favicons/apple-icon-60x60.png",
        alt: "icon",
        title: "SVG Repo",
        description: "SVG Repo offers thousands of free SVG vectors and icons for your design needs.",
        link: "https://www.svgrepo.com/"
    },
    // ==========SHAPE==========
    {
        type: "shape",
        image: "https://app.haikei.app/favicon-32x32.png",
        alt: "shape",
        title: "Haikei (All in One)",
        description: "Create unique SVG shapes, patterns, and blobs with Haikei, all in one tool.",
        link: "https://app.haikei.app/"
    },
    {
        type: "shape",
        image: "https://wavelry.vercel.app/favicon.ico",
        alt: "shape",
        title: "Wavelry (Wave)",
        description: "Generate smooth SVG wave patterns for your design layouts with Wavelry.",
        link: "https://wavelry.vercel.app/"
    },
    {
        type: "shape",
        image: "https://www.blobmaker.app/favicon-32x32.png",
        alt: "shape",
        title: "Blob Maker",
        description: "Easily generate random SVG blobs for backgrounds and decorations with Blob Maker.",
        link: "https://www.blobmaker.app/"
    },
    {
        type: "shape",
        image: "https://www.softr.io/favicon-32x32.png",
        alt: "shape",
        title: "Softr (Wave)",
        description: "Create beautiful SVG waves using Softr's wave generator tool.",
        link: "https://www.softr.io/tools/svg-wave-generator"
    },
    {
        type: "shape",
        image: "https://getwaves.io/favicon-32x32.png",
        alt: "shape",
        title: "Get Waves (Wave)",
        description: "Generate animated and static SVG wave shapes for your projects with Get Waves.",
        link: "https://getwaves.io/"
    },
    {
        type: "shape",
        image: "https://ui.glass/favicon-32x32.png",
        alt: "shape",
        title: "Glassmorphism",
        description: "Create beautiful glass UI effects using this CSS tool for Glassmorphism designs.",
        link: "https://css.glass/"
    },
    {
        type: "shape",
        image: "https://neumorphism.io/favicon-32x32.png",
        alt: "shape",
        title: "Neumorphism",
        description: "Generate soft UI designs using this neumorphism CSS generator.",
        link: "https://neumorphism.io/#e0e0e0"
    },
    // ==========IMAGE==========
    {
        type: "image",
        image: "https://www.canva.com/favicon.ico",
        alt: "image",
        title: "Canva",
        description: "Create stunning designs with ease using Canva’s free and paid design tools.",
        link: "https://www.canva.com/"
    },
    {
        type: "image",
        image: "https://unsplash.com/favicon-32x32.png",
        alt: "image",
        title: "Unsplash",
        description: "High-resolution, royalty-free photos contributed by photographers worldwide.",
        link: "https://unsplash.com/"
    },
    {
        type: "image",
        image: "https://pixabay.com/favicon-32x32.png",
        alt: "image",
        title: "Pixabay",
        description: "Over 2.7 million+ high-quality stock images and videos free for personal and commercial use.",
        link: "https://pixabay.com/"
    },
    {
        type: "image",
        image: "https://www.pexels.com/favicon.ico",
        alt: "image",
        title: "Pexels",
        description: "Free stock photos and videos shared by talented creators worldwide.",
        link: "https://www.pexels.com/"
    },
    {
        type: "image",
        image: "https://undraw.co/favicon-32x32.png",
        alt: "image",
        title: "Undraw",
        description: "Beautiful, open-source illustrations for any project, free to use and customizable.",
        link: "https://undraw.co/"
    },

    {
        type: "image",
        image: "https://cdn.iconscout.com/icon/free/png-256/pexels-5-569276.png",
        alt: "image",
        title: "Iconscout",
        description: "Get high-quality, royalty-free icons, illustrations, and stock images.",
        link: "https://iconscout.com/"
    },
    {
        type: "image",
        image: "https://www.istockphoto.com/favicon.ico",
        alt: "image",
        title: "iStock",
        description: "Royalty-free stock images, videos, and music for all your creative needs.",
        link: "https://www.istockphoto.com/"
    },
    {
        type: "image",
        image: "https://www.shutterstock.com/favicon.ico",
        alt: "image",
        title: "Shutterstock",
        description: "Millions of royalty-free images, videos, and music tracks for all your creative projects.",
        link: "https://www.shutterstock.com/"
    },

    {
        type: "image",
        image: "https://www.drawkit.com/favicon.ico",
        alt: "image",
        title: "Drawkit",
        description: "Free and premium illustrations for designers and startups.",
        link: "https://www.drawkit.com/"
    },
    {
        type: "image",
        image: "https://stocksnap.io/favicon.ico",
        alt: "image",
        title: "StockSnap",
        description: "Hundreds of high resolution images added weekly, all free from copyright restrictions.",
        link: "https://stocksnap.io/"
    },
    {
        type: "image",
        image: "https://www.manypixels.co/favicon.ico",
        alt: "image",
        title: "Manypixels",
        description: "Royalty-free illustrations in different styles that can be customized.",
        link: "https://www.manypixels.co/gallery"
    },
    {
        type: "image",
        image: "https://www.glazestock.com/favicon.ico",
        alt: "image",
        title: "Glazestock",
        description: "Free illustrations with a modern, abstract style for commercial use.",
        link: "https://www.glazestock.com/"
    },
    {
        type: "image",
        image: "https://www.opendoodles.com/favicon.ico",
        alt: "image",
        title: "Opendoodles",
        description: "A free set of sketchy illustrations with a hand-drawn style.",
        link: "https://www.opendoodles.com/"
    },
    {
        type: "image",
        image: "https://www.vecteezy.com/favicon-32x32.png",
        alt: "image",
        title: "Vecteezy",
        description: "Free vectors, stock photos, and videos for personal and commercial use.",
        link: "https://www.vecteezy.com/"
    },
    {
        type: "image",
        image: "https://storyset.com/favicon.ico",
        alt: "image",
        title: "Storyset",
        description: "A platform offering free customizable illustrations for any type of project.",
        link: "https://storyset.com/"
    },

    {
        type: "image",
        image: "https://burst.shopify.com/favicon.ico",
        alt: "image",
        title: "Burst (by Shopify)",
        description: "Free stock photos for websites and commercial use, with a focus on business and ecommerce.",
        link: "https://burst.shopify.com/"
    },
    {
        type: "image",
        image: "https://www.rawpixel.com/favicon.ico",
        alt: "image",
        title: "Rawpixel",
        description: "High-quality free stock images and design resources with premium options available.",
        link: "https://www.rawpixel.com/"
    },
    {
        type: "image",
        image: "https://www.gratisography.com/favicon.ico",
        alt: "image",
        title: "Gratisography",
        description: "Free high-resolution pictures you can use for personal and commercial projects.",
        link: "https://www.gratisography.com/"
    },
    {
        type: "image",
        image: "https://www.lifeofpix.com/favicon.ico",
        alt: "image",
        title: "Life of Pix",
        description: "Free high-resolution photos with no copyright restrictions.",
        link: "https://www.lifeofpix.com/"
    },
    {
        type: "image",
        image: "https://www.stockvault.net/favicon.ico",
        alt: "image",
        title: "Stockvault",
        description: "Free stock photos, textures, and wallpapers for personal and non-commercial use.",
        link: "https://www.stockvault.net/"
    },
    {
        type: "image",
        image: "https://www.foodiesfeed.com/favicon.ico",
        alt: "image",
        title: "FoodiesFeed",
        description: "Free food photos in high resolution for all your food-related projects.",
        link: "https://www.foodiesfeed.com/"
    },
    {
        type: "image",
        image: "https://picjumbo.com/favicon.ico",
        alt: "image",
        title: "Picjumbo",
        description: "Totally free photos for your commercial and personal works.",
        link: "https://picjumbo.com/"
    },
    {
        type: "image",
        image: "https://negativespace.co/wp-content/themes/negativespace/img/favicon.png",
        alt: "image",
        title: "Negative Space",
        description: "Free stock photos for commercial use with new photos added weekly.",
        link: "https://negativespace.co/"
    },
    {
        type: "image",
        image: "https://www.reshot.com/favicon.ico",
        alt: "image",
        title: "Reshot",
        description: "Uniquely free photos, hand-picked from emerging photographers.",
        link: "https://www.reshot.com/"
    },
    {
        type: "image",
        image: "https://isorepublic.com/wp-content/uploads/2017/06/cropped-favicon-32x32.png",
        alt: "image",
        title: "ISO Republic",
        description: "Free and premium stock photos for creatives with a clean, modern aesthetic.",
        link: "https://isorepublic.com/"
    },
    {
        type: "image",
        image: "https://www.dreamstime.com/favicon.ico",
        alt: "image",
        title: "Dreamstime",
        description: "One of the largest stock photo communities with both free and paid options.",
        link: "https://www.dreamstime.com/"
    },
    {
        type: "image",
        image: "https://www.depositphotos.com/favicon.ico",
        alt: "image",
        title: "Depositphotos",
        description: "Royalty-free stock images, vectors, and videos for commercial use.",
        link: "https://www.depositphotos.com/"
    },
    {
        type: "image",
        image: "https://www.gettyimages.com/favicon.ico",
        alt: "image",
        title: "Getty Images",
        description: "Premium stock photography, illustrations, and videos for professional use.",
        link: "https://www.gettyimages.com/"
    },
    // ==========Animation==========
    {
        type: "animation",
        image: "https://lottiefiles.com/favicon.ico",
        alt: "animation",
        title: "LottieFiles",
        description: "Vast collection of free and premium animated illustrations in Lottie format for web and mobile apps.",
        link: "https://lottiefiles.com/"
    },
    {
        type: "animation",
        image: "https://icons8.com/favicon.ico",
        alt: "animation",
        title: "Icons8",
        description: "Collection of animated icons available in various styles and categories for free use.",
        link: "https://icons8.com/animated-icons"
    },
    {
        type: "animation",
        image: "https://mixkit.co/favicon.ico",
        alt: "animation",
        title: "Mixkit",
        description: "Free stock videos, music, and animated illustrations for creative projects.",
        link: "https://mixkit.co/free-stock-animation/"
    },
    {
        type: "animation",
        image: "https://www.humaaans.com/favicon.ico",
        alt: "animation",
        title: "Humaaans",
        description: "Mix-and-match illustrations of people that can be customized and animated.",
        link: "https://www.humaaans.com/"
    },
    {
        type: "animation",
        image: "https://www.openpeeps.com/favicon.ico",
        alt: "animation",
        title: "Open Peeps",
        description: "Hand-drawn illustration library with customizable characters that can be animated.",
        link: "https://www.openpeeps.com/"
    },
    {
        type: "animation",
        image: "https://airbnb.design/favicon.ico",
        alt: "animation",
        title: "Lottie by Airbnb",
        description: "Original Lottie animation library and documentation from Airbnb's design team.",
        link: "https://airbnb.design/lottie/"
    },
    {
        type: "animation",
        image: "https://www.drawer.io/favicon.ico",
        alt: "animation",
        title: "Drawer",
        description: "Free animated illustrations and icons for commercial projects.",
        link: "https://www.drawer.io/"
    },
    // ==========VIDEO==========
    {
        type: "video",
        image: "https://www.youtube.com/s/desktop/d743f786/img/favicon_48x48.png",
        alt: "YouTube",
        title: "YouTube",
        description: "Countless tutorials and educational videos on virtually any topic, including design resources.",
        link: "https://www.youtube.com/"
    },
    {
        type: "video",
        image: "https://vimeo.com/favicon.ico",
        alt: "Vimeo",
        title: "Vimeo",
        description: "High-quality video platform with creative resources and stock videos.",
        link: "https://vimeo.com/"
    },
    {
        type: "video",
        image: "https://www.pexels.com/assets/static/images/meta/favicon.ico",
        alt: "Pexels Videos",
        title: "Pexels Videos",
        description: "Free stock videos for personal and commercial projects.",
        link: "https://www.pexels.com/videos/"
    },
    {
        type: "video",
        image: "https://pixabay.com/favicon-32x32.png",
        alt: "Pixabay Videos",
        title: "Pixabay Videos",
        description: "Over 2.3 million free stock videos, clips, and motion graphics.",
        link: "https://pixabay.com/videos/"
    },
    {
        type: "video",
        image: "https://mixkit.co/favicon.ico",
        alt: "Mixkit",
        title: "Mixkit",
        description: "Free high-quality stock videos and animated clips for any project.",
        link: "https://mixkit.co/free-stock-video/"
    },
    {
        type: "video",
        image: "https://www.videvo.net/favicon.ico",
        alt: "Videvo",
        title: "Videvo",
        description: "Free stock videos, motion graphics, and video editing templates.",
        link: "https://www.videvo.net/"
    },
    {
        type: "video",
        image: "https://coverr.co/favicon.ico",
        alt: "Coverr",
        title: "Coverr",
        description: "Beautiful free stock video footage for websites and commercials.",
        link: "https://coverr.co/"
    },
    {
        type: "video",
        image: "https://www.lifeofvids.com/favicon.ico",
        alt: "Life of Vids",
        title: "Life of Vids",
        description: "Free high-quality stock videos from the creators of Life of Pix.",
        link: "https://www.lifeofvids.com/"
    },
    {
        type: "video",
        image: "https://mazwai.com/favicon.ico",
        alt: "Mazwai",
        title: "Mazwai",
        description: "Free creative commons HD stock videos and clips.",
        link: "https://mazwai.com/"
    },
    {
        type: "video",
        image: "https://clipchamp.com/favicon.ico",
        alt: "Clipchamp",
        title: "Clipchamp",
        description: "Free online video editor with stock footage library.",
        link: "https://clipchamp.com/"
    },
    {
        type: "video",
        image: "https://www.pond5.com/favicon.ico",
        alt: "Pond5",
        title: "Pond5",
        description: "Marketplace for royalty-free stock footage, music, and SFX.",
        link: "https://www.pond5.com/"
    },
    {
        type: "video",
        image: "https://artgrid.io/favicon.ico",
        alt: "Artgrid",
        title: "Artgrid",
        description: "Premium cinematic stock footage for filmmakers.",
        link: "https://artgrid.io/"
    },
    {
        type: "video",
        image: "https://www.filmsupply.com/favicon.ico",
        alt: "FilmSupply",
        title: "FilmSupply",
        description: "High-end stock footage for professional productions.",
        link: "https://www.filmsupply.com/"
    },
    // ==========LEARNING RESOURCES==========
    // Web Development
    {
        type: "LearningResources",
        image: "https://www.w3schools.com/favicon.ico",
        alt: "W3Schools",
        title: "W3Schools",
        description: "Beginner-friendly tutorials for web technologies",
        link: "https://www.w3schools.com/"
    },
    {
        type: "LearningResources",
        image: "https://developer.mozilla.org/favicon.ico",
        alt: "MDN Web Docs",
        title: "MDN Web Docs",
        description: "Comprehensive web development documentation",
        link: "https://developer.mozilla.org/"
    },
    {
        type: "LearningResources",
        image: "https://stackoverflow.com/favicon.ico",
        alt: "Stack Overflow",
        title: "Stack Overflow",
        description: "Q&A platform for programming questions",
        link: "https://stackoverflow.com/"
    },

    // Programming Practice
    {
        type: "LearningResources",
        image: "https://leetcode.com/favicon.ico",
        alt: "LeetCode",
        title: "LeetCode",
        description: "Coding interview preparation platform",
        link: "https://leetcode.com/"
    },
    {
        type: "LearningResources",
        image: "https://www.hackerrank.com/favicon.ico",
        alt: "HackerRank",
        title: "HackerRank",
        description: "Coding challenges and competitions",
        link: "https://www.hackerrank.com/"
    },
    {
        type: "LearningResources",
        image: "https://www.codechef.com/favicon.ico",
        alt: "CodeChef",
        title: "CodeChef",
        description: "Competitive programming platform",
        link: "https://www.codechef.com/"
    },

    // Version Control
    {
        type: "LearningResources",
        image: "https://git-scm.com/favicon.ico",
        alt: "Git",
        title: "Git",
        description: "Distributed version control system",
        link: "https://git-scm.com/"
    },
    {
        type: "LearningResources",
        image: "https://github.com/favicon.ico",
        alt: "GitHub",
        title: "GitHub",
        description: "Code hosting platform for collaboration",
        link: "https://github.com/"
    },

    // Computer Science Fundamentals
    {
        type: "LearningResources",
        image: "https://www.geeksforgeeks.org/favicon.ico",
        alt: "GeeksforGeeks",
        title: "GeeksforGeeks",
        description: "CS/Programming tutorials and articles",
        link: "https://www.geeksforgeeks.org/"
    },
    {
        type: "LearningResources",
        image: "https://www.tutorialspoint.com/favicon.ico",
        alt: "TutorialsPoint",
        title: "TutorialsPoint",
        description: "Programming and CS fundamentals",
        link: "https://www.tutorialspoint.com/"
    },

    // Online Learning Platforms
    {
        type: "LearningResources",
        image: "https://www.coursera.org/favicon.ico",
        alt: "Coursera",
        title: "Coursera",
        description: "Online courses from top universities",
        link: "https://www.coursera.org/"
    },
    {
        type: "LearningResources",
        image: "https://www.edx.org/favicon.ico",
        alt: "edX",
        title: "edX",
        description: "University-level online courses",
        link: "https://www.edx.org/"
    },

    // Programming Languages
    {
        type: "LearningResources",
        image: "https://docs.python.org/favicon.ico",
        alt: "Python Docs",
        title: "Python Docs",
        description: "Official Python documentation",
        link: "https://docs.python.org/3/"
    },
    {
        type: "LearningResources",
        image: "https://dev.java/favicon.ico",
        alt: "Java Docs",
        title: "Java Docs",
        description: "Official Java documentation",
        link: "https://dev.java/"
    },

    // System Design
    {
        type: "LearningResources",
        image: "https://systemdesignprimer.com/favicon.ico",
        alt: "System Design Primer",
        title: "System Design Primer",
        description: "GitHub repository for system design",
        link: "https://github.com/donnemartin/system-design-primer"
    },

    // Database
    {
        type: "LearningResources",
        image: "https://www.mysql.com/favicon.ico",
        alt: "MySQL",
        title: "MySQL",
        description: "Relational database management system",
        link: "https://www.mysql.com/"
    },
    {
        type: "LearningResources",
        image: "https://www.mongodb.com/favicon.ico",
        alt: "MongoDB",
        title: "MongoDB",
        description: "NoSQL database documentation",
        link: "https://www.mongodb.com/"
    },

    // DevOps
    {
        type: "LearningResources",
        image: "https://www.docker.com/favicon.ico",
        alt: "Docker",
        title: "Docker",
        description: "Containerization platform",
        link: "https://www.docker.com/"
    },
    {
        type: "LearningResources",
        image: "https://kubernetes.io/favicon.ico",
        alt: "Kubernetes",
        title: "Kubernetes",
        description: "Container orchestration system",
        link: "https://kubernetes.io/"
    },

    // Computer Science Theory
    {
        type: "LearningResources",
        image: "https://visualgo.net/favicon.ico",
        alt: "VisuAlgo",
        title: "VisuAlgo",
        description: "Visualizations of algorithms",
        link: "https://visualgo.net/"
    },
    {
        type: "LearningResources",
        image: "https://www.bigocheatsheet.com/favicon.ico",
        alt: "Big-O Cheat Sheet",
        title: "Big-O Cheat Sheet",
        description: "Algorithm complexity reference",
        link: "https://www.bigocheatsheet.com/"
    },

    // Free Books
    {
        type: "LearningResources",
        image: "https://www.openbookproject.net/favicon.ico",
        alt: "Open Book Project",
        title: "Open Book Project",
        description: "Free programming books",
        link: "http://www.openbookproject.net/"
    },
    {
        type: "LearningResources",
        image: "https://github.com/favicon.ico",
        alt: "Free Programming Books",
        title: "Free Programming Books",
        description: "GitHub repository of free books",
        link: "https://github.com/EbookFoundation/free-programming-books"
    },

    // CS50
    {
        type: "LearningResources",
        image: "https://cs50.harvard.edu/favicon.ico",
        alt: "CS50",
        title: "CS50",
        description: "Harvard's intro to computer science",
        link: "https://cs50.harvard.edu/"
    },

    // Linux
    {
        type: "LearningResources",
        image: "https://www.linux.org/favicon.ico",
        alt: "Linux Documentation",
        title: "Linux Documentation",
        description: "Linux guides and manuals",
        link: "https://www.linux.org/docs/"
    },

    // Networking
    {
        type: "LearningResources",
        image: "https://www.cisco.com/favicon.ico",
        alt: "Cisco Networking",
        title: "Cisco Networking",
        description: "Networking fundamentals",
        link: "https://www.cisco.com/"
    },

    // Security
    {
        type: "LearningResources",
        image: "https://owasp.org/favicon.ico",
        alt: "OWASP",
        title: "OWASP",
        description: "Web application security resources",
        link: "https://owasp.org/"
    },
    // ==========TOOLS==========
    {
        type: "tools",
        image: "https://css-tricks.com/favicon.ico",
        alt: "CSS-Tricks",
        title: "CSS-Tricks",
        description: "Comprehensive CSS resources with tutorials and guides",
        link: "https://css-tricks.com/"
    },
    {
        type: "tools",
        image: "https://caniuse.com/favicon.ico",
        alt: "Can I Use",
        title: "Can I Use",
        description: "Browser support tables for web technologies",
        link: "https://caniuse.com/"
    },
    {
        type: "tools",
        image: "https://codepen.io/favicon.ico",
        alt: "CodePen",
        title: "CodePen",
        description: "Online code editor for HTML, CSS, and JavaScript",
        link: "https://codepen.io/"
    },
    {
        type: "tools",
        image: "https://devdocs.io/favicon.ico",
        alt: "DevDocs",
        title: "DevDocs",
        description: "Combined API documentation for developers",
        link: "https://devdocs.io/"
    },
    {
        type: "tools",
        image: "https://coolors.co/assets/img/favicon.ico",
        alt: "Coolors",
        title: "Coolors",
        description: "Color scheme generator for designers",
        link: "https://coolors.co/"
    },
    {
        type: "tools",
        image: "https://www.google.com/s2/favicons?domain=chrome.google.com",
        alt: "What Font",
        title: "What Font",
        description: "Find out which font is used on any website with this Chrome extension.",
        link: "https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm"
    },
    {
        type: "tools",
        image: "https://www.google.com/s2/favicons?domain=chrome.google.com",
        alt: "CSS Viewer",
        title: "CSS Viewer",
        description: "See the CSS styles of any website’s elements with this Chrome extension.",
        link: "https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciemofobhmofgce"
    },
    {
        type: "tools",
        image: "https://www.google.com/s2/favicons?domain=chrome.google.com",
        alt: "Page Ruler",
        title: "Page Ruler",
        description: "Measure the size of any element on a webpage with this Chrome extension.",
        link: "https://chrome.google.com/webstore/detail/page-ruler/jcbmcnpepaddcedmjdcmhbekjhbfnlff"
    },
    // ==========AI==========
    {
        type: "ai",
        image: "https://chat.openai.com/favicon.ico",
        alt: "ChatGPT",
        title: "ChatGPT",
        description: "Advanced AI chatbot by OpenAI for conversation, content generation, and problem-solving.",
        link: "https://chat.openai.com/"
    },
    {
        type: "ai",
        image: "https://www.bard.google.com/favicon.ico",
        alt: "Google Bard",
        title: "Google Bard",
        description: "Google's conversational AI service powered by the PaLM 2 model.",
        link: "https://bard.google.com/"
    },
    {
        type: "ai",
        image: "https://www.claude.ai/favicon.ico",
        alt: "Claude AI",
        title: "Claude AI",
        description: "Anthropic's AI assistant focused on helpful, harmless, and honest conversations.",
        link: "https://claude.ai/"
    },
    {
        type: "ai",
        image: "https://www.perplexity.ai/favicon.ico",
        alt: "Perplexity AI",
        title: "Perplexity AI",
        description: "AI-powered search engine that provides concise answers with sources.",
        link: "https://www.perplexity.ai/"
    },
    {
        type: "ai",
        image: "https://www.copy.ai/favicon.ico",
        alt: "Copy.ai",
        title: "Copy.ai",
        description: "AI writing assistant for marketing copy, content creation, and more.",
        link: "https://www.copy.ai/"
    },
    {
        type: "ai",
        image: "https://www.jasper.ai/favicon.ico",
        alt: "Jasper AI",
        title: "Jasper AI",
        description: "AI content creation platform for businesses and marketers.",
        link: "https://www.jasper.ai/"
    },
    {
        type: "ai",
        image: "https://www.grammarly.com/favicon.ico",
        alt: "Grammarly",
        title: "Grammarly",
        description: "AI-powered writing assistant for grammar checking and style improvements.",
        link: "https://www.grammarly.com/"
    },
    {
        type: "ai",
        image: "https://www.notion.so/favicon.ico",
        alt: "Notion AI",
        title: "Notion AI",
        description: "AI integration within Notion for content generation and organization.",
        link: "https://www.notion.so/product/ai"
    },
    {
        type: "ai",
        image: "https://www.murf.ai/favicon.ico",
        alt: "Murf AI",
        title: "Murf AI",
        description: "AI voice generator for creating realistic voiceovers from text.",
        link: "https://murf.ai/"
    },
    {
        type: "ai",
        image: "https://www.runwayml.com/favicon.ico",
        alt: "Runway ML",
        title: "Runway ML",
        description: "Creative AI toolkit for video editing, image generation, and more.",
        link: "https://runwayml.com/"
    },
    {
        type: "ai",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/MidJourney_Logo.svg",
        alt: "Midjourney",
        title: "Midjourney",
        description: "AI-based platform for generating images from textual descriptions.",
        link: "https://www.midjourney.com/"
    },
    {
        type: "ai",
        image: "https://openai.com/favicon.ico",
        alt: "DALL·E 3",
        title: "DALL·E 3",
        description: "A powerful AI model for generating images from textual descriptions, developed by OpenAI.",
        link: "https://openai.com/dall-e-3"
    },
    {
        type: "ai",
        image: "https://ideogram.ai/favicon.ico",
        alt: "Ideogram",
        title: "Ideogram",
        description: "An AI-powered tool for creative and professional image generation from text prompts.",
        link: "https://www.ideogram.ai/"
    },
    {
        type: "ai",
        image: "https://stablediffusionweb.com/favicon.ico",
        alt: "Stable Diffusion",
        title: "Stable Diffusion",
        description: "A cutting-edge AI model for generating high-quality images from text inputs.",
        link: "https://stablediffusionweb.com/"
    },
    {
        type: "ai",
        image: "https://flux.ai/favicon.ico",
        alt: "FLUX.1",
        title: "FLUX.1",
        description: "AI-powered design platform for generating visual content and concepts.",
        link: "https://flux.ai/"
    },
    {
        type: "ai",
        image: "https://firefly.adobe.com/favicon.ico",
        alt: "Adobe Firefly",
        title: "Adobe Firefly",
        description: "A suite of creative AI tools for image, video, and text generation, integrated with Adobe's Creative Cloud.",
        link: "https://firefly.adobe.com/"
    },
    {
        type: "ai",
        image: "https://recraft.io/favicon.ico",
        alt: "Recraft",
        title: "Recraft",
        description: "An AI-powered tool that turns sketches into high-quality designs.",
        link: "https://recraft.io/"
    },
    {
        type: "ai",
        image: "https://leonardo.ai/favicon.ico",
        alt: "Leonardo AI",
        title: "Leonardo AI",
        description: "An AI platform offering tools for image generation and enhancement.",
        link: "https://leonardo.ai/"
    },
    {
        type: "ai",
        image: "https://www.freepik.com/favicon.ico",
        alt: "Freepik",
        title: "Freepik",
        description: "A platform for AI-generated images, illustrations, and vectors, available for free and premium use.",
        link: "https://www.freepik.com/"
    },
    {
        type: "ai",
        image: "https://www.bing.com/favicon.ico",
        alt: "Bing Image Creator",
        title: "Bing Image Creator",
        description: "An AI tool from Microsoft Bing that generates images from text prompts.",
        link: "https://www.bing.com/create"
    },
    {
        type: "CodeEditor",
        image: "https://code.visualstudio.com/favicon.ico",
        alt: "VS Code",
        title: "Visual Studio Code",
        description: "Popular free code editor with extensive extensions and built-in Git support",
        link: "https://code.visualstudio.com/"
    },
    {
        type: "CodeEditor",
        image: "https://www.sublimetext.com/favicon.ico",
        alt: "Sublime Text",
        title: "Sublime Text",
        description: "Lightweight, fast code editor with powerful customization options",
        link: "https://www.sublimetext.com/"
    },
    {
        type: "CodeEditor",
        image: "https://atom.io/favicon.ico",
        alt: "Atom",
        title: "Atom",
        description: "Hackable text editor developed by GitHub with built-in package manager",
        link: "https://atom.io/"
    },
    {
        type: "CodeEditor",
        image: "https://www.jetbrains.com/favicon.ico",
        alt: "WebStorm",
        title: "WebStorm",
        description: "Powerful IDE for JavaScript and web development by JetBrains",
        link: "https://www.jetbrains.com/webstorm/"
    },
    {
        type: "CodeEditor",
        image: "https://brackets.io/favicon.ico",
        alt: "Brackets",
        title: "Brackets",
        description: "Modern open-source editor focused on web design with live preview",
        link: "https://brackets.io/"
    },
    {
        type: "CodeEditor",
        image: "https://www.vim.org/favicon.ico",
        alt: "Vim",
        title: "Vim",
        description: "Highly configurable text editor built for efficient coding",
        link: "https://www.vim.org/"
    },
    {
        type: "CodeEditor",
        image: "https://macromates.com/favicon.ico",
        alt: "TextMate",
        title: "TextMate",
        description: "Powerful macOS text editor with declarative customizations",
        link: "https://macromates.com/"
    },
    {
        type: "CodeEditor",
        image: "https://notepad-plus-plus.org/favicon.ico",
        alt: "Notepad++",
        title: "Notepad++",
        description: "Free source code editor with syntax highlighting for Windows",
        link: "https://notepad-plus-plus.org/"
    },
    {
        type: "CodeEditor",
        image: "https://www.eclipse.org/favicon.ico",
        alt: "Eclipse",
        title: "Eclipse",
        description: "Open-source IDE supporting multiple programming languages",
        link: "https://www.eclipse.org/"
    },
    {
        type: "CodeEditor",
        image: "https://www.jetbrains.com/favicon.ico",
        alt: "IntelliJ IDEA",
        title: "IntelliJ IDEA",
        description: "Smart Java IDE with advanced coding assistance",
        link: "https://www.jetbrains.com/idea/"
    },
    {
        type: "CodeEditor",
        image: "https://www.coderunnerapp.com/favicon.ico",
        alt: "CodeRunner",
        title: "CodeRunner",
        description: "Lightweight multi-language editor for macOS with execution support",
        link: "https://www.coderunnerapp.com/"
    },
    {
        type: "CodeEditor",
        image: "https://zed.dev/favicon.ico",
        alt: "Zed",
        title: "Zed",
        description: "High-performance, multiplayer code editor from Atom's creators",
        link: "https://zed.dev/"
    },
    {
        type: "VsCodeExtention",
        title: "Prettier – Code Formatter",
        description: "Automatically formats your code to make it clean and consistent"
    },
    {
        type: "VsCodeExtention",
        title: "ESLint",
        description: "Finds and fixes problems in your JavaScript code"
    },
    {
        type: "VsCodeExtention",
        title: "Live Server",
        description: "Launches a local development server with live reload feature"
    },
    {
        type: "VsCodeExtention",
        title: "GitLens",
        description: "Supercharges Git capabilities in VS Code"
    },
    {
        type: "VsCodeExtention",
        title: "Bracket Pair Colorizer",
        description: "Colors matching brackets to make code easier to read"
    },
    {
        type: "VsCodeExtention",
        title: "Auto Rename Tag",
        description: "Automatically renames paired HTML/XML tags"
    },
    {
        type: "VsCodeExtention",
        title: "Path Intellisense",
        description: "Autocompletes filenames when importing files"
    },
    {
        type: "VsCodeExtention",
        title: "Thunder Client",
        description: "Lightweight REST API client for testing endpoints"
    },
    {
        type: "VsCodeExtention",
        title: "Material Icon Theme",
        description: "Beautiful icons for your project files and folders"
    },
    {
        type: "VsCodeExtention",
        title: "Tailwind CSS IntelliSense",
        description: "Provides autocomplete and linting for Tailwind CSS"
    },
    {
        type: "VsCodeExtention",
        title: "Docker",
        description: "Makes it easy to build and manage containerized applications"
    },
    {
        type: "VsCodeExtention",
        title: "Remote - SSH",
        description: "Enables working with remote projects via SSH connection"
    },
    {
        type: "VsCodeExtention",
        title: "Code Runner",
        description: "Run code snippets or files in multiple languages"
    },
    {
        type: "VsCodeExtention",
        title: "Settings Sync",
        description: "Synchronizes VS Code settings across different machines"
    },
    {
        type: "VsCodeExtention",
        title: "Debugger for Chrome",
        description: "Debug JavaScript code running in Chrome from VS Code"
    },
    {
        type: "VsCodeExtention",
        title: "Live Share",
        description: "Enables real-time collaborative development"
    },
    {
        type: "VsCodeExtention",
        title: "Rainbow CSV",
        description: "Colorizes CSV files to make them easier to read"
    },
    {
        type: "VsCodeExtention",
        title: "Markdown All in One",
        description: "Everything you need for Markdown editing in one place"
    },
    {
        type: "VsCodeExtention",
        title: "npm Intellisense",
        description: "Autocompletes npm modules in import statements"
    },
    {
        type: "VsCodeExtention",
        title: "REST Client",
        description: "Send HTTP requests and view responses directly in VS Code"
    }

];
