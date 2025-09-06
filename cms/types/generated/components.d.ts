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
    StartDate: Attribute.Date;
    Content: Attribute.Text;
    Project: Attribute.Component<'experience.project', true>;
    StopDate: Attribute.Date;
    Region: Attribute.String;
    Remote: Attribute.Enumeration<['FULL-REMOTE', 'HYBRID', 'OFFICE']>;
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

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.String;
    MetaSocial: Attribute.String;
    MetaRobot: Attribute.String;
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
    Type: Attribute.Enumeration<['Positive', 'Negative', 'Undefined']>;
  };
}

export interface SkillsSkill extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    Skill: Attribute.String;
  };
}

export interface SkillsSoftSkill extends Schema.Component {
  collectionName: 'components_skills_soft_skills';
  info: {
    displayName: 'SoftSkill';
  };
  attributes: {
    Name: Attribute.String;
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
      'seo.seo': SeoSeo;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'skills.character-trait': SkillsCharacterTrait;
      'skills.skill': SkillsSkill;
      'skills.soft-skill': SkillsSoftSkill;
      'slider.slider': SliderSlider;
      'social.social-item': SocialSocialItem;
    }
  }
}
