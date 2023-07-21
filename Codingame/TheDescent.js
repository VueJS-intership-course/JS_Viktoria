// game loop
let highest=0;
let mountNumber=0;

while (true) {
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.
        
        if(mountainH>=highest){
            highest=mountainH;
            mountNumber=i;
        }
    }
    console.log(mountNumber);   
    highest=0;
}

