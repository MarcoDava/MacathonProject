import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DubbingMediaReference } from "./DubbingMediaReference";
import { SegmentSubtitleFrame } from "./SegmentSubtitleFrame";
export declare const DubbedSegment: core.serialization.ObjectSchema<serializers.DubbedSegment.Raw, ElevenLabs.DubbedSegment>;
export declare namespace DubbedSegment {
    interface Raw {
        start_time: number;
        end_time: number;
        text?: string | null;
        subtitles: SegmentSubtitleFrame.Raw[];
        audio_stale: boolean;
        media_ref?: DubbingMediaReference.Raw | null;
    }
}
