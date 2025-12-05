import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
        url: "https://pinoonali.com/",
        lastModified: new Date(),
        },
        {
        url: "https://pinoonali.com/galerie",
        lastModified: new Date(),
        },
        {
        url: "https://pinoonali.com/about",
        lastModified: new Date(),
        },
        {
        url: "https://pinoonali.com/contact",
        lastModified: new Date(),
        },
    ];
};
