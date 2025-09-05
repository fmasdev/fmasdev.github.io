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

export interface SkillsFeedBacks extends Schema.Component {
  collectionName: 'components_skills_feed_backs';
  info: {
    displayName: 'FeedBacks';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Content: Attribute.RichText;
    Date: Attribute.Date;
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
      'experience.project': ExperienceProject;
      'seo.seo': SeoSeo;
      'skills.character-trait': SkillsCharacterTrait;
      'skills.feed-backs': SkillsFeedBacks;
      'skills.skill': SkillsSkill;
      'skills.soft-skill': SkillsSoftSkill;
      'slider.slider': SliderSlider;
      'social.social-item': SocialSocialItem;
    }
  }
}
