/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];


/* 1. Loop through the `teamMembers` array and log each name to the console.  */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
teamMembers.forEach(teamMember => console.log(teamMember))


/* 2. Remove the first member of the array. */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
teamMembers.shift()
console.log(teamMembers)


/* 3. Remove the last member of the array.  */ 

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
teamMembers.pop()
console.log(teamMembers)


/* 4. Add a new member "Alex" to the front of the array. */  

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
teamMembers.unshift('Alex')
console.log(teamMembers)


/* 5. Append a new member "Linda" to the end of the array. */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
teamMembers.push('Alex')
console.log(teamMembers)


/* 6. Create a new array that excludes the first two members, keeping the original array unchanged.  */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
let newArray = teamMembers.slice(0,2)
console.log(newArray)


/* 7. Find the index of "Mike" in the array. */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
console.log(teamMembers.indexOf('Mike'))


/* 8. Try to find the index of "Jake" (who is not in the array). */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
console.log(teamMembers.indexOf('Jake'))


/* 9. Replace "Mike" with "Carol" and "Bruce" in the same position.  */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
teamMembers.splice(2,1,'Carol', 'Bruce')
console.log(teamMembers)


/* 10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged. */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
let newMember = ['Bob']
let allMembers = teamMembers.concat(newMember)
console.log(allMembers)


/* 11. Copy the entire `teamMembers` array using `slice` and store it in a new variable. */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
let copyTeamMembers = teamMembers.slice(0,4)
console.log(copyTeamMembers)


/* 12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
let newMember = ['Tina', 'Dean']
let allMembers = teamMembers.concat(newMember)
console.log(allMembers)


/* 13. Find all occurrences of "John" in the array and store their positions in a new array. */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
let johnIndex = []
let index = teamMembers.indexOf('John')
johnIndex.push(index)
console.log(johnIndex)


/* 14. Transform all names in the array to be uppercase while keeping the original array unchanged. */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
let upperTeamMembers = teamMembers.map(teamMember => teamMember.toUpperCase())
console.log(upperTeamMembers)


/* 15. Sort `teamMembers` in alphabetical order. */ 

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
console.log(teamMembers.sort())


/* 16. Reverse the `teamMembers` array.   */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
console.log(teamMembers.reverse())


/* 17. Check if at least one member in the array is named "John".  */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
console.log(teamMembers.includes('John'))


/* 18. Check if all names in the array have more than three letters. */

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
let name = teamMembers.map(teamMember => teamMember.length > 3)
console.log(name)