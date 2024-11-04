
import type { APIRoute, GetStaticPaths } from "astro";
import { getEntry } from "astro:content";

export const prerender = false;

/*
export const getStaticPaths: GetStaticPaths = async () => {
    return [
        {
            params: {
                slug: "first-post"
            }
        }
    ];
}
*/

export const GET:APIRoute = async ({params, request}) => {

    const slug = params.slug;
    const post = await getEntry("blog", slug as any);

    if(!post){
        return new Response("Post not found", {
            status: 404
        });
    }

    return new Response(JSON.stringify(post), {
        headers: {
            "Content-Type": "application/json"
        }
    });

}

//export const POST:APIRoute = async ({params, request}) => {
//export const DELETE:APIRoute = async ({params, request}) => {
//export const PUT:APIRoute = async ({params, request}) => {