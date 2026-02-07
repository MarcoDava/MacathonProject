import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectExtendedResponseModelSourceType: core.serialization.Schema<serializers.ProjectExtendedResponseModelSourceType.Raw, ElevenLabs.ProjectExtendedResponseModelSourceType>;
export declare namespace ProjectExtendedResponseModelSourceType {
    type Raw = "blank" | "book" | "article" | "genfm" | "video" | "screenplay";
}
