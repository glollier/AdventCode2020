function charCount(string, letter){
    let lcount = 0;
    for (let i = 0; i < string.length; i++) {
        if(string.charAt(i) == letter ){
            lcount++;
        }
    }
    return lcount;
}

function part1(){
    let nbAccuratePass = 0;
    data.forEach((password)=>{
        let array = password.split(" ")
        let string = array[2]
        let letter = array[1].slice(0,-1)
        let minOcc = parseInt(array[0].split("-")[0])
        let maxOcc = parseInt(array[0].split("-")[1])
        let nbOcc = charCount(string, letter)
        //console.log(password, string, letter, minOcc, maxOcc, nbOcc)
        if(nbOcc >= minOcc && nbOcc <= maxOcc)
            nbAccuratePass++;
    })
    console.log(nbAccuratePass)
    return nbAccuratePass
}

function part2(){
    let nbAccuratePass = 0;
    data.forEach((password)=>{
        let array = password.split(" ")
        let string = array[2]
        let letter = array[1].slice(0,-1)
        let minOcc = parseInt(array[0].split("-")[0])
        let maxOcc = parseInt(array[0].split("-")[1])

        //console.log(password, string, letter, minOcc, maxOcc)
        if(string.charAt(minOcc-1) == letter){
            if( string.charAt(maxOcc-1) != letter ){
                nbAccuratePass++
            }
        }else if(string.charAt(maxOcc-1) == letter){
            if(string.charAt(minOcc-1) != letter ){
                nbAccuratePass++
            }
        }
            
    })
    console.log(nbAccuratePass)
    return nbAccuratePass;
}

part1()
part2()