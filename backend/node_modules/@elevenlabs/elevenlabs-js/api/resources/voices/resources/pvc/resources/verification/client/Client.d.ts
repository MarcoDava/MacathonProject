import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
import { CaptchaClient } from "../resources/captcha/client/Client";
export declare namespace VerificationClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class VerificationClient {
    protected readonly _options: NormalizedClientOptions<VerificationClient.Options>;
    protected _captcha: CaptchaClient | undefined;
    constructor(options?: VerificationClient.Options);
    get captcha(): CaptchaClient;
    /**
     * Request manual verification for a PVC voice.
     *
     * @param {string} voice_id
     * @param {ElevenLabs.voices.pvc.BodyRequestManualVerificationV1VoicesPvcVoiceIdVerificationPost} request
     * @param {VerificationClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.voices.pvc.verification.request("21m00Tcm4TlvDq8ikWAM", {
     *         files: [fs.createReadStream("/path/to/your/file")]
     *     })
     */
    request(voice_id: string, request: ElevenLabs.voices.pvc.BodyRequestManualVerificationV1VoicesPvcVoiceIdVerificationPost, requestOptions?: VerificationClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.RequestPvcManualVerificationResponseModel>;
    private __request;
}
