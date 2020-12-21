const axios = require('axios');

exports.getIGPosts = async function(username = "s4saifullah") {
    let url = "https://www.instagram.com/" + username + "/?__a=1";
    let response = await axios.get(url);
    let data = response.data;
    let posts = [];

    console.log(data);
    console.log(data.graphql);
    console.log(data.graphql.user);

    for (const [key, post] of Object.entries(data.graphql.user.edge_owner_to_timeline_media.edges)) {
        if (post.is_video) continue; // exclude video posts
        posts.push({
            'image_url': post.node.thumbnail_resources[post.node.thumbnail_resources.length - 1]["src"],
            'caption': post["node"]["edge_media_to_caption"]["edges"][0]["node"]["text"],
            'link': "https://www.instagram.com/p/" + post["node"]["shortcode"] + "/"
        });
    }
    return Promise.resolve(posts);
};