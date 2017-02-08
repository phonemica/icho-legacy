// This file handles the sorting order for alphabetisation, including handling of digraphs, as called by customSort() elsewhere.

const language = "Phake";
let order = [
    'a', 'ā', 'á', 'à', 'ä', 'â', 'ã', 'ă', 'ȧ', 'ả', 'å', 'ǎ', 'ȁ', 'ȃ', 'ą', 'ạ', 'ḁ',
    'b', 'ḃ', 'ɓ', 'ḅ', 'ḇ', 'ƀ',
    'c', 'ć', 'ĉ', 'ċ', 'č', 'ƈ', 'ç', 'ḉ', 'ȼ',
    'd', 'ḋ', 'ɗ', 'ḍ', 'ḏ', 'ḑ', 'ḓ', 'ď', 'đ',
    'e', 'è', 'é', 'ê', 'ẽ', 'ē', 'ĕ', 'ė', 'ë', 'ě', 'ȅ', 'ȇ', 'ẹ', 'ȩ', 'ę', 'ḙ', 'ḛ', 'ệ', 'ḝ', 'ɛ', 'ǝ',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u', 'ü',
    'v',
    'w',
    'x',
    'y',
    'z'
];

if (language == "Phake") {
    order = [
        'k', 'kh', 'ng',
        'c', 's', 'nj',
        't', 'th', 'n',
        'p', 'ph', 'm',
        'y',
        'l',
        'w',
        'h',
        'a'
    ];
}

if (language == "Myanmar" || language == "Burmese") {
    order = [
        'က', 'ခ', 'ဂ', 'ဃ', 'င',
        'စ', 'ဆ', 'ဇ', 'ဈ', 'ဉ', 'ည',
        'ဋ', 'ဌ', 'ဍ', 'ဎ', 'ဏ',
        'ပ', 'ဖ', 'ဗ', 'ဘ', 'မ',
        'ယ', 'ရ', 'လ', 'ဝ', 'သ',
        'ဣ', 'ဤ', 'ဥ', 'ဦ',
        'ဧ', 'ဩ', 'ဪ',
    ];
}
