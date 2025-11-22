export const homePageQuery = `
  *[_type == "homePage"][0]{
    title,
    sections[]{
      ...,
      _type,

      // Image helpers so Vue can safely use .asset.url
      image{
        asset->{ url },
        alt
      },
      topBannerImage{
        asset->{ url },
        alt
      },
      slides[]{
        asset->{ url },
        alt
      },
      images[]{
        asset->{ url },
        alt
      },
      icon{
        asset->{ url },
        alt
      },
      thumbnail{
        asset->{ url },
        alt
      }
    }
  }
`;

