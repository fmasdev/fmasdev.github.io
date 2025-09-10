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

export interface ExperiencePersonnalProject extends Schema.Component {
  collectionName: 'components_experience_personnal_projects';
  info: {
    displayName: 'PersonnalProject';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Image: Attribute.Media;
    IsImageLeft: Attribute.Boolean & Attribute.DefaultTo<true>;
    Content: Attribute.RichText;
    StackItems: Attribute.Relation<
      'experience.personnal-project',
      'oneToMany',
      'api::stack-item.stack-item'
    >;
    webservices: Attribute.Relation<
      'experience.personnal-project',
      'oneToMany',
      'api::webservice.webservice'
    >;
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
    Media: Attribute.Media;
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
    Media: Attribute.Media;
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
      'experience.personnal-project': ExperiencePersonnalProject;
      'experience.project': ExperienceProject;
      'seo.seo': SeoSeo;
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
