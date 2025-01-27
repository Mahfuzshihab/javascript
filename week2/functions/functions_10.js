const cleanAndTransform = (str) => {
  return str.trim().toLowerCase() .replace("powerful", "amazing");
}   
console.log(cleanAndTransform("  JavaScript Is Powerful  "));   