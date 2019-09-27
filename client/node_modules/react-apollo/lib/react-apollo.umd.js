(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@apollo/react-common", "@apollo/react-components", "@apollo/react-hoc", "@apollo/react-hooks", "@apollo/react-ssr"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@apollo/react-common"), require("@apollo/react-components"), require("@apollo/react-hoc"), require("@apollo/react-hooks"), require("@apollo/react-ssr"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactCommon, global.reactComponents, global.reactHoc, global.reactHooks, global.reactSsr);
    global.unknown = mod.exports;
  }
})(this, function (_exports, _reactCommon, _reactComponents, _reactHoc, _reactHooks, _reactSsr) {

  _exports.__esModule = true;
  _exports.renderToStringWithData = _exports.getMarkupFromTree = _exports.getDataFromTree = _exports.useSubscription = _exports.useQuery = _exports.useMutation = _exports.useLazyQuery = _exports.useApolloClient = _exports.withSubscription = _exports.withQuery = _exports.withMutation = _exports.withApollo = _exports.graphql = _exports.Subscription = _exports.Query = _exports.Mutation = _exports.resetApolloContext = _exports.getApolloContext = _exports.ApolloProvider = _exports.ApolloConsumer = void 0;
  _exports.ApolloConsumer = _reactCommon.ApolloConsumer;
  _exports.ApolloProvider = _reactCommon.ApolloProvider;
  _exports.getApolloContext = _reactCommon.getApolloContext;
  _exports.resetApolloContext = _reactCommon.resetApolloContext;
  _exports.Mutation = _reactComponents.Mutation;
  _exports.Query = _reactComponents.Query;
  _exports.Subscription = _reactComponents.Subscription;
  _exports.graphql = _reactHoc.graphql;
  _exports.withApollo = _reactHoc.withApollo;
  _exports.withMutation = _reactHoc.withMutation;
  _exports.withQuery = _reactHoc.withQuery;
  _exports.withSubscription = _reactHoc.withSubscription;
  _exports.useApolloClient = _reactHooks.useApolloClient;
  _exports.useLazyQuery = _reactHooks.useLazyQuery;
  _exports.useMutation = _reactHooks.useMutation;
  _exports.useQuery = _reactHooks.useQuery;
  _exports.useSubscription = _reactHooks.useSubscription;
  _exports.getDataFromTree = _reactSsr.getDataFromTree;
  _exports.getMarkupFromTree = _reactSsr.getMarkupFromTree;
  _exports.renderToStringWithData = _reactSsr.renderToStringWithData;
});
