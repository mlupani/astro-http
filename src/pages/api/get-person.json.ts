
import type { APIRoute } from "astro";

export const GET:APIRoute = async ({params, request}) => {

    return new Response(JSON.stringify({
        name: "John Doe",
        age: 25,
        email: "",
        phone: "+1234567890"
    }), {
        headers: {
            "Content-Type": "application/json"
        }
    });

}