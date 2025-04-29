export { default } from "next-auth/middleware";

export const config = {
    // * => zero or more parameters
    // + => one or more parameters
    // ?: zero or one
    matcher: ['/users/:id*']
}