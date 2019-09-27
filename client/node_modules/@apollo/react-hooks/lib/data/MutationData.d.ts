import { ApolloContextValue, OperationVariables, ExecutionResult, MutationFunctionOptions, MutationResult } from '@apollo/react-common';
import { MutationOptions } from '../types';
import { OperationData } from './OperationData';
export declare class MutationData<TData = any, TVariables = OperationVariables> extends OperationData {
    private mostRecentMutationId;
    private result;
    private previousResult?;
    private setResult;
    constructor({ options, context, result, setResult }: {
        options: MutationOptions<TData, TVariables>;
        context: ApolloContextValue;
        result: MutationResult<TData>;
        setResult: (result: MutationResult<TData>) => any;
    });
    execute(result: MutationResult<TData>): [(options?: MutationFunctionOptions<TData, TVariables> | undefined) => Promise<ExecutionResult<TData>>, MutationResult<TData>];
    afterExecute(): () => void;
    cleanup(): void;
    private runMutation;
    private mutate;
    private onMutationStart;
    private onMutationCompleted;
    private onMutationError;
    private generateNewMutationId;
    private isMostRecentMutation;
    private updateResult;
}
