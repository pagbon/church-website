export const homePageQuery = `
  *[_type == "homePage"][0]{
    title,
    "Sections": coalesce(
      sections[]{
        ...,
        _type,

        // Expand images for all section types
        image{asset->{url}, alt},
        topBannerImage{asset->{url}, alt},
        slides[]{asset->{url}, alt},
        images[]{asset->{url}, alt},
        icon{asset->{url}, alt},
        thumbnail{asset->{url}, alt}
      },
      []
    )
  }
`;

