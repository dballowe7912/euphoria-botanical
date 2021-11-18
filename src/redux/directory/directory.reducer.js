import oilImage from '../../assets/homepage/oil.jpg';
import dryHerbsImage from '../../assets/homepage/herbs.jpg';
import bulkTeaImg from '../../assets/homepage/tea-wall.jpg';
import soapsImage from '../../assets/homepage/soaps.jpg';
import jewelryImage from '../../assets/homepage/jewelry.jpg';
import skateboardsImage from '../../assets/homepage/skateboards.jpg';

const INITIAL_STATE = {
    sections: [
        {
            title: 'Essential Oils',
            imageUrl: oilImage,
            id: 1,
            linkUrl: 'shop/essential-oils'
        },
        {
            title: 'Dry Herbs',
            imageUrl: dryHerbsImage,
            id: 2,
            linkUrl: 'shop/dry-herbs'
        },
        {
            title: 'Bulk Tea',
            imageUrl: bulkTeaImg,
            id: 3,
            linkUrl: 'shop/bulk-tea'
        },
        {
            title: 'Soaps',
            imageUrl: soapsImage,
            id: 4,
            linkUrl: 'shop/soaps'
        },
        {
            title: 'Jewelry',
            imageUrl: jewelryImage,
            id: 5,
            linkUrl: 'shop/jewelry'
        },
        {
            title: 'Skateboard Shop',
            imageUrl: skateboardsImage,
            id: 6,
            linkUrl: 'shop/skate-shop'
        }
        // {
        //     title: 'sprays',
        //     imageUrl: '',
        //     id: 5,
        //     linkUrl: 'shop/sprays'
        // },
        // {
        //     title: 'crystals and stones',
        //     imageUrl: '',
        //     id: 7,
        //     linkUrl: 'shop/crystals-and-stones'
        // },
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;