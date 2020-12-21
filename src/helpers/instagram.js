const axios = require('axios');

exports.getInstagramPosts = async function(username = "s4saifullah") {
    // let url = "https://www.instagram.com/" + username + "/";
    // let response = await axios.get(url);

    // // parse html and extract the json object
    // let jsonObject = JSON.parse(response.data.split("window._sharedData = ")[1].split(";</script>")[0]);
    // let userObject = jsonObject.entry_data.ProfilePage[0].graphql.user;

    // let posts = [];
    // for (const [key, post] of Object.entries(userObject.edge_owner_to_timeline_media.edges)) {
    //     if (post.is_video) continue; // exclude video posts
    //     posts.push({
    //         'image_url': post.node.thumbnail_resources[post.node.thumbnail_resources.length - 1]["src"],
    //         'caption': post["node"]["edge_media_to_caption"]["edges"][0]["node"]["text"],
    //     });
    // }
    var fs = require('fs');
    let posts = JSON.parse(fs.readFileSync('./src/data.json', 'utf8'));
    return Promise.resolve(posts);
};