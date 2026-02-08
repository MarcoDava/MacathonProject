import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectExtendedResponseModelApplyTextNormalization: core.serialization.Schema<serializers.ProjectExtendedResponseModelApplyTextNormalization.Raw, ElevenLabs.ProjectExtendedResponseModelApplyTextNormalization>;
export declare namespace ProjectExtendedResponseModelApplyTextNormalization {
    type Raw = "auto" | "on" | "off" | "apply_english";
}
