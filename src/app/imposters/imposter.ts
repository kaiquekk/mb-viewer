import { IStub } from './stub';

export interface IImposter {
    protocol: string | string[];
    port: number;
    name?: string;
    numberOfRequests?: number;
    recordRequests?: boolean;
    stubs: IStub[];
    requests?: Object[];
    _links?: Object;
}