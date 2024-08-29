function snakeToCamel(str){
    // Turn snake_case to camelCase

    for (let i = 0 ; i < str.length ; i++){
        if (str[i] === '_'){
            str = str.slice(0,i) + str[i+1].toUpperCase() + str.slice(i+2)
        }
    }
    return str
}

console.log(snakeToCamel('hello_world'))
console.log(snakeToCamel('god_bless_america'))