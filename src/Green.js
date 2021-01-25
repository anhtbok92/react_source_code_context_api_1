import AppContext from "./AppContext";

const Green = () => (
    <div className="green">
        <p>This is green component</p>
        <AppContext.Consumer>
            {(context) => context.number}
        </AppContext.Consumer>
    </div>
)

export default Green