import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationSignedUrlResponseModel: core.serialization.ObjectSchema<serializers.ConversationSignedUrlResponseModel.Raw, ElevenLabs.ConversationSignedUrlResponseModel>;
export declare namespace ConversationSignedUrlResponseModel {
    interface Raw {
        signed_url: string;
    }
}
