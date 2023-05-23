/* ARRAY */

const arr = [1,2,3, 'Str']
/* add the item at the end from the array */
arr.push(5)

/* add item at the beginning from the array */
arr.unshift(0)

/* remove the last object from the array */
arr.pop()

/* remove the first object from the array */
arr.shift()

/* print the each item of the array */
for (item of arr){ 
console.log(item)
}

 /* print the array n times, where n is the number of objects in the array */
for (item of arr){ 
console.log(arr)
}
