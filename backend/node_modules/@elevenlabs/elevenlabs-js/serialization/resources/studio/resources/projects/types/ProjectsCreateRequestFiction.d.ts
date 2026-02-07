import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
export declare const ProjectsCreateRequestFiction: core.serialization.Schema<serializers.studio.ProjectsCreateRequestFiction.Raw, ElevenLabs.studio.ProjectsCreateRequestFiction>;
export declare namespace ProjectsCreateRequestFiction {
    type Raw = "fiction" | "non-fiction";
}
