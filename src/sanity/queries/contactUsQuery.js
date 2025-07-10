export const contactUsQuery = `
  *[_type == "contactPage"][0]{
    title,
    sections[]{
      _type,
      heroTitle,
      heroText,
      heading,
      description,
      paragraph,
      sectionTitle,
      body[]{ ..., children[]{ ..., marks[] } },
      image{ asset->{url}, alt },
      images[]{ asset->{url}, alt },
      contactCards[]{
        icon{ asset->{url}, alt },
        title,
        description
      },
      socialLinks[]{
        icon{ asset->{url}, alt },
        url
      }
    }
  }
`;
