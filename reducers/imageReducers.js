import {imageName} from './imagenameReducers';

const imageReducers = (state=[
    {
        id: 1,
        image: 'img1.jpg'
    },
    {
        id: 2,
        image: 'img2.jpg'
    },
    {
        id: 3,
        image: 'img3.jpg'
    },
    {
        id: 4,
        image: 'img4.jpg'
    },
    {
        id: 5,
        image: 'img5.jpg'
    },
    {
        id: 6,
        image: 'img6.jpg'
    },
    {
        id: 7,
        image: 'statue.jpg'
    },
    {
        id: 8,
        image: 'img6.jpg'
    }
], action) => {  
    switch (action.type) {
        case "IMAGE_NAME":
            state = {
                name: action.payload
            };
            break;       
    }
    return state;
}
export default imageReducers;