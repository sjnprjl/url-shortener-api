import base62 from "base62/lib/ascii.js";
export default (id) => {
    const uniqueId = id.replace(/[A-Za-z\-]/g, '');
    return base62.encode(uniqueId);
}