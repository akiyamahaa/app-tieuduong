export const formatYoutubeLink = (ytLink: string) => {
	return getStringBetween(ytLink, "=", "&");
};

export const getStringBetween = (str: string, char1: string, char2: string) => {
	if (!str.includes(char1)) {
		return str;
	}
	if (!str.includes(char2)) {
		return str.split(char1)[1];
	}
	return str.split(char1)[1].split(char2)[0];
};
