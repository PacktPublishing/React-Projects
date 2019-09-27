import { OperationVariables, QueryResult } from '@apollo/react-common';
import { DocumentNode } from 'graphql';
import { QueryHookOptions } from '../types';
export declare function useBaseQuery<TData = any, TVariables = OperationVariables>(query: DocumentNode, options?: QueryHookOptions<TData, TVariables>, lazy?: boolean): QueryResult<TData, TVariables> | [(options?: import("../types").QueryLazyOptions<TVariables> | undefined) => void, QueryResult<TData, TVariables>];
