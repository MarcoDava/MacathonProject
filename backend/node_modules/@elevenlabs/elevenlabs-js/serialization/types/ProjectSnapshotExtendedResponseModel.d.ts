import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CharacterAlignmentModel } from "./CharacterAlignmentModel";
export declare const ProjectSnapshotExtendedResponseModel: core.serialization.ObjectSchema<serializers.ProjectSnapshotExtendedResponseModel.Raw, ElevenLabs.ProjectSnapshotExtendedResponseModel>;
export declare namespace ProjectSnapshotExtendedResponseModel {
    interface Raw {
        project_snapshot_id: string;
        project_id: string;
        created_at_unix: number;
        name: string;
        audio_upload?: Record<string, unknown> | null;
        zip_upload?: Record<string, unknown> | null;
        character_alignments: CharacterAlignmentModel.Raw[];
        audio_duration_secs: number;
    }
}
