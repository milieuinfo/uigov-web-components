/**
 * transforms the given string to allow for sentences to be passed as parameters in storybook url
 * using strings containing '.', '/', '?', '&' won't work
 * @param string: string
 */
export const transformStringToArgument = (string: string) => string.replace(' ', '+');
