type XYPosition = {
    x: number;
    y: number;
}

export type BaseFlowNode<T> = {
    id: number;
    position: XYPosition;
    type?: string;
    data?: T;
    isConnectable?: boolean;
}

export enum SelectorMode {
    Move = "move",
    Connect = "connect",
    Describe = "describe"
}

