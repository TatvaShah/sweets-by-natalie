import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Sweets by Natalie",
  tagline: "Custom cakes, cupcakes and more, finished in vintage buttercream.",
  category: "Custom cakes and cupcakes",
  schemaType: "Bakery",
  area: "Vaughan (Maple), ON",
  siteUrl: "https://sweets-by-natalie-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#e43078" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Made to order in Maple",
    headline: "Vintage buttercream cakes for your celebration",
    subhead: "Custom cakes, cupcakes and seasonal treats. Send a message to order, with pickup in Maple.",
    images: [
      { src: "/images/post-1.jpg", alt: "A 6-inch heart cake with vintage piping by Sweets by Natalie" },
      { src: "/images/post-2.jpg", alt: "A two-tier black cocoa chocolate cake by Sweets by Natalie" },
      { src: "/images/post-9.jpg", alt: "A pumpkin chai cake with vintage piping and bows by Sweets by Natalie" },
    ],
    primaryCta: { label: "Order by Instagram DM", href: "https://ig.me/m/_sweetsbynatalie" },
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: ["Vintage buttercream cakes", "5 and 6 inch cakes", "Cupcakes and cookies", "Pickup in Maple"],

  about: {
    title: "Welcome to Sweets by Natalie",
    body: [
      "Sweets by Natalie makes custom cakes, cupcakes and more in Vaughan. Cakes are finished in vintage piping and mock Swiss meringue buttercream, in 5 and 6 inch sizes with two or three layers.",
      "Orders are placed by Instagram DM, with pickup in Maple.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A 6-inch heart cake with vintage piping by Sweets by Natalie" },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    groups: [
      {
        title: "Custom cakes",
        items: [
          { name: "Vintage piped custom cakes", description: "5 and 6 inch, two and three layer." },
          { name: "Heart cakes", description: "Honey graham layers, salted honey whipped cream and vanilla mock Swiss meringue buttercream." },
          { name: "Pumpkin chai cake", description: "Finished with cream cheese Swiss meringue buttercream." },
          { name: "Black cocoa triple chocolate cake", description: "Layered with chocolate ganache and black cocoa Swiss meringue buttercream." },
        ],
      },
      {
        title: "Cupcakes and cookies",
        items: [
          { name: "Themed cupcakes", description: "Including holiday designs with hand-piped details." },
          { name: "Seasonal stuffed cookies", description: "Posted for October at $6 each, or a box of 4 for $24, with pickup in Maple." },
        ],
      },
    ],
    footnote: "The October cookie prices were posted on Instagram. Cake orders are quoted in your DM.",
  },

  gallery: {
    title: "Recent cakes",
    items: [
      { src: "/images/post-1.jpg", alt: "A 6-inch heart cake with vintage piping by Sweets by Natalie", caption: "Heart cake" },
      { src: "/images/post-2.jpg", alt: "A two-tier black cocoa chocolate cake by Sweets by Natalie", caption: "Triple chocolate" },
      { src: "/images/post-9.jpg", alt: "A pumpkin chai cake with vintage piping and bows by Sweets by Natalie", caption: "Pumpkin chai" },
      { src: "/images/post-7.jpg", alt: "A three-layer pumpkin chai cake by Sweets by Natalie", caption: "A fall cake" },
      { src: "/images/post-8.jpg", alt: "A 6-inch chocolate cake with vintage piping by Sweets by Natalie", caption: "Chocolate cake" },
      { src: "/images/post-4.jpg", alt: "A Halloween pumpkin chai cake by Sweets by Natalie", caption: "A themed cake" },
      { src: "/images/post-6.jpg", alt: "Halloween cupcakes by Sweets by Natalie", caption: "Themed cupcakes" },
      { src: "/images/post-3.jpg", alt: "Stuffed cookies by Sweets by Natalie", caption: "Stuffed cookies" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "_sweetsbynatalie",
    embeds: [
      "https://www.instagram.com/p/DfqB00knxrT/",
      "https://www.instagram.com/p/DfYHA6mDhDT/",
      "https://www.instagram.com/p/DfLaTE5DoQf/",
    ],
  },

  order: {
    label: "How to order",
    title: "Order in a DM",
    intro: "Send a message with your date, cake size and idea. Pickup is in Maple.",
    dmMessage: "Hi Sweets by Natalie! I would like to order.\nDate needed:\nCake or treat:\nSize or quantity:",
    headerCtaLabel: "DM to order",
    links: [{ label: "Order by Instagram DM", href: "https://ig.me/m/_sweetsbynatalie" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a message on Instagram with your date, cake size and idea." },
    { q: "Where is pickup?", a: "Pickup is in Maple, Vaughan." },
    { q: "What sizes do you bake?", a: "Custom cakes are posted in 5 and 6 inch sizes, with two or three layers." },
  ],

  contact: {
    title: "Contact",
    area: "Vaughan (Maple), Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/_sweetsbynatalie/" }],
  },

  seo: {
    title: "Sweets by Natalie | Custom cakes and cupcakes in Vaughan",
    description: "Custom vintage buttercream cakes, cupcakes and seasonal treats, made to order in Maple, Vaughan. Send a message to order, with pickup in Maple.",
    keywords: ["custom cakes Vaughan", "vintage buttercream Maple", "Sweets by Natalie"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
