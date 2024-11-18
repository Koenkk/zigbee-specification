export const IEEE_ADDR1 = {
    string: '0xae440112004b1200',
    hex: [0x00, 0x12, 0x4b, 0x00, 0x12, 0x01, 0x44, 0xae],
};

export const IEEE_ADDR2 = {
    string: '0xaf440112005b1200',
    hex: [0x00, 0x12, 0x5b, 0x00, 0x12, 0x01, 0x44, 0xaf],
};

export const uint16To8Array = (n: number): number[] => {
    return [n & 0xff, (n >> 8) & 0xff];
};

export const uint32To8Array = (n: number): number[] => {
    return [n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff];
};

export const uint56To8Array = (n: bigint): number[] => {
    return [
        Number(n & 0xffn),
        Number(n >> 8n) & 0xff,
        Number(n >> 16n) & 0xff,
        Number(n >> 24n) & 0xff,
        Number(n >> 32n) & 0xff,
        Number(n >> 40n) & 0xff,
        Number(n >> 48n) & 0xff,
    ];
};
