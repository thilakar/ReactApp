export function imageNameAction(imageName) {
    console.log('hi');
    return {
        type: "IMAGE_NAME",
        payload: imageName
    };
}