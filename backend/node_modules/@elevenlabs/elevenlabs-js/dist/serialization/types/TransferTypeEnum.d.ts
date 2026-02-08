import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TransferTypeEnum: core.serialization.Schema<serializers.TransferTypeEnum.Raw, ElevenLabs.TransferTypeEnum>;
export declare namespace TransferTypeEnum {
    type Raw = "blind" | "conference" | "sip_refer";
}
