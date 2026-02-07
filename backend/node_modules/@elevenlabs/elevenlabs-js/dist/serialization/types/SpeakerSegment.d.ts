import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DubbedSegment } from "./DubbedSegment";
import { SegmentSubtitleFrame } from "./SegmentSubtitleFrame";
export declare const SpeakerSegment: core.serialization.ObjectSchema<serializers.SpeakerSegment.Raw, ElevenLabs.SpeakerSegment>;
export declare namespace SpeakerSegment {
    interface Raw {
        id: string;
        start_time: number;
        end_time: number;
        text: string;
        subtitles: SegmentSubtitleFrame.Raw[];
        dubs: Record<string, DubbedSegment.Raw>;
    }
}
