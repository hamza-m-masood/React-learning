## Type this out on the Chrome console window

The data is still persisted even after page reload
```javascript
// save item
localStorage.setItem('name', 'Hamza Masood')
// get item
localStorage.getItem('name')
// remove item
localStorage.removeItem('name')
//clearing storage
localStorage.clear()
```

Local storage can only store strings. If you would like to store objects in local storage then you must use json.
Notice the upper and lower case json
```javascript
//takes an object and gives its string representation and stores it in a var
cosnt json = JSON.stringify({age: 26})
//parsing json var to a real object
JSON.parse(json)
```

