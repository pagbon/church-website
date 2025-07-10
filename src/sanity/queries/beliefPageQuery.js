export const beliefPageQuery = `
  *[_type == "ourBeliefsPage"][0]{
    title,
    sections[]{
      _type,
      heroTitle,
      heroText,
      items[]{
        icon,
        iconColor,
        title,
        description[]{ ..., children[]{ ..., marks[] } }
      }
    }
  }
`;
