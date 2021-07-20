export const loadPosts = async() =>{
    //chamar a API dos posts
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    //recebe os posts em um array 
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    //converte os post recebidos para json
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    //unir array com o numero do menor
    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });
    return postsAndPhotos
}