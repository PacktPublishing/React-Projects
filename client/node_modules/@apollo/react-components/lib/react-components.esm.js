export { ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext } from '@apollo/react-common';
import { __rest } from 'tslib';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

function Query(props) {
    var children = props.children, query = props.query, options = __rest(props, ["children", "query"]);
    var result = useQuery(query, options);
    return children && result ? children(result) : null;
}
(function (Query) {
    Query.propTypes = {
        client: PropTypes.object,
        children: PropTypes.func.isRequired,
        fetchPolicy: PropTypes.string,
        notifyOnNetworkStatusChange: PropTypes.bool,
        onCompleted: PropTypes.func,
        onError: PropTypes.func,
        pollInterval: PropTypes.number,
        query: PropTypes.object.isRequired,
        variables: PropTypes.object,
        ssr: PropTypes.bool,
        partialRefetch: PropTypes.bool,
        returnPartialData: PropTypes.bool
    };
})(Query || (Query = {}));

function Mutation(props) {
    var _a = useMutation(props.mutation, props), runMutation = _a[0], result = _a[1];
    return props.children ? props.children(runMutation, result) : null;
}
(function (Mutation) {
    Mutation.propTypes = {
        mutation: PropTypes.object.isRequired,
        variables: PropTypes.object,
        optimisticResponse: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        refetchQueries: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
            PropTypes.func
        ]),
        awaitRefetchQueries: PropTypes.bool,
        update: PropTypes.func,
        children: PropTypes.func.isRequired,
        onCompleted: PropTypes.func,
        onError: PropTypes.func,
        fetchPolicy: PropTypes.string
    };
})(Mutation || (Mutation = {}));

function Subscription(props) {
    var result = useSubscription(props.subscription, props);
    return props.children && result ? props.children(result) : null;
}
(function (Subscription) {
    Subscription.propTypes = {
        subscription: PropTypes.object.isRequired,
        variables: PropTypes.object,
        children: PropTypes.func,
        onSubscriptionData: PropTypes.func,
        onSubscriptionComplete: PropTypes.func,
        shouldResubscribe: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    };
})(Subscription || (Subscription = {}));

export { Mutation, Query, Subscription };
//# sourceMappingURL=react-components.esm.js.map
