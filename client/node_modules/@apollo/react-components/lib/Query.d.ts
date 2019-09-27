/// <reference types="react" />
import { OperationVariables } from '@apollo/react-common';
import PropTypes from 'prop-types';
import { QueryComponentOptions } from './types';
export declare function Query<TData = any, TVariables = OperationVariables>(props: QueryComponentOptions<TData, TVariables>): JSX.Element | null;
export declare namespace Query {
    const propTypes: {
        client: PropTypes.Requireable<object>;
        children: PropTypes.Validator<(...args: any[]) => any>;
        fetchPolicy: PropTypes.Requireable<string>;
        notifyOnNetworkStatusChange: PropTypes.Requireable<boolean>;
        onCompleted: PropTypes.Requireable<(...args: any[]) => any>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
        pollInterval: PropTypes.Requireable<number>;
        query: PropTypes.Validator<object>;
        variables: PropTypes.Requireable<object>;
        ssr: PropTypes.Requireable<boolean>;
        partialRefetch: PropTypes.Requireable<boolean>;
        returnPartialData: PropTypes.Requireable<boolean>;
    };
}
