import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CharacterAlignmentResponseModel } from "./CharacterAlignmentResponseModel";
import { VoiceSegment } from "./VoiceSegment";
export declare const StreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel: core.serialization.ObjectSchema<serializers.StreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel.Raw, ElevenLabs.StreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel>;
export declare namespace StreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel {
    interface Raw {
        audio_base64: string;
        alignment?: CharacterAlignmentResponseModel.Raw | null;
        normalized_alignment?: CharacterAlignmentResponseModel.Raw | null;
        voice_segments: VoiceSegment.Raw[];
    }
}
