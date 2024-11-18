export default ((): void => {
    // Patch BigInt serialization which is used in e.g. Zcl payloads.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json
    // @ts-expect-error patching prototype
    BigInt.prototype.toJSON = function (): string {
        return this.toString();
    };
})();
