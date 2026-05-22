const creatorsData = [
    { id: 1, name: "Keepitreal", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" },
    { id: 2, name: "DigiLab", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop" },
    { id: 3, name: "GravityOne", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop" },
    { id: 4, name: "Juanie", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" },
    { id: 5, name: "BlueWhale", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1634646549987-94d80a112702?q=80&w=1200&auto=format&fit=crop" },
    { id: 6, name: "Mr Fox", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop" },
    { id: 7, name: "Shroomie", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" },
    { id: 8, name: "Robotica", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1200&auto=format&fit=crop" },
    { id: 9, name: "RustyRobot", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop" },
    {
        id: 10, name: "Animakid", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1634646549987-94d80a112702?q=80&w=1200&auto=format&fit=crop",
        volume: "250k+", nftsSold: "50+", followers: "3000+", bio: "The internet's friendliest designer kid.",
        nfts: [
            { title: "Distant Galaxy", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", price: "1.63", bid: "0.33" },
            { title: "Life On Edena", img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=400&auto=format&fit=crop", price: "1.63", bid: "0.33" },
            { title: "AstroFiction", img: "https://images.unsplash.com/photo-1634646549987-94d80a112702?q=80&w=400&auto=format&fit=crop", price: "1.63", bid: "0.33" },
            { title: "CryptoCity", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop", price: "1.63", bid: "0.33" },
            { title: "ColorfulDog 0524", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop", price: "1.63", bid: "0.33" },
            { title: "Space Tales", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop", price: "1.63", bid: "0.33" }
        ]
    },
    { id: 11, name: "Dotgu", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop" },
    { id: 12, name: "Ghiblier", sales: "34.53 ETH", avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=150&auto=format&fit=crop", cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" },
];

const categoriesData = [
    { name: "Art", icon: "ph-paint-brush", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop", desc: "Explore unique digital paintings and illustrations from artists worldwide.", items: "9,312", floor: "0.03 ETH", volume: "1,234 ETH" },
    { name: "Collectibles", icon: "ph-swatches", img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1200&auto=format&fit=crop", desc: "Rare digital collectibles — own a piece of history in the digital age.", items: "5,841", floor: "0.05 ETH", volume: "987 ETH" },
    { name: "Music", icon: "ph-music-notes", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop", desc: "Own exclusive beats, albums and audio experiences from top musicians.", items: "2,104", floor: "0.02 ETH", volume: "534 ETH" },
    { name: "Photography", icon: "ph-camera", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop", desc: "Stunning photographs turned into one-of-a-kind digital collectibles.", items: "3,470", floor: "0.04 ETH", volume: "720 ETH" },
    { name: "Video", icon: "ph-video-camera", img: "https://images.unsplash.com/photo-1634646549987-94d80a112702?q=80&w=1200&auto=format&fit=crop", desc: "Short films, animations and video art from the world's best creators.", items: "1,293", floor: "0.10 ETH", volume: "440 ETH" },
    { name: "Utility", icon: "ph-magic-wand", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop", desc: "NFTs with real-world utility — memberships, access passes and more.", items: "780", floor: "0.15 ETH", volume: "310 ETH" },
    { name: "Sport", icon: "ph-basketball", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop", desc: "Collectible sports moments, athlete cards and exclusive fan experiences.", items: "4,201", floor: "0.07 ETH", volume: "890 ETH" },
    { name: "Virtual Worlds", icon: "ph-planet", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop", desc: "Land, avatars, and items from the most popular metaverse platforms.", items: "6,620", floor: "0.20 ETH", volume: "2,300 ETH" }
];

const discoverData = [
    { title: "Distant Galaxy", creator: "MoonDancer", price: "1.63 ETH", bid: "0.33 wETH", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" },
    { title: "Life On Edena", creator: "NebulaKid", price: "1.63 ETH", bid: "0.33 wETH", img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=400&auto=format&fit=crop", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" },
    { title: "AstroFiction", creator: "Spaceone", price: "1.63 ETH", bid: "0.33 wETH", img: "https://images.unsplash.com/photo-1634646549987-94d80a112702?q=80&w=400&auto=format&fit=crop", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" }
];

// Fallback logic for creators missing specific details
const defaultNfts = discoverData.map(d => ({ title: d.title, img: d.img, price: "1.63", bid: "0.33" }));

document.addEventListener('DOMContentLoaded', () => {
    renderCreators();
    renderCategories();
    renderDiscover();

    // Home link
    document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault();
        showHome();
    });
});

function renderCreators() {
    const grid = document.getElementById('creators-grid');
    grid.innerHTML = '';

    creatorsData.forEach((creator, index) => {
        const card = document.createElement('div');
        card.className = 'creator-card';
        card.innerHTML = `
            <div class="creator-rank">${index + 1}</div>
            <img src="${creator.avatar}" class="creator-avatar" alt="${creator.name}">
            <div class="creator-info">
                <h5>${creator.name}</h5>
                <p>Total Sales: <span>${creator.sales}</span></p>
            </div>
        `;
        card.addEventListener('click', () => showProfile(creator));
        grid.appendChild(card);
    });
}

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = '';
    categoriesData.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-img-box">
                <img src="${cat.img}" alt="${cat.name}">
                <div class="category-overlay">
                    <i class="ph ${cat.icon}"></i>
                </div>
            </div>
            <h5>${cat.name}</h5>
        `;
        card.addEventListener('click', () => showCategory(cat));
        grid.appendChild(card);
    });
}

function renderDiscover() {
    const grid = document.getElementById('discover-grid');
    grid.innerHTML = '';
    discoverData.forEach(nft => {
        grid.innerHTML += `
            <div class="nft-card">
                <img src="${nft.img}" class="nft-img" alt="${nft.title}">
                <div class="nft-info">
                    <h5>${nft.title}</h5>
                    <div class="card-creator" style="margin-top: 10px;">
                        <img src="${nft.avatar}" alt="${nft.creator}" class="avatar-sm">
                        <span>${nft.creator}</span>
                    </div>
                    <div class="nft-price-row">
                        <div>
                            <div class="price-label">Price</div>
                            <div>${nft.price}</div>
                        </div>
                        <div style="text-align: right;">
                            <div class="price-label">Highest Bid</div>
                            <div>${nft.bid}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function showHome() {
    document.getElementById('home-view').classList.add('active-view');
    document.getElementById('profile-view').classList.remove('active-view');
    document.getElementById('category-view').classList.remove('active-view');
    window.scrollTo(0, 0);
}

function showCategory(cat) {
    document.getElementById('home-view').classList.remove('active-view');
    document.getElementById('profile-view').classList.remove('active-view');
    const categoryView = document.getElementById('category-view');
    categoryView.classList.add('active-view');

    // Generate 9 NFT cards for this category using a pool of images
    const nftPool = [
        { title: `${cat.name} #001`, price: '1.63', bid: '0.33', creator: 'Keepitreal', avatar: creatorsData[0].avatar, img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop' },
        { title: `${cat.name} #002`, price: '2.10', bid: '1.05', creator: 'DigiLab', avatar: creatorsData[1].avatar, img: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=400&auto=format&fit=crop' },
        { title: `${cat.name} #003`, price: '0.95', bid: '0.55', creator: 'GravityOne', avatar: creatorsData[2].avatar, img: 'https://images.unsplash.com/photo-1634646549987-94d80a112702?q=80&w=400&auto=format&fit=crop' },
        { title: `${cat.name} #004`, price: '3.20', bid: '2.80', creator: 'Animakid', avatar: creatorsData[9].avatar, img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop' },
        { title: `${cat.name} #005`, price: '1.40', bid: '0.90', creator: 'Juanie', avatar: creatorsData[3].avatar, img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop' },
        { title: `${cat.name} #006`, price: '0.78', bid: '0.40', creator: 'BlueWhale', avatar: creatorsData[4].avatar, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop' },
        { title: `${cat.name} #007`, price: '2.50', bid: '1.80', creator: 'Shroomie', avatar: creatorsData[6].avatar, img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=400&auto=format&fit=crop' },
        { title: `${cat.name} #008`, price: '1.10', bid: '0.70', creator: 'Robotica', avatar: creatorsData[7].avatar, img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop' },
        { title: `${cat.name} #009`, price: '4.00', bid: '3.50', creator: 'Mr Fox', avatar: creatorsData[5].avatar, img: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=400&auto=format&fit=crop' },
    ];

    let nftsHtml = '';
    nftPool.forEach(nft => {
        nftsHtml += `
            <div class="nft-card">
                <img src="${nft.img}" class="nft-img" alt="${nft.title}">
                <div class="nft-info">
                    <h5>${nft.title}</h5>
                    <div class="card-creator" style="margin-top: 10px;">
                        <img src="${nft.avatar}" alt="${nft.creator}" class="avatar-sm">
                        <span>${nft.creator}</span>
                    </div>
                    <div class="nft-price-row">
                        <div>
                            <div class="price-label">Price</div>
                            <div>${nft.price} ETH</div>
                        </div>
                        <div style="text-align: right;">
                            <div class="price-label">Highest Bid</div>
                            <div>${nft.bid} wETH</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    categoryView.innerHTML = `
        <div class="category-banner">
            <img src="${cat.img}" alt="${cat.name}">
            <div class="category-banner-overlay">
                <div class="cat-icon">
                    <i class="ph ${cat.icon}"></i>
                </div>
                <h1>${cat.name}</h1>
                <p>${cat.desc}</p>
            </div>
        </div>

        <div class="category-stats-bar">
            <div class="container">
                <div class="cat-stat">
                    <h4>${cat.items}</h4>
                    <span>Items</span>
                </div>
                <div class="cat-stat">
                    <h4>${cat.floor}</h4>
                    <span>Floor Price</span>
                </div>
                <div class="cat-stat">
                    <h4>${cat.volume}</h4>
                    <span>Total Volume</span>
                </div>
                <div class="cat-stat" style="margin-left: auto;">
                    <button class="btn btn-primary"><i class="ph ph-plus"></i> Follow Category</button>
                </div>
            </div>
        </div>

        <div class="category-filter-bar">
            <div class="container">
                <div class="filter-tabs">
                    <button class="filter-tab active">All Items</button>
                    <button class="filter-tab">Recently Listed</button>
                    <button class="filter-tab">Most Viewed</button>
                    <button class="filter-tab">On Auction</button>
                </div>
                <div class="section-header" style="margin-bottom:0">
                    <p style="color: var(--text-muted);">${cat.items} results</p>
                </div>
            </div>
        </div>

        <div class="category-nfts-section">
            <div class="container">
                <div class="discover-grid">
                    ${nftsHtml}
                </div>
            </div>
        </div>
    `;

    // Attach tab switching interactions
    categoryView.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            categoryView.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    window.scrollTo(0, 0);
}

function showProfile(creator) {
    document.getElementById('home-view').classList.remove('active-view');
    document.getElementById('category-view').classList.remove('active-view');
    const profileView = document.getElementById('profile-view');
    profileView.classList.add('active-view');

    const nfts = creator.nfts || defaultNfts;
    const volume = creator.volume || "250k+";
    const sold = creator.nftsSold || "50+";
    const followers = creator.followers || "3000+";
    const bio = creator.bio || "The internet's friendliest designer kid.";

    let nftsHtml = '';
    nfts.forEach(nft => {
        nftsHtml += `
            <div class="nft-card">
                <img src="${nft.img}" class="nft-img" alt="${nft.title}">
                <div class="nft-info">
                    <h5>${nft.title}</h5>
                    <div class="card-creator" style="margin-top: 10px;">
                        <img src="${creator.avatar}" alt="${creator.name}" class="avatar-sm">
                        <span>${creator.name}</span>
                    </div>
                    <div class="nft-price-row">
                        <div>
                            <div class="price-label">Price</div>
                            <div>${nft.price} ETH</div>
                        </div>
                        <div style="text-align: right;">
                            <div class="price-label">Highest Bid</div>
                            <div>${nft.bid} wETH</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    profileView.innerHTML = `
        <img src="${creator.cover}" class="profile-cover" alt="Cover">
        <div class="container profile-info">
            <img src="${creator.avatar}" class="profile-avatar" alt="${creator.name}">
            
            <div class="profile-header-row">
                <div>
                    <h2>${creator.name}</h2>
                </div>
                <div class="profile-actions">
                    <button class="btn btn-primary"><i class="ph ph-copy"></i> 0xc0E3...B79C</button>
                    <button class="btn btn-outline"><i class="ph ph-plus"></i> Follow</button>
                </div>
            </div>
            
            <div class="profile-stats">
                <div>
                    <h4>${volume}</h4>
                    <span>Volume</span>
                </div>
                <div>
                    <h4>${sold}</h4>
                    <span>NFTs Sold</span>
                </div>
                <div>
                    <h4>${followers}</h4>
                    <span>Followers</span>
                </div>
            </div>

            <div class="profile-bio">
                <h4>Bio</h4>
                <p>${bio}</p>
                <h4 style="margin-top: 20px;">Links</h4>
                <div class="profile-links">
                    <a href="#"><i class="ph ph-globe"></i></a>
                    <a href="#"><i class="ph ph-discord-logo"></i></a>
                    <a href="#"><i class="ph ph-youtube-logo"></i></a>
                    <a href="#"><i class="ph ph-twitter-logo"></i></a>
                    <a href="#"><i class="ph ph-instagram-logo"></i></a>
                </div>
            </div>
        </div>

        <div class="profile-nfts-section">
            <div class="container">
                <div class="profile-tabs">
                    <div class="tab active">Created <span>${nfts.length}</span></div>
                    <div class="tab">Owned <span>67</span></div>
                    <div class="tab">Collection <span>4</span></div>
                </div>
                <div class="discover-grid">
                    ${nftsHtml}
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}
