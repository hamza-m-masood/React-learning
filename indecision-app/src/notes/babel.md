## babel-plugin-transform-class-properties

```javascript
class OldSyntax {
    constructor() {
        this.name = 'Mike'
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax)

//----

class NewSyntax {
    name = 'jen'
    getGreeting = () => {
        return `Hi. My name is ${this.name}`
    }
}

const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())
```