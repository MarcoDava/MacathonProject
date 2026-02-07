import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const BodyEditPvcVoiceV1VoicesPvcVoiceIdPost: core.serialization.Schema<serializers.voices.BodyEditPvcVoiceV1VoicesPvcVoiceIdPost.Raw, ElevenLabs.voices.BodyEditPvcVoiceV1VoicesPvcVoiceIdPost>;
export declare namespace BodyEditPvcVoiceV1VoicesPvcVoiceIdPost {
    interface Raw {
        name?: string | null;
        language?: string | null;
        description?: string | null;
        labels?: Record<string, string | null | undefined> | null;
    }
}
