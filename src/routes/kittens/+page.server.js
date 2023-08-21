import { kittens} from "./data.js"

export function load() {
    return {
        kittens: kittens.map((kitten) => ({
            image: kitten.image,
            name: kitten.name,
            slug: kitten.id,
            image2: kitten.image2,
            description: kitten.description,
        }))
    };
}



