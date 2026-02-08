import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectResponseModelTargetAudience: core.serialization.Schema<serializers.ProjectResponseModelTargetAudience.Raw, ElevenLabs.ProjectResponseModelTargetAudience>;
export declare namespace ProjectResponseModelTargetAudience {
    type Raw = "children" | "young adult" | "adult" | "all ages";
}
