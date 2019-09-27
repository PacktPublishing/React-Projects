(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@apollo/react-common", "tslib", "react", "hoist-non-react-statics", "@apollo/react-components", "ts-invariant"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@apollo/react-common"), require("tslib"), require("react"), require("hoist-non-react-statics"), require("@apollo/react-components"), require("ts-invariant"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactCommon, global.tslib, global.react, global.hoistNonReactStatics, global.reactComponents, global.tsInvariant);
    global.unknown = mod.exports;
  }
})(this, function (_exports, _reactCommon, _tslib, _react, _hoistNonReactStatics, _reactComponents, _tsInvariant) {

  _exports.__esModule = true;
  _exports.graphql = graphql;
  _exports.withApollo = withApollo;
  _exports.withMutation = withMutation;
  _exports.withQuery = withQuery;
  _exports.withSubscription = withSubscription;
  _exports.resetApolloContext = _exports.getApolloContext = _exports.ApolloProvider = void 0;
  _exports.ApolloConsumer = _reactCommon.ApolloConsumer;
  _exports.ApolloProvider = _reactCommon.ApolloProvider;
  _exports.getApolloContext = _reactCommon.getApolloContext;
  _exports.resetApolloContext = _reactCommon.resetApolloContext;
  _react = _interopRequireDefault(_react);
  _hoistNonReactStatics = _interopRequireDefault(_hoistNonReactStatics);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var defaultMapPropsToOptions = function () {
    return {};
  };

  var defaultMapPropsToSkip = function () {
    return false;
  };

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  function calculateVariablesFromProps(operation, props) {
    var variables = {};

    for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
      var _b = _a[_i],
          variable = _b.variable,
          type = _b.type;
      if (!variable.name || !variable.name.value) continue;
      var variableName = variable.name.value;
      var variableProp = props[variableName];

      if (typeof variableProp !== 'undefined') {
        variables[variableName] = variableProp;
        continue;
      }

      if (type.kind !== 'NonNullType') {
        variables[variableName] = undefined;
      }
    }

    return variables;
  }

  var GraphQLBase = function (_super) {
    (0, _tslib.__extends)(GraphQLBase, _super);

    function GraphQLBase(props) {
      var _this = _super.call(this, props) || this;

      _this.withRef = false;
      _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
      return _this;
    }

    GraphQLBase.prototype.getWrappedInstance = function () {
      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(this.withRef, 2) : (0, _tsInvariant.invariant)(this.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
      return this.wrappedInstance;
    };

    GraphQLBase.prototype.setWrappedInstance = function (ref) {
      this.wrappedInstance = ref;
    };

    return GraphQLBase;
  }(_react.default.Component);

  function withQuery(document, operationOptions) {
    if (operationOptions === void 0) {
      operationOptions = {};
    }

    var operation = (0, _reactCommon.parser)(document);
    var _a = operationOptions.options,
        options = _a === void 0 ? defaultMapPropsToOptions : _a,
        _b = operationOptions.skip,
        skip = _b === void 0 ? defaultMapPropsToSkip : _b,
        _c = operationOptions.alias,
        alias = _c === void 0 ? 'Apollo' : _c;
    var mapPropsToOptions = options;

    if (typeof mapPropsToOptions !== 'function') {
      mapPropsToOptions = function () {
        return options;
      };
    }

    var mapPropsToSkip = skip;

    if (typeof mapPropsToSkip !== 'function') {
      mapPropsToSkip = function () {
        return skip;
      };
    }

    var lastResultProps;
    return function (WrappedComponent) {
      var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";

      var GraphQL = function (_super) {
        (0, _tslib.__extends)(GraphQL, _super);

        function GraphQL() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        GraphQL.prototype.render = function () {
          var _this = this;

          var props = this.props;
          var shouldSkip = mapPropsToSkip(props);
          var opts = shouldSkip ? Object.create(null) : (0, _tslib.__assign)({}, mapPropsToOptions(props));

          if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
            opts.variables = calculateVariablesFromProps(operation, props);
          }

          return _react.default.createElement(_reactComponents.Query, (0, _tslib.__assign)({}, opts, {
            displayName: graphQLDisplayName,
            skip: shouldSkip,
            query: document
          }), function (_a) {
            var _b, _c;

            var _ = _a.client,
                data = _a.data,
                r = (0, _tslib.__rest)(_a, ["client", "data"]);

            if (operationOptions.withRef) {
              _this.withRef = true;
              props = Object.assign({}, props, {
                ref: _this.setWrappedInstance
              });
            }

            if (shouldSkip) {
              return _react.default.createElement(WrappedComponent, (0, _tslib.__assign)({}, props, {}));
            }

            var result = Object.assign(r, data || {});
            var name = operationOptions.name || 'data';
            var childProps = (_b = {}, _b[name] = result, _b);

            if (operationOptions.props) {
              var newResult = (_c = {}, _c[name] = result, _c.ownProps = props, _c);
              lastResultProps = operationOptions.props(newResult, lastResultProps);
              childProps = lastResultProps;
            }

            return _react.default.createElement(WrappedComponent, (0, _tslib.__assign)({}, props, childProps));
          });
        };

        GraphQL.displayName = graphQLDisplayName;
        GraphQL.WrappedComponent = WrappedComponent;
        return GraphQL;
      }(GraphQLBase);

      return (0, _hoistNonReactStatics.default)(GraphQL, WrappedComponent, {});
    };
  }

  function withMutation(document, operationOptions) {
    if (operationOptions === void 0) {
      operationOptions = {};
    }

    var operation = (0, _reactCommon.parser)(document);
    var _a = operationOptions.options,
        options = _a === void 0 ? defaultMapPropsToOptions : _a,
        _b = operationOptions.alias,
        alias = _b === void 0 ? 'Apollo' : _b;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function') mapPropsToOptions = function () {
      return options;
    };
    return function (WrappedComponent) {
      var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";

      var GraphQL = function (_super) {
        (0, _tslib.__extends)(GraphQL, _super);

        function GraphQL() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        GraphQL.prototype.render = function () {
          var props = this.props;
          var opts = mapPropsToOptions(props);

          if (operationOptions.withRef) {
            this.withRef = true;
            props = Object.assign({}, props, {
              ref: this.setWrappedInstance
            });
          }

          if (!opts.variables && operation.variables.length > 0) {
            opts.variables = calculateVariablesFromProps(operation, props);
          }

          return _react.default.createElement(_reactComponents.Mutation, (0, _tslib.__assign)({
            ignoreResults: true
          }, opts, {
            mutation: document
          }), function (mutate, _a) {
            var _b, _c;

            var data = _a.data,
                r = (0, _tslib.__rest)(_a, ["data"]);
            var result = Object.assign(r, data || {});
            var name = operationOptions.name || 'mutate';
            var resultName = operationOptions.name ? name + "Result" : 'result';
            var childProps = (_b = {}, _b[name] = mutate, _b[resultName] = result, _b);

            if (operationOptions.props) {
              var newResult = (_c = {}, _c[name] = mutate, _c[resultName] = result, _c.ownProps = props, _c);
              childProps = operationOptions.props(newResult);
            }

            return _react.default.createElement(WrappedComponent, (0, _tslib.__assign)({}, props, childProps));
          });
        };

        GraphQL.displayName = graphQLDisplayName;
        GraphQL.WrappedComponent = WrappedComponent;
        return GraphQL;
      }(GraphQLBase);

      return (0, _hoistNonReactStatics.default)(GraphQL, WrappedComponent, {});
    };
  }

  function withSubscription(document, operationOptions) {
    if (operationOptions === void 0) {
      operationOptions = {};
    }

    var operation = (0, _reactCommon.parser)(document);
    var _a = operationOptions.options,
        options = _a === void 0 ? defaultMapPropsToOptions : _a,
        _b = operationOptions.skip,
        skip = _b === void 0 ? defaultMapPropsToSkip : _b,
        _c = operationOptions.alias,
        alias = _c === void 0 ? 'Apollo' : _c,
        shouldResubscribe = operationOptions.shouldResubscribe;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function') mapPropsToOptions = function () {
      return options;
    };
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function') mapPropsToSkip = function () {
      return skip;
    };
    var lastResultProps;
    return function (WrappedComponent) {
      var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";

      var GraphQL = function (_super) {
        (0, _tslib.__extends)(GraphQL, _super);

        function GraphQL(props) {
          var _this = _super.call(this, props) || this;

          _this.state = {
            resubscribe: false
          };
          return _this;
        }

        GraphQL.prototype.componentDidUpate = function (prevProps) {
          if (shouldResubscribe) {
            this.setState({
              resubscribe: shouldResubscribe(prevProps, this.props)
            });
          }
        };

        GraphQL.prototype.render = function () {
          var _this = this;

          var props = this.props;
          var shouldSkip = mapPropsToSkip(props);
          var opts = shouldSkip ? Object.create(null) : mapPropsToOptions(props);

          if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
            opts.variables = calculateVariablesFromProps(operation, props);
          }

          return _react.default.createElement(_reactComponents.Subscription, (0, _tslib.__assign)({}, opts, {
            displayName: graphQLDisplayName,
            skip: shouldSkip,
            subscription: document,
            shouldResubscribe: this.state.resubscribe
          }), function (_a) {
            var _b, _c;

            var data = _a.data,
                r = (0, _tslib.__rest)(_a, ["data"]);

            if (operationOptions.withRef) {
              _this.withRef = true;
              props = Object.assign({}, props, {
                ref: _this.setWrappedInstance
              });
            }

            if (shouldSkip) {
              return _react.default.createElement(WrappedComponent, (0, _tslib.__assign)({}, props, {}));
            }

            var result = Object.assign(r, data || {});
            var name = operationOptions.name || 'data';
            var childProps = (_b = {}, _b[name] = result, _b);

            if (operationOptions.props) {
              var newResult = (_c = {}, _c[name] = result, _c.ownProps = props, _c);
              lastResultProps = operationOptions.props(newResult, lastResultProps);
              childProps = lastResultProps;
            }

            return _react.default.createElement(WrappedComponent, (0, _tslib.__assign)({}, props, childProps));
          });
        };

        GraphQL.displayName = graphQLDisplayName;
        GraphQL.WrappedComponent = WrappedComponent;
        return GraphQL;
      }(GraphQLBase);

      return (0, _hoistNonReactStatics.default)(GraphQL, WrappedComponent, {});
    };
  }

  function graphql(document, operationOptions) {
    if (operationOptions === void 0) {
      operationOptions = {};
    }

    switch ((0, _reactCommon.parser)(document).type) {
      case _reactCommon.DocumentType.Mutation:
        return withMutation(document, operationOptions);

      case _reactCommon.DocumentType.Subscription:
        return withSubscription(document, operationOptions);

      case _reactCommon.DocumentType.Query:
      default:
        return withQuery(document, operationOptions);
    }
  }

  function getDisplayName$1(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  function withApollo(WrappedComponent, operationOptions) {
    if (operationOptions === void 0) {
      operationOptions = {};
    }

    var withDisplayName = "withApollo(" + getDisplayName$1(WrappedComponent) + ")";

    var WithApollo = function (_super) {
      (0, _tslib.__extends)(WithApollo, _super);

      function WithApollo(props) {
        var _this = _super.call(this, props) || this;

        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
        return _this;
      }

      WithApollo.prototype.getWrappedInstance = function () {
        process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(operationOptions.withRef, 1) : (0, _tsInvariant.invariant)(operationOptions.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
        return this.wrappedInstance;
      };

      WithApollo.prototype.setWrappedInstance = function (ref) {
        this.wrappedInstance = ref;
      };

      WithApollo.prototype.render = function () {
        var _this = this;

        return _react.default.createElement(_reactCommon.ApolloConsumer, null, function (client) {
          var props = Object.assign({}, _this.props, {
            client: client,
            ref: operationOptions.withRef ? _this.setWrappedInstance : undefined
          });
          return _react.default.createElement(WrappedComponent, (0, _tslib.__assign)({}, props));
        });
      };

      WithApollo.displayName = withDisplayName;
      WithApollo.WrappedComponent = WrappedComponent;
      return WithApollo;
    }(_react.default.Component);

    return (0, _hoistNonReactStatics.default)(WithApollo, WrappedComponent, {});
  } 

});
