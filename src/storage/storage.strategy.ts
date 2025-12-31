import { MemorizationProgress } from "a/types/types";

export interface StorageStrategy {
    load(): MemorizationProgress[]
    save(data: MemorizationProgress[]): void 
}