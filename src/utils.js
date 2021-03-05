export const isFavorite = (movieId, favorites) => {
    let favorite = false;

    favorites.map(movie => (movie.id == movieId) && (favorite = true));

    return favorite;
}