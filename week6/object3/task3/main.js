/* Task 3
  Create an object `theme` with properties `name` (light or dark) and `isActive`.
  Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
  */
  
  // Your code here
  
  const theme = {
    Colour: 'light',
    isOn: true
}

const btn = document.getElementById('btn')

const themeActivate = () => {
    if (theme.Colour == 'light') {
        theme.Colour = 'dark'
        theme.isOn = false
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
    else {
        theme.Colour = 'light'
        theme.isOn = true
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
}
btn.addEventListener('click', themeActivate)