import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectResponseModelSourceType: core.serialization.Schema<serializers.ProjectResponseModelSourceType.Raw, ElevenLabs.ProjectResponseModelSourceType>;
export declare namespace ProjectResponseModelSourceType {
    type Raw = "blank" | "book" | "article" | "genfm" | "video" | "screenplay";
}
