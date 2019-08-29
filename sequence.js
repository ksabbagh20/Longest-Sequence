// let array=[3,4,5,1,6,6,7,8,32,30,31,33,40,34,35,36,38,37]
let array=[]
for (let i = 0; i < 100000; i++) {
    let random=Math.floor(Math.random()*100000)
    array.push(random) 
    //  
}
console.log('it is functioning')
// console.log(...array)

let set = new Set(array);
// console.log(...set)
findSequence(set)
/**
 * ?[ My first attempt at finding a sequence]
 * 
 * @param {*} set 
 * @description 
 * ?- Starts off my assigning the first value of set to an array --> index
 * ?- For loop iterating through entire set
 * ?- if a value greater/less than the index by one --> removes the value from set and appends it to array
 * ?- an incrementer i is introduced to run over array to find values greater/less than index by one and adding to array
 * ?- once no more values can be added to array,:
 * ?----> checks if size of array greater than the greatest sequence previously found and reasigns the greatest if true
 * ?----> array is reinitiallized to the first index of set and i is 0 
 */

function indexApproach(set){
    let i = 0
    let start = 0
    let newSet = set.values()
    let sequence = [newSet.next().value]
    let longest = 1

    // console.log('length of set: '+set.size)
    // console.log(sequence)
    size = set.size
    for (let j = 0; j < size; j++) {
        // console.log('i '+i)
        let index = sequence[i]
        set.delete(index)
        let nextNum = index+1
        if (set.has(nextNum)) {
            console.log('a greater val was found')
            sequence.push(nextNum)
            set.delete(nextNum)
            // console.log('new set: '+ set)
            // console.log(...set)

        }
        let prevNum = index - 1;

        if (set.has(prevNum)) {
            // console.log('a lesser val was found')
            sequence.push(prevNum)
            set.delete(prevNum)
            // console.log(...set)

        }
        // console.log('new sequence: '+ sequence)

        // console.log('size of array', sequence.length)
        // 
        // console.log('size of set', set.size)
        let sequenceLength = sequence.length
        if (i === sequenceLength - 1) {


            // console.log('no more sequence')
            if (sequenceLength > longest) {
                longest = sequenceLength
            }

            i = - 1
            sequence = [newSet.next().value]
            // console.log('new array', sequence)
    }
        i++ 


    }

    console.log('longest',longest)
}

function numberFound(sequence,set,number){
    sequence.push(number)
    set.delete(sequence)
}

function findSequence(set){
    
    let newSet = set.values()
    let sequence = [newSet.next().value]
    let longest = 1

    // console.log('length of set: '+set.size)
    // console.log(sequence)
    size = set.size
    for (let j = 0; j < size; j++) {
        // console.log('i '+i)
        let index = sequence[0]
        set.delete(index)
        let nextNum = index+1
        if (set.has(nextNum)) {
            // console.log('a greater val was found')
            numberFound(sequence,set,nextNum)
           
            // console.log('new set: '+ set)
            // console.log(...set)
            let checkNext=true
            while (checkNext){
                nextNum++
                if (set.has(nextNum)) {
                    // console.log('a new greater val was found')
                    numberFound(sequence,set,nextNum)
                
                }else{
                    checkNext=false
                }
        }
    }
        let prevNum = index - 1;

        if (set.has(prevNum)) {
            // console.log('a lesser val was found')
            numberFound(sequence,set,prevNum)
            // console.log(...set)
            let checkNext=true
            while (checkNext){
                prevNum--
                if (set.has(prevNum)) {
                    // console.log('a new lesser val was found')
                    numberFound(sequence,set,prevNum)
                
                }else{
                    checkNext=false
                }
        }
        }

        let sequenceLength = sequence.length
        if (sequenceLength > longest) {
            longest = sequenceLength
        }
        // console.log(sequence)
        sequence=[newSet.next().value]

    }
    console.log(longest)

}
