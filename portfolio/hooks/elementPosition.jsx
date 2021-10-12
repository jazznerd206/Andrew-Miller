export const elementPosition = element => {
    const elPosition = {};
    let el = element.getBoundingClientRect();
    let middleX = Math.floor(el.x + el.width / 2);
    let middleY = Math.floor(el.y + el.height / 2);
    elPosition.middleX = middleX;
    elPosition.middleY = middleY;
    return elPosition;
}