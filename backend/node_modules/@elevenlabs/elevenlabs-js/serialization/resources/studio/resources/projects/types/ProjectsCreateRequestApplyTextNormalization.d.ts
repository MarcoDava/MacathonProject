import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
export declare const ProjectsCreateRequestApplyTextNormalization: core.serialization.Schema<serializers.studio.ProjectsCreateRequestApplyTextNormalization.Raw, ElevenLabs.studio.ProjectsCreateRequestApplyTextNormalization>;
export declare namespace ProjectsCreateRequestApplyTextNormalization {
    type Raw = "auto" | "on" | "off" | "apply_english";
}
