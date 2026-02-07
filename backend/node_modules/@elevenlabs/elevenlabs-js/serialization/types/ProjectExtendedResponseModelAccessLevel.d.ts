import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectExtendedResponseModelAccessLevel: core.serialization.Schema<serializers.ProjectExtendedResponseModelAccessLevel.Raw, ElevenLabs.ProjectExtendedResponseModelAccessLevel>;
export declare namespace ProjectExtendedResponseModelAccessLevel {
    type Raw = "admin" | "editor" | "commenter" | "viewer";
}
