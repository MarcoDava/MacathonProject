import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
import { SamplesClient } from "../resources/samples/client/Client";
import { VerificationClient } from "../resources/verification/client/Client";
export declare namespace PvcClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class PvcClient {
    protected readonly _options: NormalizedClientOptions<PvcClient.Options>;
    protected _samples: SamplesClient | undefined;
    protected _verification: VerificationClient | undefined;
    constructor(options?: PvcClient.Options);
    get samples(): SamplesClient;
    get verification(): VerificationClient;
    /**
     * Creates a new PVC voice with metadata but no samples
     *
     * @param {ElevenLabs.voices.CreatePvcVoiceRequest} request
     * @param {PvcClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.voices.pvc.create({
     *         name: "John Smith",
     *         language: "en"
     *     })
     */
    create(request: ElevenLabs.voices.CreatePvcVoiceRequest, requestOptions?: PvcClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AddVoiceResponseModel>;
    private __create;
    /**
     * Edit PVC voice metadata
     *
     * @param {string} voice_id - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {ElevenLabs.voices.BodyEditPvcVoiceV1VoicesPvcVoiceIdPost} request
     * @param {PvcClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.voices.pvc.update("21m00Tcm4TlvDq8ikWAM")
     */
    update(voice_id: string, request?: ElevenLabs.voices.BodyEditPvcVoiceV1VoicesPvcVoiceIdPost, requestOptions?: PvcClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AddVoiceResponseModel>;
    private __update;
    /**
     * Start PVC training process for a voice.
     *
     * @param {string} voice_id - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {ElevenLabs.voices.BodyRunPvcTrainingV1VoicesPvcVoiceIdTrainPost} request
     * @param {PvcClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.voices.pvc.train("21m00Tcm4TlvDq8ikWAM")
     */
    train(voice_id: string, request?: ElevenLabs.voices.BodyRunPvcTrainingV1VoicesPvcVoiceIdTrainPost, requestOptions?: PvcClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.StartPvcVoiceTrainingResponseModel>;
    private __train;
}
