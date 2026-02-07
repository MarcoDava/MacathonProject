import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../../../BaseClient";
import * as core from "../../../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../../../index";
export declare namespace CaptchaClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class CaptchaClient {
    protected readonly _options: NormalizedClientOptions<CaptchaClient.Options>;
    constructor(options?: CaptchaClient.Options);
    /**
     * Get captcha for PVC voice verification.
     *
     * @param {string} voice_id - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {CaptchaClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.voices.pvc.verification.captcha.get("21m00Tcm4TlvDq8ikWAM")
     */
    get(voice_id: string, requestOptions?: CaptchaClient.RequestOptions): core.HttpResponsePromise<void>;
    private __get;
    /**
     * Submit captcha verification for PVC voice.
     *
     * @param {string} voice_id
     * @param {ElevenLabs.voices.pvc.verification.BodyVerifyPvcVoiceCaptchaV1VoicesPvcVoiceIdCaptchaPost} request
     * @param {CaptchaClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.voices.pvc.verification.captcha.verify("21m00Tcm4TlvDq8ikWAM", {
     *         recording: fs.createReadStream("/path/to/your/file")
     *     })
     */
    verify(voice_id: string, request: ElevenLabs.voices.pvc.verification.BodyVerifyPvcVoiceCaptchaV1VoicesPvcVoiceIdCaptchaPost, requestOptions?: CaptchaClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.VerifyPvcVoiceCaptchaResponseModel>;
    private __verify;
}
