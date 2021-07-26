import React from "react";
import { connect } from "react-redux";
import { REQUEST_EMOJIS } from "../store/action/index";

const App = (props) => {
  const { emojis } = props;
  return (
    <div>
      <h2>emojis</h2>
      <button onClick={props.requestEmojis}>获取表情图</button>
      {Object.entries(emojis)
        .slice(0, 50)
        .map(([key, value]) => (
          <img src={value} key={key} alt={key} title={key} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  emojis: state,
});

const mapDispatchToProps = (dispatch) => ({
  requestEmojis: () => dispatch(REQUEST_EMOJIS()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
