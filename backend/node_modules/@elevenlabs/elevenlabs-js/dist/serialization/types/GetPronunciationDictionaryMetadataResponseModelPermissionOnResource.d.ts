import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const GetPronunciationDictionaryMetadataResponseModelPermissionOnResource: core.serialization.Schema<serializers.GetPronunciationDictionaryMetadataResponseModelPermissionOnResource.Raw, ElevenLabs.GetPronunciationDictionaryMetadataResponseModelPermissionOnResource>;
export declare namespace GetPronunciationDictionaryMetadataResponseModelPermissionOnResource {
    type Raw = "admin" | "editor" | "commenter" | "viewer";
}
