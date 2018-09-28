import ReactDOM from "react-dom";

const deferredUpdates = ReactDOM.unstable_deferredUpdates || (fn => fn());

export default deferredUpdates;
