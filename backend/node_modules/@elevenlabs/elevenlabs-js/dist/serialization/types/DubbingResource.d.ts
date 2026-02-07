import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DubbingMediaReference } from "./DubbingMediaReference";
import { Render } from "./Render";
import { SpeakerSegment } from "./SpeakerSegment";
import { SpeakerTrack } from "./SpeakerTrack";
export declare const DubbingResource: core.serialization.ObjectSchema<serializers.DubbingResource.Raw, ElevenLabs.DubbingResource>;
export declare namespace DubbingResource {
    interface Raw {
        id: string;
        version: number;
        source_language: string;
        target_languages: string[];
        input: DubbingMediaReference.Raw;
        background?: DubbingMediaReference.Raw | null;
        foreground?: DubbingMediaReference.Raw | null;
        speaker_tracks: Record<string, SpeakerTrack.Raw>;
        speaker_segments: Record<string, SpeakerSegment.Raw>;
        renders: Record<string, Render.Raw>;
    }
}
