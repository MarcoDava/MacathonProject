import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectResponseModelFiction: core.serialization.Schema<serializers.ProjectResponseModelFiction.Raw, ElevenLabs.ProjectResponseModelFiction>;
export declare namespace ProjectResponseModelFiction {
    type Raw = "fiction" | "non-fiction";
}
