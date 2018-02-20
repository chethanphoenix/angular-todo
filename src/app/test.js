return movieLists.map(
  function(movieItem){
    movieItem.videos.map(
        function(movie){
          return {
            id: movie.id,
            title: movie.title,
            boxart: movie.boxarts.filter(
              function(boxart){
                if(boxart.width===150 && boxart.height===200) return boxart;
              })
          }
  });}).concatAll(); // Complete this expression!



return movieLists.
map(function(movieList) {
  return movieList.videos.
                      map(function(video) {
                            return video.boxarts.
                                    filter(function(boxart) {
                                      return boxart.width === 150;
                                    }).
                            map(function(  ) {
                                  return {id: video.id, title: video.title, boxart: boxart.url};
                            });
                      }).
  concatAll();
}).
concatAll();
