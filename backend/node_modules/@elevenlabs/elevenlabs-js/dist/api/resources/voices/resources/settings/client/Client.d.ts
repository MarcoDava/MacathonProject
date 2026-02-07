import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace SettingsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SettingsClient {
    protected readonly _options: NormalizedClientOptions<SettingsClient.Options>;
    constructor(options?: SettingsClient.Options);
    /**
     * Gets the default settings for voices. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.
     *
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.voices.settings.getDefault()
     */
    getDefault(requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.VoiceSettings>;
    private __getDefault;
    /**
     * Returns the settings for a specific voice. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.
     *
     * @param {string} voice_id - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.voices.settings.get("21m00Tcm4TlvDq8ikWAM")
     */
    get(voice_id: string, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.VoiceSettings>;
    private __get;
    /**
     * Edit your settings for a specific voice. "similarity_boost" corresponds to "Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.
     *
     * @param {string} voice_id - ID of the voice to be used. You can use the [Get voices](/docs/api-reference/voices/search) endpoint list all the available voices.
     * @param {ElevenLabs.VoiceSettings} request
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.voices.settings.update("21m00Tcm4TlvDq8ikWAM", {
     *         stability: 1,
     *         useSpeakerBoost: true,
     *         similarityBoost: 1,
     *         style: 0,
     *         speed: 1
     *     })
     */
    update(voice_id: string, request: ElevenLabs.VoiceSettings, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.EditVoiceSettingsResponseModel>;
    private __update;
}
