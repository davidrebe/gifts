export function getGifts(params) {
   return fetch("http://api.giphy.com/v1/gifs/trending?api_key=WUv5ykxKldXzvLVIeTIqNifTmtqaP2qw&limit=" + params.pageLimit + "&offset=" + params.offset, {
      method: 'get'
    }).then((res) => res.json());
}