import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
export declare const ProjectsCreateRequestSourceType: core.serialization.Schema<serializers.studio.ProjectsCreateRequestSourceType.Raw, ElevenLabs.studio.ProjectsCreateRequestSourceType>;
export declare namespace ProjectsCreateRequestSourceType {
    type Raw = "blank" | "book" | "article" | "genfm" | "video" | "screenplay";
}
