/**
 * @description AES-GCM algorithm identifier.
 */
export const AES_GCM_ALGORITHM = "AES-GCM";
/**
 * @description Initialization vector length in bytes for AES-GCM.
 */
export const AES_GCM_IV_LENGTH = 12;
/**
 * @description SHA-256 digest algorithm identifier.
 */
export const SHA_256_ALGORITHM = "SHA-256";
/**
 * @description Raw key import format identifier.
 */
export const RAW_KEY_FORMAT = "raw";
/**
 * @description Separator joining the IV and ciphertext segments.
 */
export const STORAGE_VALUE_SEPARATOR = ".";
/**
 * @description Allowed key usages for the derived AES-GCM key.
 */
export const KEY_USAGES: KeyUsage[] = ["encrypt", "decrypt"];
/**
 * @description Expected segment count of an encrypted value.
 */
export const ENCRYPTED_VALUE_PART_COUNT = 2;
