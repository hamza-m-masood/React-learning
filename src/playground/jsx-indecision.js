console.log('App.js is running.')

//JSX -javascript xml

const app = {
    title: "indecision-app",
    subtitle: "Put your life in the hands of a computer",
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = " "
        renderTemplate()
    }
}

const onRemoveAll = () => {
    app.options = []
    renderTemplate()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const options = app.options[randomNum]
    alert(options)
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
            <button disabled = {app.options.length ===0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app');

renderTemplate()

