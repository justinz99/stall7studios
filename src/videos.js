import anaThumb from './images/videoThumbnails/anaThumb.jpg'
import depThumb from './images/videoThumbnails/depThumb.jpg'
import drewThumb from './images/videoThumbnails/drewThumb.jpg'
import gannonThumb from './images/videoThumbnails/gannonThumb.jpg'
import wyattThumb from './images/videoThumbnails/wyattThumb.jpg'
import tereThumb from './images/videoThumbnails/tereThumb.jpg'
import smithRockThumb from './images/videoThumbnails/smithRockThumb.jpg'
import cologneThumb from './images/videoThumbnails/cologneThumb.jpg'

import wyattPreview from './video-previews/wyattPreview.mp4'
import gannonPreview from './video-previews/gannonPreview.mp4'
import depressionPreview from './video-previews/depressionPreview.mp4'
import colognePreview from './video-previews/colognePreview.mp4'

export const videos = [
    {
        id: 8,
        title: 'Cinematic Cologne Commercial | BMPCC 6K + Sigma 18-35',
        thumbnail: cologneThumb,
        embedId: '22M_afWZ_Q4', 
        description: 'We decided to create a conceptual Giorgio Armani-inspired cologne commercial with the Blackmagic Pocket Cinema Camera 6K paired with the Sigma 18-35 f1.8 lens. Additionally, our drone footage was captured with the DJI Mavic 3. To illustrate a raw and immersive feel we shot everything handheld at 24fps.',
        stillsPath: '/cologneStills/',
        stillsCount: 9,
        bts: "https://www.youtube.com/embed/8vHX0w0cjHc",
        preview: colognePreview
    },
    {
        id: 7,
        title: 'Fitness Spec Ad | BMPCC 6K + Sigma 18-35',
        thumbnail: wyattThumb,
        embedId: 'ApdtAa03uQE',
        description: 'To inpsire everyone into working out, Wyatt gives his all in this cinematic fitness video.',
        stillsPath: '/wyattStills/',
        stillsCount: 6,
        preview: wyattPreview
    },
    {
        id: 6,
        title: 'Basketball Spec Ad | BMPCC 6K + Sigma 18-35',
        thumbnail: gannonThumb,
        embedId: 'nfHaRDPmMAg',
        description: 'Introducing college basketball athlete: Gannon Beaman.',
        stillsPath: '/gannonStills/',
        stillsCount: 10,
        preview: gannonPreview
    },
    {
        id: 5,
        title: 'Running With Drew | BMPCC 6K + Panasonic S1',
        thumbnail: drewThumb,
        embedId:'5Qi-NiTOlGs',
        description: 'Get to know Drew Walters, as he talks about how running has improved his livelihood',
        stillsPath: '/drewStills/',
        stillsCount: 4
    },
    {
        id: 4,
        title: 'Living With It (Short Documentary) | BMPCC 6K',
        thumbnail: depThumb,
        embedId: 'SNhgoPm1zBA',
        description: 'A story told by our own Christopher Vasquez in which he opens up about living with depression',
        stillsPath: '/depStills/',
        stillsCount: 4,
        preview: depressionPreview
    },
    {
        id: 3,
        title: 'Smith Rock - 16mm Film Emulation | Panasonic S1',
        thumbnail: smithRockThumb,
        embedId: '6UvW0fpfRHs',
        description: 'The Stall7 team takes in the wonderful sights Smith Rock National Park has to offer.',
        stillsPath: '/smithRockStills/',
        stillsCount: 10
    },
    {
        id: 2,
        title: 'Dog Treat Spec Ad | BMPCC 6K + Sigma 18-35',
        thumbnail: anaThumb,
        embedId: 'kDsmbDBVEvo',
        description: 'A furry actor\'s debut into the commercial world with this Nylabone Nubz Dog Treats spec-ad',
        stillsPath: '/anaStills/',
        stillsCount: 4
    },
    {
        id: 1,
        title: 'Dear Tere',
        thumbnail: tereThumb,
        embedId: '3swyuy5BdRc',
        description: 'A congratulatory video for Nike retiree, Tere Enberg',
        stillsPath: '/tereStills/',
        stillsCount: 5
    },
]

