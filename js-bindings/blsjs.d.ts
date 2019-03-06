export class PrivateKey {
    static fromSeed(seed: Uint8Array): PrivateKey;
    static fromBytes(bytes: Uint8Array, modOrder: boolean): PrivateKey;
    static aggregate(privateKeys: PrivateKey[], publicKeys: PublicKey[]): PrivateKey;
    static aggregateInsecure(privateKeys: PrivateKey[]): PrivateKey;
    getPublicKey(): PublicKey;
    serialize(): Uint8Array;
    sign(message: Uint8Array): Signature;
    signInsecure(message: Uint8Array): InsecureSignature;
    signPrehashed(messageHash: Uint8Array): Signature;
    delete(): void;
}

export class InsecureSignature {
    static fromBytes(bytes: Uint8Array);
    static aggregate(signatures: InsecureSignature[]): InsecureSignature;
    verify(hashes: Uint8Array[], pubKeys: PublicKey[]): boolean;
    divideBy(insecureSignatures: InsecureSignature[]): InsecureSignature;
    serialize(): Uint8Array;
    delete(): void;
}

export class Signature {
    static fromBytes(bytes: Uint8Array): Signature;
    static fromBytesAndAggregationInfo(bytes: Uint8Array, aggregationInfo: AggregationInfo): Signature;
    static aggregateSigs(signatures: Signature[]): Signature;
    serialize(): Uint8Array;
    verify(): boolean;
    getAggregationInfo(): AggregationInfo;
    setAggregationInfo(aggregationInfo: AggregationInfo): void;
    delete(): void;
}

export class PublicKey {
    static fromBytes(bytes: Uint8Array): PublicKey;
    static aggregate(publicKeys: PublicKey[]): PublicKey;
    static aggregateInsecure(publicKeys: PublicKey[]): PublicKey;
    getFingerprint(): number;
    serialize(): Uint8Array;
    delete(): void;
}

export class AggregationInfo {
    static fromMsgHash(publicKey: PublicKey, messageHash: Uint8Array): AggregationInfo;
    static fromMsg(publicKey: PublicKey, message: Uint8Array): AggregationInfo;
    static fromBuffers(pubKeys: PublicKey[], msgHashes: Uint8Array[], exponents: Uint8Array[]): AggregationInfo;
    getPublicKeys(): PublicKey[];
    getMessageHashes(): Uint8Array[];
    getExponents(): Uint8Array[];
    delete(): void;
}

export class ExtendedPrivateKey {
    static fromSeed(seed: Uint8Array): ExtendedPrivateKey;
    static fromBytes(bytes: Uint8Array): ExtendedPrivateKey;
    privateChild(index: number): ExtendedPrivateKey;
    publicChild(index: number): ExtendedPublicKey;
    getVersion(): number;
    getDepth(): number;
    getParentFingerprint(): number;
    getChildNumber(): number;
    getChainCode(): ChainCode;
    getPrivateKey(): PrivateKey;
    getPublicKey(): PublicKey;
    getExtendedPublicKey(): ExtendedPublicKey;
    serialize(): Uint8Array;
    delete(): void;
}

export class ExtendedPublicKey {
    static fromBytes(bytes: Uint8Array): ExtendedPublicKey;
    publicChild(index: number): ExtendedPublicKey;
    getVersion(): number;
    getDepth(): number;
    getParentFingerprint(): number;
    getChildNumber(): number;
    getPublicKey(): PublicKey;
    getChainCode(): ChainCode;
    serialize(): Uint8Array;
    delete(): void;
}

export class ChainCode {
    static fromBytes(bytes: Uint8Array);
    serialize(): Uint8Array;
    delete(): void;
}

export namespace Threshold {
    function create(commitment: PublicKey[], secretFragments: PrivateKey[], threshold: number, playersCount: number): PrivateKey;
    function signWithCoefficient(sk: PrivateKey, message: Uint8Array, playerIndex: number, players: number[]): InsecureSignature;
    function aggregateUnitSigs(signatures: InsecureSignature[], message: Uint8Array, players: number[]) : InsecureSignature;
    function verifySecretFragment(playerIndex: number, secretFragment: PrivateKey, commitment: PublicKey[], threshold: number) : boolean;
}
