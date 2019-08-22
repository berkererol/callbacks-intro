// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach(function (it, ind) {
    if (it === "Waldo") {
      found(ind)
    }
  
  })
}

const actionWhenFound = function(ind) {
  console.log(`Found him at index ${ind}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);