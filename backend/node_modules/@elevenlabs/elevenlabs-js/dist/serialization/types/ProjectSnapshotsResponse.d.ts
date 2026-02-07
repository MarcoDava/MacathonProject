import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ProjectSnapshotResponse } from "./ProjectSnapshotResponse";
export declare const ProjectSnapshotsResponse: core.serialization.ObjectSchema<serializers.ProjectSnapshotsResponse.Raw, ElevenLabs.ProjectSnapshotsResponse>;
export declare namespace ProjectSnapshotsResponse {
    interface Raw {
        snapshots: ProjectSnapshotResponse.Raw[];
    }
}
