import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { VoicePreviewResponseModel } from "./VoicePreviewResponseModel";
export declare const VoiceDesignPreviewResponse: core.serialization.ObjectSchema<serializers.VoiceDesignPreviewResponse.Raw, ElevenLabs.VoiceDesignPreviewResponse>;
export declare namespace VoiceDesignPreviewResponse {
    interface Raw {
        previews: VoicePreviewResponseModel.Raw[];
        text: string;
    }
}
