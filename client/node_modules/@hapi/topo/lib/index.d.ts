export interface Options {

    /**
    The sorting group the added items belong to
    */
    group?: string

    /**
    The group or groups the added items must come before
    */
    before?: string | Array<string>

    /**
    The group or groups the added items must come after
    */
    after?: string | Array<string>

    /**
    A number used to sort items with equal before/after requirements
    */
    sort?: number
}


export class Topo<T> {

    /**
    An array of the topologically sorted nodes. This list is renewed upon each call to topo.add()
    */
    nodes: Array<T>

    /**
    Adds a node or list of nodes to be added and topologically sorted

    @param nodes - A mixed value or array of mixed values to be added as nodes to the topologically sorted list
    @param options - Optional sorting information about the nodes
    
    @returns Returns an array of the topologically sorted nodes
    */
    add(nodes: T | Array<T>, options?: Options): Array<T>

    /**
    Merges another Topo object into the current object

    @param others - The other object or array of objects to be merged into the current one

    @returns Returns an array of the topologically sorted nodes
    */
    merge(others: Topo<T> | Array<Topo<T>>): Array<T>
}
