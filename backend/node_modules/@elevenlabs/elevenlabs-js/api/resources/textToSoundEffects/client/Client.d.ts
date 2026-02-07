import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace TextToSoundEffectsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TextToSoundEffectsClient {
    protected readonly _options: NormalizedClientOptions<TextToSoundEffectsClient.Options>;
    constructor(options?: TextToSoundEffectsClient.Options);
    /**
     * Turn text into sound effects for your videos, voice-overs or video games using the most advanced sound effects models in the world.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    convert(request: ElevenLabs.CreateSoundEffectRequest, requestOptions?: TextToSoundEffectsClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __convert;
}
