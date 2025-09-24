import type { Schema, Attribute } from '@strapi/strapi';

export interface ExperienceExperienceItem extends Schema.Component {
  collectionName: 'components_experience_experience_items';
  info: {
    displayName: 'DevExperience';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Company: Attribute.String;
    Start: Attribute.Date;
    Content: Attribute.Text;
    Project: Attribute.Component<'experience.project', true>;
    Stop: Attribute.Date;
    Region: Attribute.String;
    Remote: Attribute.Enumeration<['FULL-REMOTE', 'HYBRID', 'OFFICE']>;
    Logo: Attribute.Media;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Company: Attribute.String;
    City: Attribute.String;
    Start: Attribute.Date;
    Stop: Attribute.Date;
    Content: Attribute.RichText;
    Logo: Attribute.Media;
  };
}

export interface ExperienceFeedBack extends Schema.Component {
  collectionName: 'components_experience_feed_backs';
  info: {
    displayName: 'FeedBack';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
    Date: Attribute.Date;
    Author: Attribute.String;
    Job: Attribute.String;
  };
}

export interface ExperienceProject extends Schema.Component {
  collectionName: 'components_experience_projects';
  info: {
    displayName: 'Project';
    description: '';
  };
  attributes: {
    Contribution: Attribute.RichText;
    stack_items: Attribute.Relation<
      'experience.project',
      'oneToMany',
      'api::stack-item.stack-item'
    >;
    Name: Attribute.String;
    webservices: Attribute.Relation<
      'experience.project',
      'oneToMany',
      'api::webservice.webservice'
    >;
    IsCompany: Attribute.Boolean;
  };
}

export interface HomeBloc extends Schema.Component {
  collectionName: 'components_home_blocs';
  info: {
    displayName: 'CardBloc';
    description: '';
  };
  attributes: {
    Cards: Attribute.Component<'home.home-card-block', true>;
    background: Attribute.Enumeration<
      ['default', 'primary', 'primaryLight', 'secondary', 'accent']
    > &
      Attribute.DefaultTo<'default'>;
    title: Attribute.String;
  };
}

export interface HomeCta extends Schema.Component {
  collectionName: 'components_home_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    url: Attribute.String;
    title: Attribute.String;
    background: Attribute.Enumeration<
      ['primary', 'primaryLight', 'secondary', 'accent']
    >;
  };
}

export interface HomeFigureCardBloc extends Schema.Component {
  collectionName: 'components_home_figure_card_blocs';
  info: {
    displayName: 'FigureCardBloc';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Cards: Attribute.Component<'home.figure-card', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      >;
    background: Attribute.Enumeration<
      ['default', 'primary', 'primaryLight', 'secondary', 'accent']
    >;
  };
}

export interface HomeFigureCard extends Schema.Component {
  collectionName: 'components_home_figure_cards';
  info: {
    displayName: 'FigureCard';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Caption: Attribute.String;
    Photo: Attribute.Media;
    Text: Attribute.String;
  };
}

export interface HomeHomeCardBlock extends Schema.Component {
  collectionName: 'components_home_home_card_blocks';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    icon: Attribute.String;
    textCenter: Attribute.Boolean;
    titleColor: Attribute.Enumeration<
      ['primary', 'primaryLight', 'secondary', 'accent', 'ternary']
    >;
    Title: Attribute.String;
    Text: Attribute.String;
    TextColor: Attribute.Enumeration<['default', 'ternary']>;
  };
}

export interface HomePresentation extends Schema.Component {
  collectionName: 'components_home_presentations';
  info: {
    displayName: 'presentation';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Presentation: Attribute.String;
    Photo: Attribute.Media;
    Cta: Attribute.Component<'home.cta', true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Title: Attribute.String;
    URL: Attribute.String;
    Info: Attribute.String;
  };
}

export interface MediaSlider extends Schema.Component {
  collectionName: 'components_media_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    Title: Attribute.String;
    DisplayTitle: Attribute.Boolean;
    medias: Attribute.Media;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    description: 'SEO configuration for meta tags, social sharing and robots.';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaRobots: Attribute.String & Attribute.DefaultTo<'index, follow'>;
    canonicalUrl: Attribute.String;
    metaSocial: Attribute.Component<'seo.social', true>;
    photo: Attribute.Media;
  };
}

export interface SeoSocial extends Schema.Component {
  collectionName: 'components_seo_socials';
  info: {
    displayName: 'Social';
    description: 'Meta information for social networks (Open Graph, Twitter, etc.)';
  };
  attributes: {
    platform: Attribute.Enumeration<['facebook', 'twitter', 'linkedin']>;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    twitterCard: Attribute.Enumeration<['summary', 'summary_large_image']> &
      Attribute.DefaultTo<'summary'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SkillsCharacterTrait extends Schema.Component {
  collectionName: 'components_skills_character_traits';
  info: {
    displayName: 'CharacterTrait';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface SkillsSkill extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skill';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Advancement: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    Logo: Attribute.Media;
    Type: Attribute.Enumeration<
      [
        'FRONT_FRAMEWORK',
        'BACK',
        'DATABASE',
        'INFRASTUCTURE',
        'FRONT_STYLES',
        'LANGUAGE',
        'CMS',
        'MOBILE',
        'GDS'
      ]
    >;
    Language: Attribute.Enumeration<['JAVA_SCRIPT', 'PHP', 'CSS']>;
  };
}

export interface SkillsSkillsList extends Schema.Component {
  collectionName: 'components_skills_skills_lists';
  info: {
    displayName: 'skillsList';
    description: '';
  };
  attributes: {
    MediaSkills: Attribute.Component<'skills.skill', true>;
    softSkill: Attribute.Component<'skills.soft-skill', true>;
    characterTrait: Attribute.Component<'skills.character-trait', true>;
  };
}

export interface SkillsSoftSkill extends Schema.Component {
  collectionName: 'components_skills_soft_skills';
  info: {
    displayName: 'SoftSkill';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Type: Attribute.Enumeration<['METHOD', 'TOOL', 'OHTER']>;
    Logo: Attribute.Media;
  };
}

export interface SliderSlider extends Schema.Component {
  collectionName: 'components_slider_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    title: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface SocialSocialItem extends Schema.Component {
  collectionName: 'components_social_social_items';
  info: {
    displayName: 'SocialItem';
  };
  attributes: {
    Name: Attribute.String;
    Url: Attribute.String;
    Iccon: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'experience.experience-item': ExperienceExperienceItem;
      'experience.experience': ExperienceExperience;
      'experience.feed-back': ExperienceFeedBack;
      'experience.project': ExperienceProject;
      'home.bloc': HomeBloc;
      'home.cta': HomeCta;
      'home.figure-card-bloc': HomeFigureCardBloc;
      'home.figure-card': HomeFigureCard;
      'home.home-card-block': HomeHomeCardBlock;
      'home.presentation': HomePresentation;
      'link.link': LinkLink;
      'media.slider': MediaSlider;
      'seo.seo': SeoSeo;
      'seo.social': SeoSocial;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'skills.character-trait': SkillsCharacterTrait;
      'skills.skill': SkillsSkill;
      'skills.skills-list': SkillsSkillsList;
      'skills.soft-skill': SkillsSoftSkill;
      'slider.slider': SliderSlider;
      'social.social-item': SocialSocialItem;
    }
  }
}
