/// <reference types="react" />
import { OperationVariables } from '@apollo/react-common';
import PropTypes from 'prop-types';
import { SubscriptionComponentOptions } from './types';
export declare function Subscription<TData = any, TVariables = OperationVariables>(props: SubscriptionComponentOptions<TData, TVariables>): JSX.Element | null;
export declare namespace Subscription {
    const propTypes: {
        subscription: PropTypes.Validator<object>;
        variables: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<(...args: any[]) => any>;
        onSubscriptionData: PropTypes.Requireable<(...args: any[]) => any>;
        onSubscriptionComplete: PropTypes.Requireable<(...args: any[]) => any>;
        shouldResubscribe: PropTypes.Requireable<boolean | ((...args: any[]) => any)>;
    };
}
