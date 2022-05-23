// Code your solution here
function findMatching(drivers, names) {
    const x = drivers.filter(function(names2) {
        return names===names2 || names.toLowerCase() === names2
    })
    return x;
}

function fuzzyMatch(drivers, letter) {
    const w = drivers.filter(function(anotherLetter) {
        return anotherLetter.startsWith(letter)
    })
    return w;
}

function matchName(drivers, str) {
    const pikachu = drivers.filter(function(squirtle) {
        // console.log(drivers.name)
        return squirtle.name === str
    })
    return pikachu;
}