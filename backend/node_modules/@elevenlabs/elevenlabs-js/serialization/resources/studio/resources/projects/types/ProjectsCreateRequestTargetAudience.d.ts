import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
export declare const ProjectsCreateRequestTargetAudience: core.serialization.Schema<serializers.studio.ProjectsCreateRequestTargetAudience.Raw, ElevenLabs.studio.ProjectsCreateRequestTargetAudience>;
export declare namespace ProjectsCreateRequestTargetAudience {
    type Raw = "children" | "young adult" | "adult" | "all ages";
}
