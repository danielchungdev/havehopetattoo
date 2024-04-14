export const getArtistImageUrl = (artistName:string, imageName: string): string => {
    let name = artistName.replace(/\s/g, "").toLowerCase();
    return `/images/${name}/${imageName}`;
}
