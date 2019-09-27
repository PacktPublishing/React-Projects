import { parser, DocumentType } from '@apollo/react-common';
import { withQuery } from './query-hoc';
import { withMutation } from './mutation-hoc';
import { withSubscription } from './subscription-hoc';
export function graphql(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    switch (parser(document).type) {
        case DocumentType.Mutation:
            return withMutation(document, operationOptions);
        case DocumentType.Subscription:
            return withSubscription(document, operationOptions);
        case DocumentType.Query:
        default:
            return withQuery(document, operationOptions);
    }
}
//# sourceMappingURL=graphql.js.map