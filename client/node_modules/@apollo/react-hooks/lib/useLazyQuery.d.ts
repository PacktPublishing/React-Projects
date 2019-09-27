import { OperationVariables } from '@apollo/react-common';
import { DocumentNode } from 'graphql';
import { LazyQueryHookOptions } from './types';
export declare function useLazyQuery<TData = any, TVariables = OperationVariables>(query: DocumentNode, options?: LazyQueryHookOptions<TData, TVariables>): [(options?: import("./types").QueryLazyOptions<TVariables> | undefined) => void, import("@apollo/react-common").QueryResult<TData, TVariables>];
