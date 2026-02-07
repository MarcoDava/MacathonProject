import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { GetWhatsAppAccountResponse } from "./GetWhatsAppAccountResponse";
export declare const ListWhatsAppAccountsResponse: core.serialization.ObjectSchema<serializers.ListWhatsAppAccountsResponse.Raw, ElevenLabs.ListWhatsAppAccountsResponse>;
export declare namespace ListWhatsAppAccountsResponse {
    interface Raw {
        items: GetWhatsAppAccountResponse.Raw[];
    }
}
