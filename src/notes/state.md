State is an object with a set of key value pairs and that object allows us to render it to the screen
State object can be changed by an event. For example, a click of a button.

## How to implement component state in React
1. Setup default state object
2. component rendered with default state values
3. change state based on event
4. Component re-rendered using new state values
5. start again at 3

#React states are asynchronous
meaning: if this.setState is running and another this.setState runs then the one which runs the fastes will get printed onto the screen (check counter example in playground)

If you dont want this problem then you use (prevState) in parameters to simulate synchronicity