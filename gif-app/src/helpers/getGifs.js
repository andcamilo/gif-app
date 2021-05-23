

  export  const getGifs = async ( category ) => {
        const url = `http://api.giphy.com/v1/gifs/search?api_key=O4P0srdsZeZFvUvPFQGqYEUHpu57Pyj7&q=${ encodeURI(category)  }&limit=5`;
        const resp = await fetch( url );
        const { data }  = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        } )

        return gifs;
    }
