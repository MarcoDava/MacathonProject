import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { PermissionType } from "../../../../../types/PermissionType";
export declare const BodyEditServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdPatchPermissions: core.serialization.Schema<serializers.serviceAccounts.BodyEditServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdPatchPermissions.Raw, ElevenLabs.serviceAccounts.BodyEditServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdPatchPermissions>;
export declare namespace BodyEditServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdPatchPermissions {
    type Raw = PermissionType.Raw[] | "all";
}
