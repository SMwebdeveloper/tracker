import { StorageStrategy } from "a/storage/storage.strategy";

export class Context {
    constructor(public storage: StorageStrategy){}
}