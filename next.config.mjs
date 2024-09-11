/** @type {import("next").NextConfig} */
import withSerwistInit from "@serwist/next";

const withSwr = withSerwistInit({
 swSrc: "app/sw.ts",
 swDest: "public/sw.js"
});
export default withSwr({});
