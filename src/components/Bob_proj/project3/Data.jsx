import img from './Katy.png'
import mt from './mountain.png'
import wd from './wedding.png'
const data = [
    {
        id: 1,
        img:img,
        rating:'5.0',
        reviewCount: 6,
        country : 'USA',
        title :'Life lessons from Katie Zafares',
        price: 136,
        location: 'online',
        openSpots:0
    },
    {
        id: 2,
        img: wd,
        rating: '4.9',
        reviewCount: 130,
        country: 'FRANCE',
        title: 'Learn Wedding Photography',
        price: 125,
        location: 'online',
        openSpots: 27,
        description:'Interested in becoming a wedding photographer? For beginner and expert photographers alike,join us in learning techniques required to leave the happy memories that will last a lifetime'
    },
    {
        id: 3,
        img: mt,
        rating: '5.5',
        reviewCount: 23,
        country: 'NORWAY',
        title: 'Group mountain biking',
        price: 50,
        location: 'onlin',
        openSpots: 100,
        description: 'Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike.(Bike provided:)'
    }
]
export default data