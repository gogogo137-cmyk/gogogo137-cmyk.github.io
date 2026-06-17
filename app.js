const { createApp } = Vue;

createApp({
    data() {
        return {
            scrolled: false,
            menuActive: false,
            selectedLanguage: 'en',
            // Project data structure - Separating data from presentation
            projects: [
                {
                    id: 'joke-generator',
                    name: 'Random Joke Generator',
                    nameZh: '歡樂隨機笑話產生器',
                    description: 'Break the ice! An interactive web app to generate witty puns, jokes, and computer science memes.',
                    descriptionZh: '打破尷尬！一鍵產生精選程式開發梗、冷笑話與冷知識的互動式小工具。',
                    icon: 'fa-face-laugh-squint',
                    link: './joke-generator/index.html',
                    color: '#ff6b6b'
                },
                {
                    id: 'mcdonalds',
                    name: 'McDonald\'s Decision Tool',
                    nameZh: '麥當勞金黃選餐隨機機',
                    description: 'A smart randomizer solving McDonald\'s decision paralysis using weight-based algorithms.',
                    descriptionZh: '利用價格反比權重演算法，解決麥當勞選擇困難症的智慧選餐系統。',
                    icon: 'fa-burger',
                    link: 'https://gogogo137-cmyk.github.io/HW3-choice-Mc/',
                    color: '#ffc72c'
                },
                {
                    id: 'cosmos',
                    name: 'Cosmos Generator',
                    nameZh: '宇宙星空生成器',
                    description: 'Interactive celestial simulation engine generating cosmic bodies and starry patterns.',
                    descriptionZh: '互動式天體物理星空模擬引擎，產生獨特星雲與恆星軌跡。',
                    icon: 'fa-user-astronaut',
                    link: '../cosmos-generator/index.html',
                    color: '#8b5cf6'
                },
                {
                    id: 'hw7-2330',
                    name: 'TSMC Stock regression (2330)',
                    nameZh: '台積電 (2330) 股票回歸分析',
                    description: 'Predictive analytics on TSMC stock movement using regression modeling.',
                    descriptionZh: '基於迴歸模型與機器學習，進行台積電股票走勢預測與量化分析。',
                    icon: 'fa-microchip',
                    link: './HW7-2330/index.html',
                    color: '#06b6d4'
                },
                {
                    id: 'hw7-boston',
                    name: 'Boston Housing Analysis',
                    nameZh: '波士頓房價迴歸預測',
                    description: 'Data science analysis on the classic Boston housing dataset with linear models.',
                    descriptionZh: '使用經典波士頓房地產數據集，進行房價特徵分析與線性預測模型。',
                    icon: 'fa-house-chimney',
                    link: './HW7%20boston/index.html',
                    color: '#3b82f6'
                },
                {
                    id: 'hw7-california',
                    name: 'California Housing Model',
                    nameZh: '加州房價多重迴歸模型',
                    description: 'Multi-variable regression models mapping property values across California districts.',
                    descriptionZh: '多變數地理迴歸分析，針對加利福尼亞州不同地區的房屋價值預測模型。',
                    icon: 'fa-map-location-dot',
                    link: 'https://github.com/gogogo137-cmyk/HW7-califonia',
                    color: '#10b981'
                },
                {
                    id: 'hw6',
                    name: 'CRISP-DM Project Analysis Report of Top 50 Startups',
                    nameZh: '五十大新創企業的CRISP-DM 專案分析報告',
                    description: 'CRISP-DM methodology application on analyzing 50 startup business ventures.',
                    descriptionZh: '應用 CRISP-DM 方法論分析五十大新創企業的商業指標與數據探勘報告。',
                    icon: 'fa-chart-pie',
                    link: 'https://github.com/gogogo137-cmyk/stratup50',
                    color: '#f59e0b'
                },
                {
                    id: 'hw5',
                    name: 'Machine Learning Homework 5',
                    nameZh: '機器學習作業五',
                    description: 'Algorithmic homework showcasing dataset processing and metrics compilation.',
                    descriptionZh: '精細資料集處理、核心指標計算與演算法效能評估作業。',
                    icon: 'fa-terminal',
                    link: '../HW5/index.html',
                    color: '#ec4899'
                }
            ]
        };
    },
    methods: {
        handleScroll() {
            // Add background color to header on scroll
            this.scrolled = window.scrollY > 50;
        },
        toggleMenu() {
            // Toggle hamburger menu on mobile
            this.menuActive = !this.menuActive;
        },
        changeLanguage() {
            // Switch pages based on dropdown selection
            if (this.selectedLanguage === 'en') {
                window.location.href = 'index.html';
            } else if (this.selectedLanguage === 'zh') {
                window.location.href = 'index-zh.html';
            }
        },
        initAnimations() {
            // Register GSAP ScrollTrigger plugin
            gsap.registerPlugin(ScrollTrigger);

            // Hero content animations
            gsap.to('.hero-content h1', { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                delay: 0.3, 
                ease: "power3.out" 
            });
            gsap.to('.hero-content h2', { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                delay: 0.6, 
                ease: "power3.out" 
            });
            gsap.to('.hero-content .cta-button', { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                delay: 0.9, 
                ease: "power3.out" 
            });

            // Parallax scroll effect on Hero section
            gsap.to('.hero', {
                backgroundPosition: '50% 85%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Staggered entry animation for gallery items as they scroll into view
            gsap.utils.toArray('.gallery-item').forEach((item, index) => {
                gsap.to(item, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom-=80',
                        toggleActions: 'play none none reverse'
                    },
                    delay: (index % 3) * 0.1, // Stagger delay by columns
                    ease: "power3.out"
                });
            });
        }
    },
    mounted() {
        // Detect current language from url path
        if (window.location.pathname.includes('index-zh.html')) {
            this.selectedLanguage = 'zh';
        } else {
            this.selectedLanguage = 'en';
        }
        
        window.addEventListener('scroll', this.handleScroll);
        
        // Wait for Vue DOM updates to initialize GSAP
        this.$nextTick(() => {
            this.initAnimations();
        });
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}).mount('#app');
