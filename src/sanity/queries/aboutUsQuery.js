export const aboutPageQuery = `
  *[_type == "aboutUsPage"][0]{
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
      cards[]{ number, title, description[]{ ..., children[] }, ctaText, ctaRoute },
      image{ asset->{url}, alt },
      images[]{ asset->{url}, alt },
      content[]{ heading, paragraph[]{ ..., children[] } },
      paragraph[]{ heading, paragraph[]{ ..., children[] } },
      details[]{ title, description[]{ ..., children[]{ ..., marks[] } } }
    }
  }
`;
