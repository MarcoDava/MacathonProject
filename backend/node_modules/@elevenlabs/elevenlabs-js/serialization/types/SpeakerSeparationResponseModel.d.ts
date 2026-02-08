import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SpeakerResponseModel } from "./SpeakerResponseModel";
import { SpeakerSeparationResponseModelStatus } from "./SpeakerSeparationResponseModelStatus";
export declare const SpeakerSeparationResponseModel: core.serialization.ObjectSchema<serializers.SpeakerSeparationResponseModel.Raw, ElevenLabs.SpeakerSeparationResponseModel>;
export declare namespace SpeakerSeparationResponseModel {
    interface Raw {
        voice_id: string;
        sample_id: string;
        status: SpeakerSeparationResponseModelStatus.Raw;
        speakers?: Record<string, SpeakerResponseModel.Raw | null | undefined> | null;
        selected_speaker_ids?: string[] | null;
    }
}
