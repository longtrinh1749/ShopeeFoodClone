export function convertPrice(price) {
    price = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return price;
}
