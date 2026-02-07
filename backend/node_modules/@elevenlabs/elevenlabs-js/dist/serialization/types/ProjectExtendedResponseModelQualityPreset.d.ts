import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectExtendedResponseModelQualityPreset: core.serialization.Schema<serializers.ProjectExtendedResponseModelQualityPreset.Raw, ElevenLabs.ProjectExtendedResponseModelQualityPreset>;
export declare namespace ProjectExtendedResponseModelQualityPreset {
    type Raw = "standard" | "high" | "highest" | "ultra" | "ultra_lossless";
}
