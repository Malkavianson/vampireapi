const isUndefined = (value: string): string | undefined => {
	if ((value = "")) {
		return undefined;
	} else {
		return value;
	}
};

export default isUndefined;
