

export default {
    query,
    getById
}

const gTrails = [
    {
        _id: '1a6',
        name: 'Triglav National Park',
        country: 'Slovenia',
        difficulty: 'Advanced',
        distance: '65.2km',
        days: 4,
        imgUrls: [
            'https://media.gettyimages.com/photos/wonderful-spring-landscape-with-beautiful-little-waterfall-in-forest-picture-id1164697961?k=6&m=1164697961&s=612x612&w=0&h=eL0tA2xzjgWXVTYIQfFMhtJcTGdUmSXPL-wicG-RMhA=',
            'https://media.gettyimages.com/photos/stack-of-stones-vri-pass-triglav-national-park-gorenjska-julian-alps-picture-id979035764?k=6&m=979035764&s=612x612&w=0&h=aKRri8Fy2ljtBD3GXs11DKMjGuDQh_zVZmTkbGbZuPI=',
            'https://media.gettyimages.com/photos/scenic-view-of-calm-lake-against-sky-at-triglav-national-park-during-picture-id611487081?k=6&m=611487081&s=612x612&w=0&h=q-r21I6zDWsvmKUSJQKP_zoD4ff4ermlDZjBV9U5eCE=',
            'https://media.gettyimages.com/photos/slovenia-gorenjska-national-park-triglav-vintgar-gorge-picture-id597061365?k=6&m=597061365&s=612x612&w=0&h=WVizZMBBGzoNYgMDo23quKlhgmCBVVHygjd-5ok5sr0='
        ],
        location: 'x',

        descriptions: 'On this trail you can enjoy the beautiful scenery of Julian Alps. Through the journey we conquer a few peaks in the Alps while we rest on each day in a mountain hut. The trail can be done in fewer days if you are that fit, but to really feel the joy of hiking it should be done in more days.'
    },


    {
        _id: '5u3',
        name: 'Olympus Mountain',
        country: 'Greece',
        difficulty: 'Beginner',
        distance: '20.8km',
        days: 3,
        location: 'x',
        imgUrls: [
            ' https://images.discerningassets.com/image/upload/c_fill,h_1000,w_1000/c_fit,fl_relative,h_1.0,o_100,w_1.0/c_fill,w_3648,h_3648/v1543811053/Mount_Olympus_Sunset_vhnlib.jpg',
            'https://trekking.ams3.cdn.digitaloceanspaces.com/uploads/2018/02/DSC7966-975x550.jpg',
            'https://trekking.ams3.cdn.digitaloceanspaces.com/uploads/2019/02/river-trekking-rema-toy-orlia-7-720x405.jpg',
            'https://trekking.ams3.cdn.digitaloceanspaces.com/uploads/2018/02/Olympus-9-720x405.jpg'

        ],

        descriptions: `Mt. Olympus, the highest mountain in Greece, is a place of divine beauty! It was blessed by ancient Greek gods and chosen by Zeus to host their home.

        Discover its spectacular natural diversity. More than 1500 plant species, some of them rare and endemic, as well as wolves, jackals, deer and some endangered bird and butterfly species.
        Explore a monumental natural landscape with thickly forested slopes and steep rocky foggy and cloud covered peaks.
        
        Ideal for: nature lovers, hike and climb enthusiasts, flora and fauna beauty admirers.
        `
    }
]






function query() {
    return  Promise.resolve(gTrails)
}


function getById(trailId) {
    const trail = gTrails.find(trail => trail._id === trailId)
    return trail
}