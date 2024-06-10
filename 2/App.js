const App = () => (
    <div>
        <h2>TWEET</h2>
        <Tweet username="mocca" name="lizt" date={new Date().toDateString()} text="hello is me " />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))