import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { RenderType } from "../../../../../../types/RenderType";
export declare const BodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost: core.serialization.Schema<serializers.dubbing.BodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost.Raw, ElevenLabs.dubbing.BodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost>;
export declare namespace BodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost {
    interface Raw {
        render_type: RenderType.Raw;
        normalize_volume?: boolean | null;
    }
}
