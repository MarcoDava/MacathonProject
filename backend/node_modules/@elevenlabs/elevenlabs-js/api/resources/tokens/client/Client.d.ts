import type { BaseClientOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import { SingleUseClient } from "../resources/singleUse/client/Client";
export declare namespace TokensClient {
    type Options = BaseClientOptions;
}
export declare class TokensClient {
    protected readonly _options: NormalizedClientOptions<TokensClient.Options>;
    protected _singleUse: SingleUseClient | undefined;
    constructor(options?: TokensClient.Options);
    get singleUse(): SingleUseClient;
}
