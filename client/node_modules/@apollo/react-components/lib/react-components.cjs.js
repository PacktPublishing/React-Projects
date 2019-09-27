exports.__esModule = true;
exports.Mutation = Mutation;
exports.Query = Query;
exports.Subscription = Subscription;
exports.resetApolloContext = exports.getApolloContext = exports.ApolloProvider = exports.ApolloConsumer = void 0;

var _reactCommon = require("@apollo/react-common");

exports.ApolloConsumer = _reactCommon.ApolloConsumer;
exports.ApolloProvider = _reactCommon.ApolloProvider;
exports.getApolloContext = _reactCommon.getApolloContext;
exports.resetApolloContext = _reactCommon.resetApolloContext;

var _tslib = require("tslib");

var _reactHooks = require("@apollo/react-hooks");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Query(props) {
  var children = props.children,
      query = props.query,
      options = (0, _tslib.__rest)(props, ["children", "query"]);
  var result = (0, _reactHooks.useQuery)(query, options);
  return children && result ? children(result) : null;
}

(function (Query) {
  Query.propTypes = {
    client: _propTypes.default.object,
    children: _propTypes.default.func.isRequired,
    fetchPolicy: _propTypes.default.string,
    notifyOnNetworkStatusChange: _propTypes.default.bool,
    onCompleted: _propTypes.default.func,
    onError: _propTypes.default.func,
    pollInterval: _propTypes.default.number,
    query: _propTypes.default.object.isRequired,
    variables: _propTypes.default.object,
    ssr: _propTypes.default.bool,
    partialRefetch: _propTypes.default.bool,
    returnPartialData: _propTypes.default.bool
  };
})(Query || (exports.Query = Query = {}));

function Mutation(props) {
  var _a = (0, _reactHooks.useMutation)(props.mutation, props),
      runMutation = _a[0],
      result = _a[1];

  return props.children ? props.children(runMutation, result) : null;
}

(function (Mutation) {
  Mutation.propTypes = {
    mutation: _propTypes.default.object.isRequired,
    variables: _propTypes.default.object,
    optimisticResponse: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
    refetchQueries: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])), _propTypes.default.func]),
    awaitRefetchQueries: _propTypes.default.bool,
    update: _propTypes.default.func,
    children: _propTypes.default.func.isRequired,
    onCompleted: _propTypes.default.func,
    onError: _propTypes.default.func,
    fetchPolicy: _propTypes.default.string
  };
})(Mutation || (exports.Mutation = Mutation = {}));

function Subscription(props) {
  var result = (0, _reactHooks.useSubscription)(props.subscription, props);
  return props.children && result ? props.children(result) : null;
}

(function (Subscription) {
  Subscription.propTypes = {
    subscription: _propTypes.default.object.isRequired,
    variables: _propTypes.default.object,
    children: _propTypes.default.func,
    onSubscriptionData: _propTypes.default.func,
    onSubscriptionComplete: _propTypes.default.func,
    shouldResubscribe: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool])
  };
})(Subscription || (exports.Subscription = Subscription = {}));
