import { connect } from "react-redux";
import ValidityCheckForm from "./ValidityCheckForm";
import { postValidityCheckStart } from "../../lib/reducers/validityCheck";

const mapStateToProps = (state) => ({
  validityCheck: state.validityCheck,
});

const mapDispatchToProps = (dispatch) => ({
  submitValidityCheck: ({ authorizationId, birthdate }) => {
    dispatch(postValidityCheckStart(authorizationId, birthdate));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ValidityCheckForm);
