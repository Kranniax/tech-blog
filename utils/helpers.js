export default {
  // Format date to a readable string
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },

  // Truncate text for previews
  truncate: (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  },
};
