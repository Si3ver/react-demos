import React from "react";
import { render } from "react-dom";
import Hello from "./Hello.jsx";
import ChatApp from "./c01/ChatApp.jsx";
import CommentBox from "./c02/CommentBox.jsx";
import { TabSelectorSample } from "./c02/TabSelector.jsx";
import { StatefulTabSelectSample } from "./c02/StatefulTabSelector.jsx";
import { NameForm } from './c02/NameForm.jsx';
import Clock from "./c03/Clock.jsx";
import SnapshotSample from "./c04/SnapshotSample.jsx";
import DomDiff from "./c05/DomDiff.jsx";
import { AdvancedTabSelectorSample } from "./c06/AdvancedTabSelector.jsx";
import LocaleSample from "./c07/LocaleSample.jsx";
import PureRedux from "./c11/PureRedux.jsx";
import Counter from "./c12/Counter.jsx";
import AsyncAction from "./c13/AsyncAction.jsx";
import ReduxMiddleware from "./c13/ReduxMiddleware.jsx";
import OrgActions from "./c14/OrgActions.jsx";
import RouterSample from "./c16/RouterSample.jsx";
import RouterParams from "./c17/RouterParams.jsx";
import NestedRoute from "./c17/NestedRoute.jsx";
import FormSubmit from "./c29/FormSubmit.jsx";
import FormSubmitAntd from "./c29/FormSubmitAntd.jsx";
import DynamicForm from "./c30/DynamicForm.jsx";
import ListSample from "./c31/App.jsx";
import MultipleRequest from "./c33/MultipleRequest.jsx";
import WizardSample from "./c35/App.jsx";
import Layout1 from "./c36/Layout1.jsx";
import Layout2 from "./c36/Layout2.jsx";
import LayoutResize from "./c36/LayoutResize.jsx";
import PortalSample from "./c37/PortalSample.jsx";
import AntdDialog from "./c37/AntdDialog.jsx";
import D3Sample from "./c38/D3Sample.jsx";
import DndSample from "./c40/DndSample.jsx";
import ReselectSample from "./c43/ReselectSample.jsx";
import Suspense from "./c44/Suspense.jsx";
import "antd/dist/antd.css";

import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px",
};

const routeMap = {
  "01-chat": ChatApp,
  "02-comment-box": CommentBox,
  "02-tab-selector": TabSelectorSample,
  "02-stateful-tab-selector": StatefulTabSelectSample,
  "02-NameForm": NameForm,
  "03-clock": Clock,
  "04-snapshot-sample": SnapshotSample,
  "05-dom-diff": DomDiff,
  "06-adv-tab-selector": AdvancedTabSelectorSample,
  "07-locale-sample": LocaleSample,
  "11-pure-redux": PureRedux,
  "12-counter": Counter,
  "13-async-action": AsyncAction,
  "13-redux-middleware": ReduxMiddleware,
  "14-org-actions": OrgActions,
  "16-router-sample": RouterSample,
  "17-router-params": RouterParams,
  "17-nested-route": NestedRoute,
  "29-form-submit": FormSubmit,
  "29-form-submit-antd": FormSubmitAntd,
  "30-dynamic-form": DynamicForm,
  "31-list-page": ListSample,
  "33-MultipleRequest": MultipleRequest,
  "35-wizard-sample": WizardSample,
  "36-layout1": Layout1,
  "36-layout2": Layout2,
  "36-layout-resize": LayoutResize,
  "37-portal-sample": PortalSample,
  "37-antd-dialog": AntdDialog,
  "38-d3-sample": D3Sample,
  "40-dnd-sample": DndSample,
  "43-reselect-sample": ReselectSample,
  "44-suspense": Suspense,
};

class App extends React.PureComponent {
  handleLinkClick = key => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");

    let CurrentPage = routeMap[currentPage] || Hello;
    if (currentPage.match(/\/user\/\w+|\/list-page/)) {
      CurrentPage = ListSample;
    }
    if (currentPage.match(/\/wizard\/step\/\w+/)) {
      CurrentPage = WizardSample;
    }
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map(key => (
            <li
              key={key}
              className={key === currentPage ? "is-active" : ""}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
