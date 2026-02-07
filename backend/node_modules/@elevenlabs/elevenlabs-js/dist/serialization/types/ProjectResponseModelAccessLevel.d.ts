import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectResponseModelAccessLevel: core.serialization.Schema<serializers.ProjectResponseModelAccessLevel.Raw, ElevenLabs.ProjectResponseModelAccessLevel>;
export declare namespace ProjectResponseModelAccessLevel {
    type Raw = "admin" | "editor" | "commenter" | "viewer";
}
