
function slope(m_index, m_line){
    let nbTreeEnc=0;
    let line =m_line;
    let index = m_index
    while (line < data.length) {
        if( data[line].charAt(index) == "#")
            nbTreeEnc++
        line = line +m_line
        index+=m_index
        if(index >= 31)
            index = index - 31
    }
    return nbTreeEnc
}
function part1(){
    console.log(slope(3,1))
}

function part2(){
    console.log(slope(1,1) * slope(3,1) * slope(5,1) * slope(7,1) * slope(1,2))
}

part1()
part2()