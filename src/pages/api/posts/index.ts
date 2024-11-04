
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = false;

export const GET:APIRoute = async ({params, request}) => {

    const posts = await getCollection("blog");

    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');

    if(!slug){
        return new Response(JSON.stringify(posts), {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    const post = posts.find(p => p.slug === slug);
    if(post)
        return new Response(JSON.stringify(post), {
            headers: {
                "Content-Type": "application/json"
            }
        });

    return new Response("Post not found", {
        status: 404
    });

}