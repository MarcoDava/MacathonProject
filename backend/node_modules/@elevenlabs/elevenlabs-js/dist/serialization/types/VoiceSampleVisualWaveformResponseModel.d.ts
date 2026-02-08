import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoiceSampleVisualWaveformResponseModel: core.serialization.ObjectSchema<serializers.VoiceSampleVisualWaveformResponseModel.Raw, ElevenLabs.VoiceSampleVisualWaveformResponseModel>;
export declare namespace VoiceSampleVisualWaveformResponseModel {
    interface Raw {
        sample_id: string;
        visual_waveform: number[];
    }
}
