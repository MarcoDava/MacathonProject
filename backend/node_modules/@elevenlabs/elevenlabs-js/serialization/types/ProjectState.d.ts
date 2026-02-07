import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectState: core.serialization.Schema<serializers.ProjectState.Raw, ElevenLabs.ProjectState>;
export declare namespace ProjectState {
    type Raw = "creating" | "default" | "converting" | "in_queue";
}
