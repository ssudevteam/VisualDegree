// JavaScript code to set the selectedTag variable from the query string
const urlParams = new URLSearchParams(window.location.search);
const selectedTag = urlParams.get("tag");
