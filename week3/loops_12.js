const buildGroceryList = () => {
    while (true) {
      grocery = String(
        window.prompt("Input grocery items (type 'done' to stop)")
      );
      if (grocery == "done") {
        break;
      }
      console.log(grocery);
    }
  };
  buildGroceryList();

  /* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */