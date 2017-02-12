// This file handles the sorting order for alphabetisation, including handling of digraphs, as called by customSort() elsewhere.

let order = [ // this is the default order. will need to simply strip accents at some point.
	"a", "ā", "á", "à", "ä", "â", "ã", "ă", "ȧ", "ả", "å", "ǎ", "ȁ", "ȃ", "ą", "ạ", "ḁ",
	"b", "ḃ", "ɓ", "ḅ", "ḇ", "ƀ",
	"c", "ć", "ĉ", "ċ", "č", "ƈ", "ç", "ḉ", "ȼ",
	"d", "ḋ", "ɗ", "ḍ", "ḏ", "ḑ", "ḓ", "ď", "đ",
	"e", "è", "é", "ê", "ẽ", "ē", "ĕ", "ė", "ë", "ě", "ȅ", "ȇ", "ẹ", "ȩ", "ę", "ḙ", "ḛ", "ệ", "ḝ", "ɛ", "ǝ",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z"
];

if (language == "Phake") {
	order = [ //
		"k", "kh", "ng", "ŋ",
		"c", "s", "ny", "ɲ",
		"t", "th", "n",
		"p", "ph", "m",
		"y",
		"l",
		"w",
		"h",
		"a", "ā"
	];
}

if (language == "Zhuyin") {
	order = [ //
		"ㄅ", "ㄆ", "ㄇ", "ㄈ",
		"ㄉ", "ㄊ", "ㄋ", "ㄌ",
		"ㄍ", "ㄎ", "ㄏ", "ㄐ",
		"ㄑ", "ㄒ", "ㄓ", "ㄔ",
		"ㄕ", "ㄖ", "ㄗ", "ㄘ", "ㄙ"
	];
}

if (language == "Myanmar" || language == "Burmese") {
	order = [ // expand this to include a single order for Shan, Khamti, Phake, Burmese etc.
		"က", "ခ", "ဂ", "ဃ", "င",
		"စ", "ဆ", "ဇ", "ဈ", "ဉ", "ည",
		"ဋ", "ဌ", "ဍ", "ဎ", "ဏ",
		"ပ", "ဖ", "ဗ", "ဘ", "မ",
		"ယ", "ရ", "လ", "ဝ", "သ",
		"ဣ", "ဤ", "ဥ", "ဦ",
		"ဧ", "ဩ", "ဪ",
	];
}

/* User can select what numeral system they want for counting definitions, senses, examples. */
count_roman = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];
count_arabic = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
count_devanagari = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"];
count_thai = ["๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙", "๑๐"];
count_myanmar = ["၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉", "၁၀"];
count_tiangan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
count_dizhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
count_bullet = ["•","•","•","•","•","•","•","•","•","•"];
count_interpunct = ["·","·","·","·","·","·","·","·","·","·"];

/* default setting: */
let example_counting = count_bullet;
let definition_counting = count_interpunct;
