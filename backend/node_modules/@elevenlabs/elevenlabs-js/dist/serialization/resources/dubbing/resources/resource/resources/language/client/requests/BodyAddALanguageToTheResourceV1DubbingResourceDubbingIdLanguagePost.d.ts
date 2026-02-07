import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
export declare const BodyAddALanguageToTheResourceV1DubbingResourceDubbingIdLanguagePost: core.serialization.Schema<serializers.dubbing.resource.BodyAddALanguageToTheResourceV1DubbingResourceDubbingIdLanguagePost.Raw, ElevenLabs.dubbing.resource.BodyAddALanguageToTheResourceV1DubbingResourceDubbingIdLanguagePost>;
export declare namespace BodyAddALanguageToTheResourceV1DubbingResourceDubbingIdLanguagePost {
    interface Raw {
        language?: string | null;
    }
}
