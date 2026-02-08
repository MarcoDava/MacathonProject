import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const PronunciationDictionariesCreateFromFileRequestWorkspaceAccess: core.serialization.Schema<serializers.PronunciationDictionariesCreateFromFileRequestWorkspaceAccess.Raw, ElevenLabs.PronunciationDictionariesCreateFromFileRequestWorkspaceAccess>;
export declare namespace PronunciationDictionariesCreateFromFileRequestWorkspaceAccess {
    type Raw = "admin" | "editor" | "commenter" | "viewer";
}
