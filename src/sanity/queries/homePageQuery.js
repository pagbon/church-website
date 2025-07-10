export const homePageQuery = `
  *[_type == "homePage"][0]{
    title,
    Sections[]{
      _type,
      heroText,
      subtitle,
      ctaText,
      ctaRoute,
      slides[]{
        asset->{url},
        alt
      },
      images[]{
        asset->{url},
        alt
      },
      items[]{
        title,
        description,
        linkText,
        linkUrl
      },
      cards[]{
        icon{ asset->{url}, alt },
        title,
        description
      },
      body[]{ ..., children[]{ ..., marks[] } },
      intro[]{ ..., children[]{ ..., marks[] } },
      heading,
      image{ asset->{url}, alt },
      paragraphs,
      description
    }
  }
`;
