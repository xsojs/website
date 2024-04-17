import com from "@xso/com";

import Aside from "./base/Aside";
import Header from "./base/Header";
import Footer from "./base/Footer";
import Main from "./base/Main";

function App() {
    this.view(() => [
        { [Aside]: {} },
        { [Header]: {} },
        { [Main]: {} },
        { [Footer]: {} }
    ]);
}

export default com(App);