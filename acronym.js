//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (string) => {
  const cleanedString = string.replace(/[^a-z']/gi, ' ');
  return cleanedString.split(' ').map(word => word ? word[0].toUpperCase() : null).join('');
};