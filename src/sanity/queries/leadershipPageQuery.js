export const leadershipPageQuery = `
  *[_type == "leadershipPage"][0]{
    title,
    sections[]{
      _type,
      heroTitle,
      heroText,
      leaders[]{
        name,
        image{ asset->{url, alt} },
        roles[]{
          position,
          email
        }
      }
    }
  }
`;
