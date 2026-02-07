import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CharacterAlignmentModel } from "./CharacterAlignmentModel";
export declare const ChapterSnapshotExtendedResponseModel: core.serialization.ObjectSchema<serializers.ChapterSnapshotExtendedResponseModel.Raw, ElevenLabs.ChapterSnapshotExtendedResponseModel>;
export declare namespace ChapterSnapshotExtendedResponseModel {
    interface Raw {
        chapter_snapshot_id: string;
        project_id: string;
        chapter_id: string;
        created_at_unix: number;
        name: string;
        character_alignments: CharacterAlignmentModel.Raw[];
    }
}
