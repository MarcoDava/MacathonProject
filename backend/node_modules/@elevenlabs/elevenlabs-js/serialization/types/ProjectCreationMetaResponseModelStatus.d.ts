import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectCreationMetaResponseModelStatus: core.serialization.Schema<serializers.ProjectCreationMetaResponseModelStatus.Raw, ElevenLabs.ProjectCreationMetaResponseModelStatus>;
export declare namespace ProjectCreationMetaResponseModelStatus {
    type Raw = "pending" | "creating" | "finished" | "failed";
}
