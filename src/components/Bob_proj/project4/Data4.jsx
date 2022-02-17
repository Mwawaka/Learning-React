import fj from './images/Fuji.png'
import aus from './images/Sydney.png'
import gr from './images/Giera.png'
import googleMaps from './images/loc.png'
const data = [
    {
        title:'Mount Fuji',
        googleMaps:googleMaps,
        location:'JAPAN',
        link:'View on Google Maps',
        startDate:'12 Jan, 2021',
        endDate:'24 Jan, 2021',
        img: fj ,
        description:'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380feet). Mount Fuji is the single most popular tourist site in Japan ,for both Japanese and foreign tourists.'
    },
    {
        title:'Sydney Opera House',
        googleMaps:googleMaps,
        location:'AUSTRALIA',
        link:'View on Google Maps',
        startDate:'27 May, 2021',
        endDate:'8 Jun, 2021',
        img: aus,
        description:"The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings. "
    },
    {
        title:'Gierangerfjord' ,
        googleMaps: googleMaps,
        location:'NORWAY' ,
        link:'View on Google Maps',
        startDate:'01 Oct, 2021' ,
        endDate: '18 Nov, 2021',
        img:gr,
        description:'The Gieranger Fjord is a fjord in the Sunnmore region of More og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
    }
]
export default data;