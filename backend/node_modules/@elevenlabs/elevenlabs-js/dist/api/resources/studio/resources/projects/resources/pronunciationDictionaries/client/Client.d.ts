import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace PronunciationDictionariesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class PronunciationDictionariesClient {
    protected readonly _options: NormalizedClientOptions<PronunciationDictionariesClient.Options>;
    constructor(options?: PronunciationDictionariesClient.Options);
    /**
     * Create a set of pronunciation dictionaries acting on a project. This will automatically mark text within this project as requiring reconverting where the new dictionary would apply or the old one no longer does.
     *
     * @param {string} project_id - The ID of the project to be used. You can use the [List projects](/docs/api-reference/studio/get-projects) endpoint to list all the available projects.
     * @param {ElevenLabs.studio.projects.BodyCreatePronunciationDictionariesV1StudioProjectsProjectIdPronunciationDictionariesPost} request
     * @param {PronunciationDictionariesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.pronunciationDictionaries.create("21m00Tcm4TlvDq8ikWAM", {
     *         pronunciationDictionaryLocators: [{
     *                 pronunciationDictionaryId: "pronunciation_dictionary_id"
     *             }]
     *     })
     */
    create(project_id: string, request: ElevenLabs.studio.projects.BodyCreatePronunciationDictionariesV1StudioProjectsProjectIdPronunciationDictionariesPost, requestOptions?: PronunciationDictionariesClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.CreatePronunciationDictionaryResponseModel>;
    private __create;
}
