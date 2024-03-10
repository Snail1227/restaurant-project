import { ImagesEffect } from "./ImagesEffect"
import food12 from "../images/food12.jpg";
import food13 from "../images/food13.jpg";
import food8 from "../images/food8.jpg";

const images: string[] = [
    food12,
    food13 ,
    food8,
];


export const OurStory: React.FC = () => {
    return (
        <div>
            <ImagesEffect images={images} />
            <div className="ourStory-about">
                <h2>Our story</h2>
                <p>Vista Mare is a delightful café and wine bar nestled in the vibrant West Village, born from the creative minds of Chef Luca Martini and General Manager/Beverage Director Emma Thompson. This gem redefines New York City's rich culinary legacy, offering a comforting and eclectic mix of American cuisine with a distinct European flair. The ambiance of Vista Mare is crafted to echo the cozy and elegant vibe of New York's most beloved dining establishments, modernized for contemporary tastes.</p>
                <p>The menu shines a spotlight on a seasonal array of salads, vegetables, and shellfish sourced from New York. It's a celebration of seafood, chops, and sides, paying homage to classic recipes from an earlier time, accompanied by a diverse selection of house-made pastas. Wine takes center stage in the Vista Mare experience, boasting a collection over 550 bottles strong, complemented by at least 20 rotating by-the-glass offerings. The cocktail program breathes new life into classic concoctions, supported by a curated selection of tap and bottled beers.</p>
                <p>Nestled on a picturesque street, Vista Mare occupies a historic 1850s Greek-revival building. The establishment's name is a nod to Martini’s ancestor, whose journey to New York City in the late 1800s laid the groundwork for a lineage of culinary artisans. The interior is adorned with mahogany wood, intricate wrought-iron windows, and vintage tableware meticulously chosen by the team, alongside breathtaking florals by Fox Fodder Farm, and captivating still life artworks commissioned from the talented Georgian artist Vitali Dvali. A cozy sidewalk patio enhances the dining experience with the arrival of warmer seasons.</p>
                <p>We eagerly await the opportunity to welcome you to Vista Mare.</p>
            </div>  
        </div>
    )
}