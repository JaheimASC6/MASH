


function randomnumber(index){
    let numbers = Math.random();
    numbers*= index;
    numbers= Math.floor(numbers);
    return numbers;
};

function getHome(){
    let favPlace=process.argv[2];
    if (favPlace == undefined) {
         favPlace="HAWAII"
    }
    let arr = ["Mansion", "Apartment", "Shack", "House",favPlace , "Hell"];
    let final=randomnumber(arr.length);
    return arr[final];
};
function getChildrenCount(){
    let child=process.argv[3];
    if (child==undefined) {
        child=21;
        return child;
    };
    if (Math.random() > .5) {
        return randomnumber(101);
    }
    else {
        return (child);
    }
}


function getCar(){
    let favcar=process.argv[4];
    if (favcar == undefined){
        favcar= "hover car"
    }
    let arr = ["Lambo", "Box with wheels", favcar];
    let finale=randomnumber(arr.length);
    return arr[finale];
};

function Nameofspouse(){
    let arr = ["Firefox", "Pit", "Google", "Discord", "Satania"];
    let final=randomnumber(arr.length);
    return arr[final];

}
function mash(){
    return ('You will live in a ' + getHome() + ' and you will have ' + getChildrenCount() + " kids!"+'With a '+getCar()+ " and a wife named "+Nameofspouse());

};

console.log(mash());