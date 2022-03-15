// Code your solution in this file!
function distanceFromHqInBlocks(address) {
    return (address >42) ? address - 42 : 42 -address;
}

function distanceFromHqInFeet(number) {
    return distanceFromHqInBlocks(number) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    return (num1 > num2) ? (num1 - num2)*264 : (num2 - num1)*264;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    }
    else if (feet >400 && feet <=2000) {
        return ((feet - 400) * 0.02);
    }
    else if (feet > 2000 && feet <=2500){
        return 25;
    }
    else if (feet > 2500) {
        return `cannot travel that far`;
    }
}
console.log(distanceFromHqInFeet(34, 32));
