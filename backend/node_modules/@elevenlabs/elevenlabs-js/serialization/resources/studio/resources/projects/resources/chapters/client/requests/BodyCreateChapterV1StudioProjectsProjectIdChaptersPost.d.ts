import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
export declare const BodyCreateChapterV1StudioProjectsProjectIdChaptersPost: core.serialization.Schema<serializers.studio.projects.BodyCreateChapterV1StudioProjectsProjectIdChaptersPost.Raw, ElevenLabs.studio.projects.BodyCreateChapterV1StudioProjectsProjectIdChaptersPost>;
export declare namespace BodyCreateChapterV1StudioProjectsProjectIdChaptersPost {
    interface Raw {
        name: string;
        from_url?: string | null;
    }
}
