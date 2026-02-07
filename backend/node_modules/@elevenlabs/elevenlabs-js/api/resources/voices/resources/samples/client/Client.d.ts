import type { BaseClientOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import { AudioClient } from "../resources/audio/client/Client";
export declare namespace SamplesClient {
    type Options = BaseClientOptions;
}
export declare class SamplesClient {
    protected readonly _options: NormalizedClientOptions<SamplesClient.Options>;
    protected _audio: AudioClient | undefined;
    constructor(options?: SamplesClient.Options);
    get audio(): AudioClient;
}
