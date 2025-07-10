export const ministriesPageQuery = `*[_type == "ministriesPage"][0]{
    title,
    sections[] {
      _type,
      heroTitle,
      heroText,
      ministries[]{
        icon,
        iconColor,
        title,
        description[]{ ..., children[]{ ..., marks[] } }
      }
    }
  }`;
