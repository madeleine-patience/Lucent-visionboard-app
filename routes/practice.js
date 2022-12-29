

var repeatedCharacter = function(s) {
    

    
    // use a singluar loop to find the 1st character in the string and see if that character has a duplicate.
    let dup='' 
    for(let i=0; i<s.length; i++){
        let char= s.charAt(i)
        if(s.lastIndexOf(char)!== i){
        dup=char
        break
        }

    }

    return dup 
    // once you find the duplicate, break the loop. 



};

console.log(repeatedCharacter('abcdd'))