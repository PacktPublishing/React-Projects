(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@apollo/react-common", "tslib", "@apollo/react-hooks", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@apollo/react-common"), require("tslib"), require("@apollo/react-hooks"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactCommon, global.tslib, global.reactHooks, global.propTypes);
    global.unknown = mod.exports;
  }
})(this, function (_exports, _reactCommon, _tslib, _reactHooks, _propTypes) {

  _exports.__esModule = true;
  _exports.Mutation = Mutation;
  _exports.Query = Query;
  _exports.Subscription = Subscription;
  _exports.resetApolloContext = _exports.getApolloContext = _exports.ApolloProvider = _exports.ApolloConsumer = void 0;
  _exports.ApolloConsumer = _reactCommon.ApolloConsumer;
  _exports.ApolloProvider = _reactCommon.ApolloProvider;
  _exports.getApolloContext = _reactCommon.getApolloContext;
  _exports.resetApolloContext = _reactCommon.resetApolloContext;
  _propTypes = _interopRequireDefault(_propTypes);

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
  })(Query || (_exports.Query = Query = {}));

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
  })(Mutation || (_exports.Mutation = Mutation = {}));

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
  })(Subscription || (_exports.Subscription = Subscription = {})); 

});
